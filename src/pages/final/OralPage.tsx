import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { BOLILLERO } from '@content/final/bolillero';
import { TEMA_POR_ID } from '@content/final/temas';
import { Icon } from '@/components/Icon';
import { Blocks } from '@/components/Blocks';
import { Rich, refText } from '@/components/Rich';
import { Respuesta } from '@/pages/PreguntasPage';
import { guardarOral, useFinal, registroTema, agregarError, notaPregunta } from '@/final/store';
import { preguntasDeTema, textoRespuesta, TIPO_LABEL, type PreguntaFinal } from '@/final/preguntas';
import { TemaChip, temasDeBolilla } from '@/final/ui';

type Fase = 'config' | 'cargando' | 'pregunta' | 'fin';

function mezclar<T>(a: T[]): T[] {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
}

/** Grabadora opcional: escucharte después ayuda a autoevaluarte (no hay corrección automática). */
function Grabadora({ clave }: { clave: string }) {
  const [rec, setRec] = useState<MediaRecorder | null>(null);
  const [url, setUrl] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);
  useEffect(() => {
    setUrl(null);
    setErr(null);
  }, [clave]);
  if (typeof window === 'undefined' || !('MediaRecorder' in window) || !navigator.mediaDevices) return null;
  const empezar = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const m = new MediaRecorder(stream);
      const partes: Blob[] = [];
      m.ondataavailable = (e) => partes.push(e.data);
      m.onstop = () => {
        stream.getTracks().forEach((t) => t.stop());
        setUrl(URL.createObjectURL(new Blob(partes, { type: m.mimeType })));
      };
      m.start();
      setRec(m);
    } catch {
      setErr('No se pudo usar el micrófono (permiso denegado o no disponible).');
    }
  };
  const parar = () => {
    rec?.stop();
    setRec(null);
  };
  return (
    <div className="f-row" style={{ margin: '8px 0' }}>
      {!rec ? (
        <button type="button" className="btn btn--sm btn--ghost" onClick={empezar}>
          <Icon name="mic" size={15} /> Grabar mi respuesta
        </button>
      ) : (
        <button type="button" className="btn btn--sm btn--unknown is-on" onClick={parar}>
          ■ Detener grabación
        </button>
      )}
      {url && <audio controls src={url} style={{ height: 36 }} />}
      {err && <span className="f-muted">{err}</span>}
      <span className="f-muted">(se queda en tu dispositivo, no se sube)</span>
    </div>
  );
}

export function OralPage() {
  const [sp] = useSearchParams();
  const s = useFinal();
  const bolilla = sp.get('bolilla') ? Number(sp.get('bolilla')) : undefined;
  const temasParam = sp.get('temas')?.split(',').filter((x) => TEMA_POR_ID[x]);
  const debiles = sp.get('debiles') === '1';
  const temas = useMemo(() => {
    if (bolilla) return temasDeBolilla(bolilla);
    if (temasParam?.length) return temasParam;
    if (debiles) return Object.keys(TEMA_POR_ID).filter((id) => {
      const r = registroTema(s, id);
      return r.estado === 'necesita-repaso' || (r.estado !== 'pendiente' && r.sinMirar === false);
    });
    return [];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bolilla, sp.get('temas'), debiles]);

  const [fase, setFase] = useState<Fase>('config');
  const [porTema, setPorTema] = useState(2);
  const [cola, setCola] = useState<PreguntaFinal[]>([]);
  const [i, setI] = useState(0);
  const [ver, setVer] = useState(false);
  const [notas, setNotas] = useState<(0 | 1 | 2)[]>([]);
  const [seg, setSeg] = useState(0);
  const inicio = useRef(0);
  const tick = useRef<number>();

  useEffect(() => {
    setFase('config');
  }, [bolilla, sp]);
  useEffect(() => {
    if (fase !== 'pregunta') return;
    tick.current = window.setInterval(() => setSeg((x) => x + 1), 1000);
    return () => window.clearInterval(tick.current);
  }, [fase, i]);

  const empezar = async () => {
    setFase('cargando');
    const out: PreguntaFinal[] = [];
    for (const id of temas) {
      const ps = await preguntasDeTema(TEMA_POR_ID[id]);
      const propias = ps.filter((p) => !p.delCapitulo);
      const base = propias.length ? propias : ps;
      // primero las que nunca respondí o respondí mal
      const ord = mezclar(base).sort((a, b) => (s.preguntas[a.id]?.nota ?? -1) - (s.preguntas[b.id]?.nota ?? -1));
      out.push(...ord.slice(0, id === 'hc' ? 1 : porTema));
    }
    setCola(out);
    setI(0);
    setNotas([]);
    setVer(false);
    setSeg(0);
    inicio.current = Date.now();
    setFase(out.length ? 'pregunta' : 'fin');
  };

  const calificar = (nota: 0 | 1 | 2) => {
    const p = cola[i];
    notaPregunta(p.id, nota);
    if (nota < 2) agregarError({ pregunta: p.texto, temaId: p.temaId, respuesta: textoRespuesta(p).replace(/\n+/g, ' ').slice(0, 700), concepto: p.claves?.join(' · ') || TEMA_POR_ID[p.temaId]?.titulo || '', origen: 'Simulacro oral' });
    const nn = [...notas, nota];
    setNotas(nn);
    if (i + 1 < cola.length) {
      setI(i + 1);
      setVer(false);
      setSeg(0);
    } else {
      guardarOral({ at: Date.now(), bolilla, temas, resultados: cola.map((q, k) => ({ pregunta: q.texto, temaId: q.temaId, nota: nn[k] })), segundos: Math.round((Date.now() - inicio.current) / 1000) });
      setFase('fin');
    }
  };

  const b = bolilla ? BOLILLERO.find((x) => x.n === bolilla) : undefined;

  if (!temas.length)
    return (
      <div className="f-page f-oral">
        <h1>Simulador oral</h1>
        <p className="f-lead">Elegí qué te tomo. Las preguntas aparecen de a una y sin respuesta: contestá en voz alta (podés grabarte), revelá la respuesta modelo y calificate.</p>
        <div className="f-grid f-grid--2">
          <Link className="f-tile tone-rose" to="/bolillero/sorteo">
            <Icon name="dice" size={22} />
            <strong>Sortear una bolilla</strong>
            <small>Como en el examen real</small>
          </Link>
          <Link className="f-tile tone-gold" to="/oral?debiles=1">
            <Icon name="target" size={22} />
            <strong>Mis temas débiles</strong>
            <small>Los que marcaste «necesita repaso» o «todavía no sin mirar»</small>
          </Link>
        </div>
        <h2>O elegí una bolilla</h2>
        <div className="f-row">
          {BOLILLERO.map((x) => (
            <Link key={x.n} className="btn btn--ghost" to={`/oral?bolilla=${x.n}`} style={{ minWidth: 52, justifyContent: 'center' }}>
              {x.n}
            </Link>
          ))}
        </div>
      </div>
    );

  return (
    <div className="f-page f-oral">
      <div className="f-kicker">{b ? <Link to={`/bolillero/${b.n}`}>Bolilla {b.n}</Link> : debiles ? 'Temas débiles' : 'Simulacro por temas'} · Modo examen oral</div>
      {fase === 'config' && (
        <>
          <h1>{b ? `Bolilla ${b.n}` : 'Simulacro'}</h1>
          {b && (
            <ul>
              {b.items.map((it, k) => (
                <li key={k}>{it.texto}</li>
              ))}
            </ul>
          )}
          <div className="f-row" style={{ margin: '10px 0' }}>
            {temas.map((id) => (
              <TemaChip key={id} id={id} />
            ))}
          </div>
          <div className="f-card">
            <label className="f-row">
              Preguntas por tema:
              {[1, 2, 3].map((k) => (
                <button key={k} type="button" className={`f-estado ${porTema === k ? 'is-on' : ''}`} onClick={() => setPorTema(k)}>
                  {k}
                </button>
              ))}
            </label>
            <p className="f-muted">Sin corrección automática por voz: la evaluación la hacés vos con la respuesta modelo (o exportás a ChatGPT al final). Lo que marcás «no la sabía» o «a medias» entra al banco de errores.</p>
            <button type="button" className="btn btn--primary" onClick={empezar} style={{ minHeight: 50 }}>
              <Icon name="play" size={16} /> Empezar
            </button>
          </div>
        </>
      )}
      {fase === 'cargando' && <p>Armando las preguntas…</p>}
      {fase === 'pregunta' && cola[i] && (
        <>
          <div className="f-row" style={{ justifyContent: 'space-between' }}>
            <span className="f-muted">
              Pregunta {i + 1} de {cola.length} · {TEMA_POR_ID[cola[i].temaId]?.titulo}
            </span>
            <span className="f-oral__timer">
              {Math.floor(seg / 60)}:{String(seg % 60).padStart(2, '0')}
            </span>
          </div>
          <div className="f-oral__q">
            <Rich text={cola[i].texto} />
          </div>
          <span className={`f-prio f-prio--${cola[i].tipo === 'ortega' || cola[i].tipo === 'preguntero' ? 'naranja' : 'azul'}`}>{TIPO_LABEL[cola[i].tipo]}</span>
          <Grabadora clave={cola[i].id} />
          {!ver ? (
            <button type="button" className="btn btn--primary" style={{ minHeight: 52, width: '100%', marginTop: 12 }} onClick={() => setVer(true)}>
              Ya respondí: mostrar la respuesta modelo
            </button>
          ) : (
            <>
              {cola[i].cita && (
                <p className="f-cita">
                  «{cola[i].cita}» {cola[i].ref && <small>({refText(cola[i].ref!)})</small>}
                </p>
              )}
              <div className="f-oral__resp">{cola[i].resp ? <Respuesta r={cola[i].resp!} /> : cola[i].blocks ? <Blocks blocks={cola[i].blocks!} /> : null}</div>
              <div className="f-notas">
                <button type="button" className="f-nota--0" onClick={() => calificar(0)}>
                  No la sabía
                </button>
                <button type="button" className="f-nota--1" onClick={() => calificar(1)}>
                  A medias
                </button>
                <button type="button" className="f-nota--2" onClick={() => calificar(2)}>
                  La sabía
                </button>
              </div>
            </>
          )}
        </>
      )}
      {fase === 'fin' && (
        <>
          <h1>Resultado</h1>
          {cola.length === 0 ? (
            <p className="f-pend">No hay preguntas cargadas para estos temas todavía.</p>
          ) : (
            <>
              <p className="f-lead">
                Sabías {notas.filter((x) => x === 2).length} de {cola.length}; a medias {notas.filter((x) => x === 1).length}; no sabías {notas.filter((x) => x === 0).length}. Lo flojo ya está en el banco de errores.
              </p>
              <ul>
                {cola.map((q, k) => (
                  <li key={q.id}>
                    {['✗', '~', '✓'][notas[k] ?? 0]} <Rich text={q.texto} /> <span className="f-muted">({TEMA_POR_ID[q.temaId]?.titulo})</span>
                  </li>
                ))}
              </ul>
            </>
          )}
          <div className="f-row">
            <button type="button" className="btn btn--primary" onClick={() => setFase('config')}>
              Otra vuelta
            </button>
            <Link className="btn btn--soft tone-lilac" to={b ? `/ficha?bolilla=${b.n}` : `/ficha?temas=${temas.join(',')}`}>
              <Icon name="chat" size={15} /> Seguir con ChatGPT
            </Link>
            <Link className="btn btn--ghost" to="/errores">
              Banco de errores
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
