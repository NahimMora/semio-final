import { useMemo, useRef, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { SISTEMAS_FINAL, TEMAS, TEMA_POR_ID, sistemaDe } from '@content/final/temas';
import { BOLILLERO } from '@content/final/bolillero';
import { MANEUVERS } from '@content/maneuvers';
import { SYSTEMS, isAvailable } from '@content/curriculum';
import { Icon } from '@/components/Icon';
import { Rich } from '@/components/Rich';
import { useAllPublished } from '@/lib/useChapter';
import { borrarError, editarError, estadoInfo, exportarTodo, importarTodo, registroTema, repasarError, setTema, useFinal, ESTADOS } from '@/final/store';
import { Barra, Leyenda, TemaChip, conteo, estadoBolilla, temasDeBolilla, TODOS_LOS_TEMAS } from '@/final/ui';

/* ───────── ERA ───────── */
export function EraPage() {
  const { n } = useParams();
  const era = Number(n) === 2 ? 2 : 1;
  const sistemas = SISTEMAS_FINAL.filter((x) => x.era === era);
  return (
    <div className="f-page">
      <div className="f-kicker">{era === 1 ? 'Primera' : 'Segunda'} evaluación parcial</div>
      <h1>{era === 1 ? 'Primera ERA' : 'Segunda ERA'}</h1>
      <div className="f-tabs">
        <Link to="/era/1" className={era === 1 ? 'is-on' : ''}>
          Primera ERA
        </Link>
        <Link to="/era/2" className={era === 2 ? 'is-on' : ''}>
          Segunda ERA
        </Link>
      </div>
      <Leyenda />
      {sistemas.map((sis) => {
        const temas = TEMAS.filter((t) => t.sistema === sis.id);
        const caps = SYSTEMS.find((x) => x.id === sis.id)?.chapters ?? [];
        return (
          <section key={sis.id} className={`tone-${sis.tone}`}>
            <h2>
              <Icon name={sis.icon} size={20} /> {sis.titulo}
            </h2>
            <Barra ids={temas.map((t) => t.id)} />
            <div className="f-row" style={{ margin: '10px 0' }}>
              {temas.map((t) => (
                <TemaChip key={t.id} id={t.id} />
              ))}
            </div>
            <div className="f-grid f-grid--2">
              {caps.map((c) => {
                const ok = isAvailable(c) || !!c.link;
                return ok ? (
                  <Link key={c.id} to={c.link ?? `/capitulo/${c.id}`} className="f-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h3>{c.title}</h3>
                    <p className="f-muted" style={{ margin: 0 }}>
                      {c.blurb}
                    </p>
                    <small>{c.short}</small>
                  </Link>
                ) : (
                  <div key={c.id} className="f-card" style={{ opacity: 0.75 }}>
                    <h3>{c.title}</h3>
                    <p className="f-muted" style={{ margin: 0 }}>
                      {c.blurb}
                    </p>
                    <span className="f-pend" style={{ display: 'inline-block', marginTop: 6 }}>
                      En preparación (según el cronograma)
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="f-row" style={{ marginTop: 8 }}>
              <Link className="btn btn--sm btn--soft" to={`/ficha?sistema=${sis.id}`}>
                <Icon name="chat" size={14} /> Ficha ChatGPT de {sis.corto}
              </Link>
              {sis.pdf && (
                <a className="btn btn--sm btn--ghost" href={`${import.meta.env.BASE_URL}${sis.pdf}`} target="_blank" rel="noreferrer">
                  <Icon name="download" size={14} /> Apunte PDF
                </a>
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
}

/* ───────── APUNTES PDF ───────── */
export function ApuntesPage() {
  return (
    <div className="f-page">
      <div className="f-kicker">Material impreso</div>
      <h1>Apuntes PDF</h1>
      <p className="f-lead">Un apunte por sistema (no uno por tema). Los de ERA 1 se generan a medida que cada sistema queda completo; los de digestivo, renal y neurología son los que ya tenías y se van a rehacer en el formato nuevo (A4 horizontal, azul y rosado, «Para entenderlo» primero y «Lo que no te podés olvidar» al final).</p>
      <div className="f-grid f-grid--2">
        {SISTEMAS_FINAL.map((s) => (
          <div key={s.id} className={`f-card tone-${s.tone}`}>
            <h3>
              <Icon name={s.icon} size={18} /> {s.titulo}
            </h3>
            {s.pdf ? (
              <a className="btn btn--sm btn--soft" href={`${import.meta.env.BASE_URL}${s.pdf}`} target="_blank" rel="noreferrer">
                <Icon name="download" size={14} /> Abrir el apunte actual
              </a>
            ) : (
              <span className="f-pend">Pendiente: se genera cuando el sistema esté completo.</span>
            )}
            <Link className="btn btn--sm btn--ghost" to={`/manual/${s.id}`} style={{ marginLeft: 6 }}>
              Versión web imprimible
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ───────── BANCO DE ERRORES ───────── */
export function ErroresPage() {
  const s = useFinal();
  const [filtro, setFiltro] = useState<'hoy' | 'todos' | 'resueltos'>('hoy');
  const ahora = Date.now();
  const lista = s.errores.filter((e) => (filtro === 'resueltos' ? e.resuelto : !e.resuelto && (filtro === 'todos' || e.proximo <= ahora)));
  return (
    <div className="f-page">
      <div className="f-kicker">Lo que fallé vuelve hasta que lo sepa</div>
      <h1>Banco de errores</h1>
      <p className="f-lead">Cada pregunta que marcás «no la sabía» o «a medias» entra acá con la respuesta correcta y vuelve al día siguiente, a los 3, 7 y 16 días. Si la acertás cuatro veces seguidas, se da por resuelta.</p>
      <div className="f-tabs">
        {(['hoy', 'todos', 'resueltos'] as const).map((f) => (
          <button key={f} type="button" className={filtro === f ? 'is-on' : ''} onClick={() => setFiltro(f)}>
            {f === 'hoy' ? `Para hoy (${s.errores.filter((e) => !e.resuelto && e.proximo <= ahora).length})` : f === 'todos' ? `Pendientes (${s.errores.filter((e) => !e.resuelto).length})` : `Resueltos (${s.errores.filter((e) => e.resuelto).length})`}
          </button>
        ))}
      </div>
      {lista.length === 0 && <p className="f-muted">Nada por acá.</p>}
      {lista.map((e) => (
        <div key={e.id} className={`f-card f-error ${e.resuelto ? 'is-ok' : e.proximo <= ahora ? 'is-due' : ''}`} style={{ marginBottom: 10 }}>
          <div className="f-row" style={{ justifyContent: 'space-between' }}>
            <strong style={{ flex: '1 1 260px' }}>{e.pregunta}</strong>
            {TEMA_POR_ID[e.temaId] && <TemaChip id={e.temaId} />}
          </div>
          <p className="f-muted" style={{ margin: '4px 0' }}>
            Error del {new Date(e.fecha).toLocaleDateString('es-AR')} · próximo repaso {new Date(e.proximo).toLocaleDateString('es-AR')} · {e.origen ?? ''}
          </p>
          <details className="f-det">
            <summary>Respuesta correcta y concepto a reforzar</summary>
            <p>{e.respuesta}</p>
            <label className="f-muted">
              Concepto que necesito reforzar:
              <input defaultValue={e.concepto} onBlur={(ev) => editarError(e.id, { concepto: ev.target.value })} style={{ width: '100%', minHeight: 40, marginTop: 4 }} />
            </label>
          </details>
          {!e.resuelto && (
            <div className="f-row">
              <button type="button" className="btn btn--sm btn--known" onClick={() => repasarError(e.id, true)}>
                Ahora la sé
              </button>
              <button type="button" className="btn btn--sm btn--unknown" onClick={() => repasarError(e.id, false)}>
                Sigo sin saberla
              </button>
              <button type="button" className="btn btn--sm btn--ghost" onClick={() => borrarError(e.id)}>
                Quitar
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ───────── MEMORIA RÁPIDA ───────── */
export function MemoriaPage() {
  const caps = useAllPublished(true);
  const [q, setQ] = useState('');
  const grupos = useMemo(() => {
    if (!caps) return [];
    return SYSTEMS.map((sys) => ({
      sys,
      caps: caps.filter((c) => c.systemId === sys.id),
    })).filter((g) => g.caps.length);
  }, [caps]);
  const match = (t: string) => !q || t.toLowerCase().includes(q.toLowerCase());
  return (
    <div className="f-page">
      <div className="f-kicker">Para los días previos al examen</div>
      <h1>Memoria rápida</h1>
      <p className="f-lead">Todo lo imprescindible de cada sistema en un solo lugar: tríadas, criterios, valores, clasificaciones y las tarjetas de memoria de cada capítulo. Tapá con la mano y decilo en voz alta.</p>
      <input className="f-card" placeholder="Filtrar (ej.: tríada, Child, RIFLE, Glasgow)" value={q} onChange={(e) => setQ(e.target.value)} style={{ width: '100%', minHeight: 48, marginBottom: 12 }} aria-label="Filtrar memoria rápida" />
      {!caps && <p>Cargando…</p>}
      {grupos.map(({ sys, caps: cs }) => (
        <section key={sys.id} className={`tone-${sys.tone}`}>
          <h2>
            <Icon name={sys.icon} size={20} /> {sys.title}
          </h2>
          {cs.map((c) => {
            const ess = c.closing.essentials.filter(match);
            const mem = c.memory.filter((m) => match(m.title + ' ' + m.mnemonic.hook + ' ' + m.recall.q + ' ' + m.recall.a));
            const qr = (c.quickRef ?? []).filter((t) => match(t.title + ' ' + t.rows.flat().join(' ')));
            if (!ess.length && !mem.length && !qr.length) return null;
            return (
              <details key={c.id} className="f-card f-det" style={{ marginBottom: 10 }} open={!!q}>
                <summary>{c.title}</summary>
                {ess.length > 0 && (
                  <ul>
                    {ess.map((e, i) => (
                      <li key={i}>
                        <Rich text={e} />
                      </li>
                    ))}
                  </ul>
                )}
                {mem.map((m) => (
                  <div key={m.id} className="f-card" style={{ marginBottom: 8 }}>
                    <strong>{m.title}</strong> — <em>{m.mnemonic.hook}</em>
                    <details>
                      <summary>{m.recall.q}</summary>
                      <p>
                        <Rich text={m.recall.a} />
                      </p>
                    </details>
                  </div>
                ))}
                {qr.map((t) => (
                  <div key={t.title} className="f-scroll" style={{ marginBottom: 8 }}>
                    <table className="f-table">
                      <caption style={{ textAlign: 'left', padding: 8, fontWeight: 700 }}>{t.title}</caption>
                      <thead>
                        <tr>
                          {t.head.map((h) => (
                            <th key={h}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {t.rows.map((r, i) => (
                          <tr key={i}>
                            {r.map((x, j) => (
                              <td key={j}>
                                <Rich text={x} />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}
                <Link to={`/capitulo/${c.id}`}>Ir al capítulo →</Link>
              </details>
            );
          })}
        </section>
      ))}
    </div>
  );
}

/* ───────── PROGRESO ───────── */
export function ProgresoFinalPage() {
  const s = useFinal();
  const [sp] = useSearchParams();
  const [msg, setMsg] = useState<string | null>(null);
  const file = useRef<HTMLInputElement>(null);
  const debiles = TEMAS.filter((t) => {
    const r = registroTema(s, t.id);
    return r.estado !== 'pendiente' && r.sinMirar !== true;
  });
  const sinEmpezar = TEMAS.filter((t) => registroTema(s, t.id).estado === 'pendiente');
  const c = conteo(s, TODOS_LOS_TEMAS);
  const manisTotal = new Set(TEMAS.flatMap((t) => t.maniobras ?? []));
  const manisListas = [...manisTotal].filter((id) => TEMAS.some((t) => t.maniobras?.includes(id) && registroTema(s, t.id).sinMirar));
  const exportar = () => {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([exportarTodo()], { type: 'application/json' }));
    a.download = `semio-final-progreso-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
  };
  return (
    <div className="f-page">
      <div className="f-kicker">Sin falsa sensación de avance</div>
      <h1>Progreso</h1>
      <p className="f-lead">Abrir una página o ver un video no cuenta. Cuenta lo que marcás después de practicar: si lo explicás sin mirar y cómo te fue en las preguntas.</p>

      <section className="f-card" id="debiles" style={{ borderColor: sp.get('ver') === 'debiles' ? 'var(--rose-400)' : undefined }}>
        <h3>
          <Icon name="target" size={18} /> Lo que todavía no puedo explicar sin mirar ({debiles.length})
        </h3>
        {debiles.length ? (
          <>
            <div className="f-row">
              {debiles.map((t) => (
                <TemaChip key={t.id} id={t.id} />
              ))}
            </div>
            <Link className="btn btn--sm btn--primary" to="/oral?debiles=1" style={{ marginTop: 10 }}>
              <Icon name="mic" size={14} /> Practicar estos en el simulador
            </Link>
          </>
        ) : (
          <p className="f-muted">Ninguno marcado. Ojo: los {sinEmpezar.length} temas sin empezar tampoco los sabés todavía.</p>
        )}
      </section>

      <h2>General</h2>
      <Barra ids={TODOS_LOS_TEMAS} />
      <div className="f-row" style={{ marginTop: 8 }}>
        {ESTADOS.map((e) => (
          <span key={e.id} className="f-tema">
            <span className={`f-dot f-dot--${e.id}`} /> {e.label}: {c[e.id]}
          </span>
        ))}
      </div>

      <h2>Por ERA y sistema</h2>
      {[1, 2].map((era) => (
        <div key={era} className="f-card" style={{ marginBottom: 10 }}>
          <h3>{era === 1 ? 'Primera ERA' : 'Segunda ERA'}</h3>
          <Barra ids={TEMAS.filter((t) => sistemaDe(t.sistema).era === era).map((t) => t.id)} />
          {SISTEMAS_FINAL.filter((x) => x.era === era).map((sis) => {
            const ids = TEMAS.filter((t) => t.sistema === sis.id).map((t) => t.id);
            const cc = conteo(s, ids);
            return (
              <div key={sis.id} style={{ margin: '10px 0' }}>
                <div className="f-row" style={{ justifyContent: 'space-between' }}>
                  <Link to={`/era/${era}`}>{sis.titulo}</Link>
                  <span className="f-muted">
                    {cc.dominado + cc.preparado}/{ids.length} preparados
                  </span>
                </div>
                <Barra ids={ids} />
              </div>
            );
          })}
        </div>
      ))}

      <h2>Por bolilla</h2>
      <div className="f-row">
        {BOLILLERO.map((b) => {
          const e = estadoBolilla(s, b.n);
          return (
            <Link key={b.n} to={`/bolillero/${b.n}`} className="f-tema" title={e}>
              <span className={`f-dot f-dot--${e === 'dominada' ? 'dominado' : e === 'preparada' ? 'preparado' : e === 'en-camino' ? 'en-estudio' : 'pendiente'}`} /> {b.n}
              <Barra ids={temasDeBolilla(b.n)} />
            </Link>
          );
        })}
      </div>

      <h2>Maniobras</h2>
      <p>
        {manisListas.length} de {manisTotal.size} maniobras del bolillero pertenecen a temas que ya explicás sin mirar. Biblioteca completa: {MANEUVERS.length} maniobras. <Link to="/maniobras">Abrir maniobras →</Link>
      </p>

      <h2>Simulacros</h2>
      {s.orales.length === 0 ? (
        <p className="f-muted">Todavía no hiciste ninguno.</p>
      ) : (
        <ul>
          {s.orales.slice(0, 10).map((o) => (
            <li key={o.at}>
              {new Date(o.at).toLocaleString('es-AR')} · {o.bolilla ? `Bolilla ${o.bolilla}` : `${o.temas.length} temas`} · {o.resultados.filter((r) => r.nota === 2).length}/{o.resultados.length} bien
            </li>
          ))}
        </ul>
      )}

      <h2>Tus datos</h2>
      <div className="f-card">
        <p className="f-muted">El progreso se guarda solo en este dispositivo (no hay sincronización entre dispositivos). Para pasarlo del celular a la tablet o tener un respaldo: exportá y después importá el archivo en el otro.</p>
        <div className="f-row">
          <button type="button" className="btn btn--primary" onClick={exportar}>
            <Icon name="download" size={16} /> Exportar progreso
          </button>
          <button type="button" className="btn btn--ghost" onClick={() => file.current?.click()}>
            <Icon name="upload" size={16} /> Importar progreso
          </button>
          <input
            ref={file}
            type="file"
            accept="application/json"
            hidden
            onChange={async (e) => {
              const f = e.target.files?.[0];
              if (f) setMsg(importarTodo(await f.text()).msg);
            }}
          />
          <button type="button" className="btn btn--ghost" onClick={() => setTema(s.tema === 'oscuro' ? 'claro' : 'oscuro')}>
            Tema {s.tema === 'oscuro' ? 'claro (azul y rosa)' : 'oscuro'}
          </button>
        </div>
        {msg && <p>{msg}</p>}
      </div>
      <p className="f-muted" style={{ marginTop: 10 }}>Estados: {ESTADOS.map((e) => `${estadoInfo(e.id).label} = ${e.ayuda}`).join(' · ')}</p>
    </div>
  );
}
