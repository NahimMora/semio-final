import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom';
import { CRONOGRAMA, FECHA_FINAL, type Bloque, type Dia } from '@content/final/cronograma';
import { BOLILLERO } from '@content/final/bolillero';
import { SISTEMAS_FINAL, TEMA_POR_ID } from '@content/final/temas';
import { UNIDADES, UNIDAD_POR_ID, UNIDAD_DE_TEMA, type Unidad } from '@content/final/unidades';
import { findChapter } from '@content/curriculum';
import { Icon } from '@/components/Icon';
import { Rich } from '@/components/Rich';
import { VideoPlayer } from '@/components/VideoPlayer';
import { Visor } from '@/clase/Visor';
import { diasEntre, fechaLarga, hoyISO, setBloque, useFinal } from '@/final/store';
import { textoBolillasDe } from '@/final/ui';
import { armarFicha, fichaDelDia } from '@/final/ficha';
import { cargarClase, tieneApunte, useApunte } from '@/oral/apuntes';
import type { PlanClase } from '@/clase/tipos';
import { IntroUnidad, NoOlvidar, TemaOral } from '@/oral/Render';
import '@/styles/clase.css';
import '@/styles/nuevo.css';

/* ───────── utilidades ───────── */
function toast(m: string) {
  const el = document.createElement('div');
  el.className = 'nx-toast';
  el.setAttribute('role', 'status');
  el.textContent = m;
  document.body.appendChild(el);
  window.setTimeout(() => el.remove(), 2200);
}

const unidadesDe = (temas: string[]) => [...new Set(temas.map((t) => UNIDAD_DE_TEMA[t]).filter(Boolean))].map((id) => UNIDAD_POR_ID[id]);

function temasDeBloque(b: Bloque): string[] {
  if (!b.repasa) return b.temas;
  return b.repasa.flatMap((c) => CRONOGRAMA.find((d) => d.corto === c)?.bloques.flatMap((x) => x.temas) ?? []);
}

function estadoUnidad(u: Unidad): { txt: string; cls: string } {
  const ap = tieneApunte(u.id);
  const ent = u.clases.length > 0;
  if (ap && ent) return { txt: 'Completo', cls: 'ok' };
  if (ent) return { txt: 'Entender listo · apunte en preparación', cls: 'medio' };
  return { txt: 'En preparación', cls: 'pend' };
}

function IrUnidad({ u, modo, hash }: { u: Unidad; modo?: 'entender' | 'oral'; hash?: string }) {
  const e = estadoUnidad(u);
  return (
    <Link to={`/u/${u.id}${modo ? `?modo=${modo}` : ''}${hash ? `#${hash}` : ''}`} className={`nx-ir ${e.cls === 'pend' ? 'nx-ir--pend' : e.cls === 'ok' ? 'nx-ir--rosa' : ''}`}>
      <span>
        <strong>{u.titulo}</strong>
        <small>{u.bajada}</small>
      </span>
      <span className="nx-fila" style={{ flexWrap: 'nowrap' }}>
        <span className={`nx-estado nx-estado--${e.cls}`}>{e.txt}</span>
        <span className="nx-flecha">›</span>
      </span>
    </Link>
  );
}

/* ═════════ INICIO Y CRONOGRAMA ═════════ */
export function InicioNuevo() {
  const s = useFinal();
  const hoy = hoyISO();
  const dia: Dia = CRONOGRAMA.find((d) => d.fecha === hoy) ?? (hoy < CRONOGRAMA[0].fecha ? CRONOGRAMA[0] : CRONOGRAMA[CRONOGRAMA.length - 1]);
  const faltan = diasEntre(hoy, FECHA_FINAL);
  return (
    <main className="nx-main">
      <div className="nx-kicker">{dia.corto} · {dia.vuelta === 1 ? 'primera vuelta' : 'segunda vuelta'}</div>
      <h1>{dia.titulo}</h1>
      <p className="nx-hoy__fecha">
        {fechaLarga(hoy)} · <span className="nx-cuenta">{faltan > 0 ? `faltan ${faltan} días` : faltan === 0 ? 'hoy es el final' : 'final rendido'}</span>
      </p>

      <section>
        {dia.bloques.map((b) => {
          const hecho = !!s.bloques[b.id]?.hecho;
          const us = unidadesDe(temasDeBloque(b));
          return (
            <div key={b.id} className={`nx-bloque ${hecho ? 'is-hecho' : ''}`}>
              <button type="button" className={`nx-bloque__check ${hecho ? 'is-on' : ''}`} onClick={() => setBloque(b.id, !hecho)} aria-pressed={hecho} aria-label={hecho ? 'Marcar como no hecho' : 'Marcar como hecho'}>
                {hecho && <Icon name="check" size={18} />}
              </button>
              <div>
                <div className="nx-bloque__meta">
                  {b.min ? `${b.min} min · ` : ''}
                  {b.tipo === 'nuevo' ? 'estudiar' : b.tipo === 'recuerdo' ? 'recordar sin mirar' : b.tipo}
                </div>
                <div className="nx-bloque__tit">{b.titulo}</div>
                {b.nota && <p className="nx-tenue nx-chico">{b.nota}</p>}
                {us.map((u) => (
                  <IrUnidad key={u.id} u={u} />
                ))}
                {b.repasa && (
                  <div className="nx-fila" style={{ marginTop: 8 }}>
                    {b.repasa.map((c) => {
                      const d = CRONOGRAMA.find((x) => x.corto === c);
                      return d ? (
                        <Link key={c} className="nx-btn nx-btn--chico" to={`/oral?ficha=dia:${d.fecha}`}>
                          <Icon name="chat" size={15} /> Ficha para la IA del {c}
                        </Link>
                      ) : null;
                    })}
                  </div>
                )}
                {(b.tipo === 'simulacro' || b.tipo === 'errores' || b.tipo === 'debiles') && (
                  <Link className="nx-btn nx-btn--chico" to="/oral" style={{ marginTop: 6 }}>
                    <Icon name="mic" size={15} /> Ir a práctica oral
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </section>

      <h2>Cronograma</h2>
      <ul className="nx-dias">
        {CRONOGRAMA.map((d) => {
          const us = unidadesDe(d.bloques.flatMap((b) => b.temas));
          return (
            <li key={d.fecha} className={d.fecha === hoy ? 'is-hoy' : d.fecha < hoy ? 'is-pasado' : ''}>
              <b>{d.corto}</b>
              <span>
                {d.titulo}
                {us.length > 0 && (
                  <span className="nx-tenue nx-chico" style={{ display: 'block' }}>
                    {us.map((u, i) => (
                      <span key={u.id}>
                        {i > 0 && ' · '}
                        <Link to={`/u/${u.id}`}>{u.titulo}</Link>
                      </span>
                    ))}
                  </span>
                )}
              </span>
            </li>
          );
        })}
      </ul>
      <p className="nx-tenue nx-chico" style={{ marginTop: 12 }}>
        3 h 15 de Semio por día, en bloques de 90 min como máximo. Desde el 09/12: recordar, simulacros y errores; nada de releer apuntes completos.
      </p>
    </main>
  );
}

/* ═════════ TEMAS ═════════ */
export function TemasNuevo() {
  const [sp] = useSearchParams();
  const era = sp.get('era') === '2' ? 2 : 1;
  return (
    <main className="nx-main">
      <h1>Temas</h1>
      <div className="nx-era">
        <Link to="/temas?era=1" className={era === 1 ? 'active' : ''}>
          Primera ERA
        </Link>
        <Link to="/temas?era=2" className={era === 2 ? 'active' : ''}>
          Segunda ERA
        </Link>
      </div>
      {SISTEMAS_FINAL.filter((x) => x.era === era).map((sis) => {
        const us = UNIDADES.filter((u) => u.sistema === sis.id);
        if (!us.length) return null;
        return (
          <section key={sis.id} className="nx-sis">
            {!(us.length === 1 && us[0].titulo === sis.titulo) && <h3>{sis.titulo}</h3>}
            {us.map((u) => (
              <IrUnidad key={u.id} u={u} />
            ))}
          </section>
        );
      })}
    </main>
  );
}

/* ═════════ UNA UNIDAD: PARA ENTENDERLO · PARA EL ORAL ═════════ */
export function UnidadNueva() {
  const { id } = useParams();
  const [sp, setSp] = useSearchParams();
  const loc = useLocation();
  const u = id ? UNIDAD_POR_ID[id] : undefined;
  const apunte = useApunte(u?.id);
  const modo = (sp.get('modo') ?? (loc.hash ? 'oral' : 'entender')) as 'entender' | 'oral';
  useEffect(() => {
    if (loc.hash && apunte) window.setTimeout(() => document.getElementById(loc.hash.slice(1))?.scrollIntoView({ behavior: 'smooth' }), 60);
  }, [loc.hash, apunte, modo]);
  if (!u)
    return (
      <main className="nx-main">
        <h1>No encontré ese tema</h1>
        <Link to="/temas">Ver todos los temas</Link>
      </main>
    );
  const cambiar = (m: 'entender' | 'oral') => setSp({ modo: m }, { replace: true });
  return (
    <main className="nx-main">
      <div className="nx-kicker">
        <Link to={`/temas?era=${u.era}`}>{u.era === 1 ? 'Primera' : 'Segunda'} ERA</Link> · {SISTEMAS_FINAL.find((x) => x.id === u.sistema)?.titulo}
      </div>
      <h1>{u.titulo}</h1>
      <p className="nx-tenue" style={{ marginTop: 8 }}>
        {u.bajada}
      </p>
      <div className="nx-modo" role="tablist">
        <button type="button" role="tab" aria-selected={modo === 'entender'} className={modo === 'entender' ? 'is-on' : ''} onClick={() => cambiar('entender')}>
          Para entenderlo
        </button>
        <button type="button" role="tab" aria-selected={modo === 'oral'} className={modo === 'oral' ? 'is-on' : ''} onClick={() => cambiar('oral')}>
          Para el oral
        </button>
      </div>
      {modo === 'entender' ? <Entender u={u} porques={apunte?.temas.flatMap((t) => (t.porque ?? []).map((p) => ({ t: t.titulo, p })))} /> : <Oral u={u} apunte={apunte} />}
    </main>
  );
}

function Entender({ u, porques }: { u: Unidad; porques?: { t: string; p: string }[] }) {
  const [caps, setCaps] = useState<{ id: string; title: string; clase: PlanClase }[] | null>(null);
  const [i, setI] = useState(0);
  useEffect(() => {
    setCaps(null);
    setI(0);
    void Promise.all(u.clases.map((c) => cargarClase(c))).then((l) => setCaps(l.filter((c): c is { id: string; title: string; clase: PlanClase } => !!c)));
  }, [u]);
  if (!u.clases.length)
    return (
      <>
        <p className="nx-aviso">El video y las diapositivas de esta unidad todavía no están hechos. Se generan siguiendo el cronograma.</p>
        {porques?.length ? <Porques porques={porques} /> : null}
      </>
    );
  if (!caps) return <p className="nx-tenue">Cargando…</p>;
  if (!caps.length) return <p className="nx-aviso">No se pudieron cargar las diapositivas de esta unidad.</p>;
  const c = caps[i];
  return (
    <>
      {caps.length > 1 && (
        <div className="nx-indice">
          {caps.map((x, k) => (
            <a key={x.id} href="#" onClick={(e) => { e.preventDefault(); setI(k); }} style={k === i ? { background: 'var(--nx-tinta)', color: 'var(--nx-fondo)' } : undefined}>
              {x.title}
            </a>
          ))}
        </div>
      )}
      {c?.clase?.video && (
        <div className="nx-video">
          <VideoPlayer video={c.clase.video} title={c.title} />
        </div>
      )}
      {c?.clase && (
        <>
          <h2 style={{ marginTop: 10 }}>Diapositivas</h2>
          <p className="nx-tenue nx-chico">A tu ritmo: cada paso revela lo que sigue y abajo tenés la explicación.</p>
          <Visor key={c.id} mazo={c.clase.fisio} chapterId={c.id} />
        </>
      )}
      {porques?.length ? <Porques porques={porques} /> : null}
    </>
  );
}

function Porques({ porques }: { porques: { t: string; p: string }[] }) {
  return (
    <>
      <h2>Los porqués, en pocas líneas</h2>
      <ol className="nx-porque">
        {porques.map((x, k) => (
          <li key={k}>
            <Rich text={x.p} />
          </li>
        ))}
      </ol>
    </>
  );
}

function Oral({ u, apunte }: { u: Unidad; apunte: ReturnType<typeof useApunte> }) {
  if (apunte === undefined) return <p className="nx-tenue">Cargando…</p>;
  if (!apunte)
    return (
      <>
        <p className="nx-aviso">El apunte conciso para el oral de esta unidad está en preparación (sigue el cronograma). Mientras tanto, esto es lo que entra:</p>
        {u.temas.map((t) => (
          <div key={t} id={t} className="ap-tema">
            <div className="ap-tema__head">
              <h3>{TEMA_POR_ID[t].titulo}</h3>
              <span className="ap-bol">{textoBolillasDe(t)}</span>
            </div>
            <p>{TEMA_POR_ID[t].resumen}</p>
          </div>
        ))}
        {u.anterior?.length ? (
          <>
            <h2>Material anterior (versión larga)</h2>
            {u.anterior.map((c) => (
              <Link key={c} className="nx-ir" to={`/capitulo/${c}`}>
                <strong>{findChapter(c)?.title ?? c}</strong>
                <span className="nx-flecha">›</span>
              </Link>
            ))}
          </>
        ) : null}
      </>
    );
  return (
    <>
      {apunte.temas.length > 1 && (
        <nav className="nx-indice" aria-label="Temas de esta unidad">
          {apunte.intro && <a href="#integrar">{apunte.intro.titulo}</a>}
          {apunte.temas.map((t) => (
            <a key={t.tema} href={`#${t.tema}`}>
              {t.titulo}
            </a>
          ))}
        </nav>
      )}
      <IntroUnidad a={apunte} />
      {apunte.temas.map((t) => (
        <TemaOral key={t.tema} t={t} />
      ))}
      <NoOlvidar a={apunte} />
      <div className="nx-fila" style={{ marginTop: 20 }}>
        <Link className="nx-btn nx-btn--pri" to={`/oral?ficha=unidad:${u.id}`}>
          <Icon name="chat" size={16} /> Que la IA me tome esto
        </Link>
        <Link className="nx-btn" to="/apuntes">
          <Icon name="download" size={16} /> Apunte PDF
        </Link>
      </div>
    </>
  );
}

/* ═════════ BOLILLERO ═════════ */
export function BolilleroNuevo() {
  const [abierta, setAbierta] = useState<number | null>(null);
  const [gira, setGira] = useState(false);
  const [sorteada, setSorteada] = useState<number | null>(null);
  const t = useRef<number>();
  useEffect(() => () => window.clearInterval(t.current), []);
  const sortear = () => {
    setGira(true);
    let k = 0;
    t.current = window.setInterval(() => {
      setSorteada(1 + Math.floor(Math.random() * 20));
      if (++k > 12) {
        window.clearInterval(t.current);
        const n = 1 + (crypto.getRandomValues(new Uint32Array(1))[0] % 20);
        setSorteada(n);
        setAbierta(n);
        setGira(false);
        window.setTimeout(() => document.getElementById(`b-${n}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
      }
    }, 90);
  };
  return (
    <main className="nx-main">
      <div className="nx-kicker">Semiología general · examen final</div>
      <h1>Bolillero oficial</h1>
      <p className="nx-tenue" style={{ marginTop: 8 }}>
        Las 20 bolillas tal como figuran en el archivo oficial. Cada punto lleva a su apunte (un tema que aparece en varias bolillas se estudia en un solo lugar).
      </p>
      <div className="nx-fila" style={{ margin: '14px 0 6px' }}>
        <button type="button" className="nx-btn nx-btn--rosa" onClick={sortear} disabled={gira}>
          <Icon name="dice" size={18} /> Sortear una bolilla
        </button>
        {sorteada && <span className={`nx-bola ${gira ? 'gira' : ''}`}>{sorteada}</span>}
      </div>
      {BOLILLERO.map((b) => (
        <div key={b.n} id={`b-${b.n}`} className="nx-bol" style={{ scrollMarginTop: 80 }}>
          <button type="button" onClick={() => setAbierta(abierta === b.n ? null : b.n)} aria-expanded={abierta === b.n}>
            <span className="nx-bola">{b.n}</span>
            <span className="nx-bol__res">{b.items.map((i) => i.texto).join(' · ')}</span>
            <span className="nx-flecha">{abierta === b.n ? '−' : '+'}</span>
          </button>
          {abierta === b.n && (
            <ul className="nx-bol__items">
              {b.items.map((it, k) => {
                const u = UNIDAD_DE_TEMA[it.temas[0]];
                return (
                  <li key={k}>
                    <Link to={`/u/${u}?modo=oral#${it.temas[0]}`}>
                      {it.texto}
                      <small style={{ display: 'block' }}>
                        → {UNIDAD_POR_ID[u]?.titulo} {tieneApunte(u) ? '' : '· apunte en preparación'}
                      </small>
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link to={`/oral?bolilla=${b.n}`} style={{ background: 'none', color: 'var(--nx-rosa)', fontWeight: 700 }}>
                  Practicar esta bolilla en voz alta →
                </Link>
              </li>
            </ul>
          )}
        </div>
      ))}
      <p className="nx-tenue nx-chico" style={{ marginTop: 18 }}>
        <Link to="/matriz">Control de cobertura: las 20 bolillas × todos los temas</Link>
      </p>
    </main>
  );
}

/* ═════════ APUNTES ═════════ */
/** Sistemas con apunte PDF en el formato nuevo (public/pdf/apunte-<id>.pdf). */
export const PDF_NUEVOS: string[] = ['hc', 'signos', 'vitales', 'cyc', 'resp'];

export function ApuntesNuevo() {
  const base = import.meta.env.BASE_URL;
  return (
    <main className="nx-main">
      <h1>Apuntes</h1>
      <p className="nx-tenue" style={{ marginTop: 8 }}>
        Un apunte por sistema para imprimir y memorizar: A4 horizontal, azul y rosa. Cada tema empieza con «Para entenderlo» y el sistema termina con «Lo que no te podés olvidar».
      </p>
      {[1, 2].map((era) => (
        <section key={era} className="nx-sis">
          <h3>{era === 1 ? 'Primera ERA' : 'Segunda ERA'}</h3>
          {SISTEMAS_FINAL.filter((x) => x.era === era).map((sis) => {
            const listo = PDF_NUEVOS.includes(sis.id);
            return (
              <div key={sis.id} className={`nx-ir ${listo ? 'nx-ir--rosa' : 'nx-ir--pend'}`}>
                <span>
                  <strong>{sis.titulo}</strong>
                  <small>{listo ? 'Apunte nuevo listo' : 'Se genera cuando el sistema esté completo'}</small>
                </span>
                {listo ? (
                  <a className="nx-btn nx-btn--chico nx-btn--pri" href={`${base}pdf/apunte-${sis.id}.pdf`} target="_blank" rel="noreferrer">
                    PDF
                  </a>
                ) : sis.pdf ? (
                  <a className="nx-btn nx-btn--chico" href={`${base}${sis.pdf}`} target="_blank" rel="noreferrer" title="Versión anterior, del parcial">
                    Versión anterior
                  </a>
                ) : (
                  <span className="nx-estado nx-estado--pend">Pendiente</span>
                )}
              </div>
            );
          })}
        </section>
      ))}
    </main>
  );
}

/* ═════════ PRÁCTICA ORAL ═════════ */
type TipoFicha = 'dia' | 'unidad' | 'bolilla' | 'sistema';

export function OralNuevo() {
  const [sp, setSp] = useSearchParams();
  const bolilla = sp.get('bolilla') ? Number(sp.get('bolilla')) : null;
  const ficha = sp.get('ficha');
  return (
    <main className="nx-main">
      <h1>Práctica oral</h1>
      <p className="nx-tenue" style={{ marginTop: 8 }}>
        Sacá una bolilla y desarrollá cada punto en voz alta, como frente al profesor. Para que te tomen con repreguntas y te corrijan, exportá la ficha a ChatGPT o Claude.
      </p>
      <h2>Bolilla</h2>
      <div className="nx-fila">
        <select className="nx-select" value={bolilla ?? ''} onChange={(e) => setSp(e.target.value ? { bolilla: e.target.value } : {})} aria-label="Elegir bolilla">
          <option value="">Elegí una bolilla…</option>
          {BOLILLERO.map((b) => (
            <option key={b.n} value={b.n}>
              Bolilla {b.n}
            </option>
          ))}
        </select>
        <button type="button" className="nx-btn nx-btn--rosa" onClick={() => setSp({ bolilla: String(1 + (crypto.getRandomValues(new Uint32Array(1))[0] % 20)) })}>
          <Icon name="dice" size={18} /> Sortear
        </button>
      </div>
      {bolilla && <PracticaBolilla n={bolilla} />}
      <h2>Ficha para la IA</h2>
      <GeneradorFicha inicial={ficha ?? (bolilla ? `bolilla:${bolilla}` : null)} />
    </main>
  );
}

function PracticaBolilla({ n }: { n: number }) {
  const b = BOLILLERO.find((x) => x.n === n)!;
  return (
    <div style={{ marginTop: 16 }}>
      <div className="nx-fila" style={{ marginBottom: 12 }}>
        <span className="nx-bola nx-bola--grande" style={{ width: 84, height: 84, fontSize: 42, margin: 0 }}>
          {n}
        </span>
        <span className="nx-tenue">Desarrollá cada punto sin mirar. Después abrí «Así se responde» y compará.</span>
      </div>
      {b.items.map((it, k) => (
        <PuntoBolilla key={k} texto={it.texto} temas={it.temas} />
      ))}
    </div>
  );
}

function PuntoBolilla({ texto, temas }: { texto: string; temas: string[] }) {
  const [ver, setVer] = useState(false);
  const u = UNIDAD_DE_TEMA[temas[0]];
  const ap = useApunte(ver ? u : undefined);
  const ts = ap?.temas.filter((t) => temas.includes(t.tema)) ?? [];
  return (
    <div className="nx-tarjeta">
      <h3>{texto}</h3>
      {!ver ? (
        <button type="button" className="nx-btn nx-btn--chico" onClick={() => setVer(true)}>
          Ya lo dije: así se responde
        </button>
      ) : ap === undefined ? (
        <p className="nx-tenue">Cargando…</p>
      ) : ts.length ? (
        ts.map((t) => (
          <div key={t.tema}>
            <p style={{ fontStyle: 'italic' }}>
              <Rich text={t.oral} />
            </p>
            {t.repreguntas?.length ? (
              <>
                <strong>Te pueden repreguntar:</strong>
                <ul>
                  {t.repreguntas.map((r, i) => (
                    <li key={i}>
                      <Rich text={r.q} /> <span className="nx-tenue">— <Rich text={r.a} /></span>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
            <Link to={`/u/${u}?modo=oral#${t.tema}`}>Ver el apunte completo →</Link>
          </div>
        ))
      ) : (
        <p className="nx-tenue">
          Apunte en preparación. <Link to={`/u/${u}?modo=oral#${temas[0]}`}>Ver lo que entra →</Link>
        </p>
      )}
    </div>
  );
}

function GeneradorFicha({ inicial }: { inicial: string | null }) {
  const [tipo, setTipo] = useState<TipoFicha>(() => (inicial?.split(':')[0] as TipoFicha) ?? 'dia');
  const [valor, setValor] = useState<string>(() => inicial?.split(':').slice(1).join(':') ?? hoyISO());
  const [texto, setTexto] = useState<string | null>(null);
  useEffect(() => {
    if (inicial) {
      setTipo(inicial.split(':')[0] as TipoFicha);
      setValor(inicial.split(':').slice(1).join(':'));
    }
  }, [inicial]);
  const opciones = useMemo(() => {
    if (tipo === 'dia') return CRONOGRAMA.filter((d) => d.minutos > 0).map((d) => ({ v: d.fecha, t: `${d.corto} · ${d.titulo}` }));
    if (tipo === 'unidad') return UNIDADES.map((u) => ({ v: u.id, t: u.titulo }));
    if (tipo === 'bolilla') return BOLILLERO.map((b) => ({ v: String(b.n), t: `Bolilla ${b.n}` }));
    return SISTEMAS_FINAL.map((x) => ({ v: x.id, t: x.titulo }));
  }, [tipo]);
  useEffect(() => {
    if (!opciones.some((o) => o.v === valor)) setValor(opciones[0]?.v ?? '');
  }, [opciones, valor]);
  useEffect(() => {
    setTexto(null);
    if (!valor) return;
    let vivo = true;
    (async () => {
      let t: string | null = null;
      if (tipo === 'dia') t = (await fichaDelDia(valor))?.texto ?? null;
      else if (tipo === 'unidad') t = await armarFicha(UNIDAD_POR_ID[valor]?.temas ?? [], { titulo: UNIDAD_POR_ID[valor]?.titulo ?? valor });
      else if (tipo === 'bolilla') {
        const b = BOLILLERO.find((x) => String(x.n) === valor)!;
        t = await armarFicha([...new Set(b.items.flatMap((i) => i.temas))], { titulo: `Bolilla ${b.n}`, nota: `Puntos de la bolilla: ${b.items.map((i) => i.texto).join(' · ')}. Tomame la bolilla completa como en el examen.` });
      } else t = await armarFicha(UNIDADES.filter((u) => u.sistema === valor).flatMap((u) => u.temas), { titulo: SISTEMAS_FINAL.find((x) => x.id === valor)?.titulo ?? valor });
      if (vivo) setTexto(t);
    })();
    return () => {
      vivo = false;
    };
  }, [tipo, valor]);
  const copiar = async () => {
    if (!texto) return;
    try {
      await navigator.clipboard.writeText(texto);
      toast('Ficha copiada');
    } catch {
      toast('No se pudo copiar: seleccioná el texto');
    }
  };
  const bajar = (ext: 'md' | 'txt') => {
    if (!texto) return;
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([texto], { type: 'text/plain' }));
    a.download = `ficha-semio-${tipo}-${valor}.${ext}`;
    a.click();
  };
  return (
    <div className="nx-tarjeta">
      <div className="nx-fila">
        <select className="nx-select" value={tipo} onChange={(e) => setTipo(e.target.value as TipoFicha)} aria-label="Qué exportar">
          <option value="dia">Un día del cronograma</option>
          <option value="unidad">Un tema</option>
          <option value="bolilla">Una bolilla</option>
          <option value="sistema">Un sistema</option>
        </select>
        <select className="nx-select" value={valor} onChange={(e) => setValor(e.target.value)} aria-label="Cuál">
          {opciones.map((o) => (
            <option key={o.v} value={o.v}>
              {o.t}
            </option>
          ))}
        </select>
      </div>
      <div className="nx-fila" style={{ margin: '12px 0' }}>
        <button type="button" className="nx-btn nx-btn--pri" onClick={copiar} disabled={!texto}>
          <Icon name="copy" size={16} /> Copiar
        </button>
        <button type="button" className="nx-btn" disabled={!texto} onClick={async () => { await copiar(); window.open('https://chatgpt.com/', '_blank', 'noopener'); }}>
          Abrir ChatGPT
        </button>
        <button type="button" className="nx-btn" disabled={!texto} onClick={async () => { await copiar(); window.open('https://claude.ai/new', '_blank', 'noopener'); }}>
          Abrir Claude
        </button>
        <button type="button" className="nx-btn nx-btn--chico" disabled={!texto} onClick={() => bajar('md')}>
          .md
        </button>
        <button type="button" className="nx-btn nx-btn--chico" disabled={!texto} onClick={() => bajar('txt')}>
          .txt
        </button>
      </div>
      <p className="nx-tenue nx-chico">Copiás, abrís la IA y pegás: la ficha ya trae las instrucciones de examinador, los temas con la respuesta esperada y lo imprescindible.</p>
      {texto ? <pre className="nx-ficha">{texto}</pre> : <p className="nx-tenue">Armando la ficha…</p>}
    </div>
  );
}
