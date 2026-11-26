import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CRONOGRAMA, temasDelDia } from '@content/final/cronograma';
import { TEMAS, TEMA_POR_ID } from '@content/final/temas';
import { BOLILLERO, BOLILLAS_DE } from '@content/final/bolillero';
import { Icon } from '@/components/Icon';
import { aprobarCronograma, hoyISO, moverBloque, toggleEstudiado, useFinal } from '@/final/store';
import { BloqueCard } from './Inicio';
import { Flags, Leyenda, textoBolillasDe } from '@/final/ui';

const CAMBIOS = [
  'Signos y síntomas repartidos donde se entienden mejor: dolor el 26/11 (va con la anamnesis), fiebre el 27/11 (con la temperatura), disnea y cianosis el 28/11 (respiratorio), edema el 30/11 (cardiovascular) e ictericia el 04/12 (digestivo).',
  'Síndrome anémico e índices hematimétricos el 02/12, dentro del cierre de ERA 1 (bolilla 5).',
  'SOMA el 06/12 («renal: síndromes y pendientes» es el día más liviano de la segunda era).',
  'Examen neurológico integrador (orientación, Glasgow, taxia, gnosias y praxias) el 07/12 junto con los pares craneales.',
  'El 26/11 son 140 min de Semio (empezás de tarde); el resto de la primera vuelta, 195 min con 25 de repaso, en bloques de 90 min como máximo.',
];

export function CronogramaPage() {
  const s = useFinal();
  const hoy = hoyISO();
  const [mover, setMover] = useState<string | null>(null);
  useEffect(() => {
    const h = window.location.hash.split('#').pop();
    if (h?.startsWith('d-')) document.getElementById(h)?.scrollIntoView({ block: 'start' });
  }, []);
  const futuros = CRONOGRAMA.filter((d) => d.fecha >= hoy && d.fecha < '2026-12-14');
  return (
    <div className="f-page">
      <div className="f-kicker">Solo Semiología · 3 h 15 por día</div>
      <h1>Cronograma</h1>
      <p className="f-lead">Primera vuelta del 26/11 al 08/12 (contenido nuevo y recuperación), segunda vuelta del 09/12 al 13/12 (simulacros, errores y práctica oral, sin releer apuntes completos). Marcá los bloques hechos y, abajo de cada día, los temas que estudiaste de verdad: eso alimenta las fichas de ChatGPT.</p>

      <details className="f-card f-det" open={!s.aprobado}>
        <summary>
          <Icon name="info" size={18} /> Cambios propuestos al itinerario {s.aprobado ? '(aprobados)' : '(pendientes de tu aprobación)'}
        </summary>
        <ul>
          {CAMBIOS.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
        {!s.aprobado ? (
          <button type="button" className="btn btn--primary" onClick={aprobarCronograma}>
            Apruebo estos cambios
          </button>
        ) : (
          <p className="f-muted">Aprobado el {new Date(s.aprobado).toLocaleDateString('es-AR')}. Podés mover cualquier bloque con «Reprogramar».</p>
        )}
      </details>

      {CRONOGRAMA.map((d) => {
        const temas = temasDelDia(d);
        const est = s.estudiados[d.fecha] ?? [];
        return (
          <section key={d.fecha} id={`d-${d.fecha}`} style={{ scrollMarginTop: 80 }}>
            <h2 style={{ color: d.fecha === hoy ? 'var(--rose-600)' : undefined }}>
              {d.corto} · {d.titulo} {d.fecha === hoy && <span className="f-prio f-prio--rojo">Hoy</span>}
            </h2>
            <p className="f-muted">
              {d.vuelta === 1 ? 'Primera vuelta' : 'Segunda vuelta'} · {d.minutos} min{d.control ? ` · ${d.control}` : ''}
            </p>
            {d.bloques.map((b) => (
              <div key={b.id}>
                <BloqueCard b={b} dia={d} s={s} />
                {b.tipo !== 'examen' && !s.bloques[b.id]?.hecho && (
                  <div className="f-row" style={{ margin: '-4px 0 10px 54px' }}>
                    {mover === b.id ? (
                      <>
                        <span className="f-muted">Mover a:</span>
                        {futuros.map((f) => (
                          <button key={f.fecha} type="button" className="btn btn--sm btn--ghost" onClick={() => { moverBloque(b.id, f.fecha); setMover(null); }}>
                            {f.corto}
                          </button>
                        ))}
                        {s.movidos[b.id] && (
                          <button type="button" className="btn btn--sm btn--ghost" onClick={() => { moverBloque(b.id, null); setMover(null); }}>
                            Volver a su día
                          </button>
                        )}
                      </>
                    ) : (
                      <button type="button" className="btn btn--sm btn--ghost" onClick={() => setMover(b.id)}>
                        Reprogramar{s.movidos[b.id] ? ` (ahora: ${s.movidos[b.id].slice(8, 10)}/${s.movidos[b.id].slice(5, 7)})` : ''}
                      </button>
                    )}
                  </div>
                )}
              </div>
            ))}
            {temas.length > 0 && (
              <details className="f-det">
                <summary>Lo que estudié de verdad este día ({est.length})</summary>
                <div className="f-row">
                  {temas.map((id) => (
                    <label key={id} className="f-tema" style={{ cursor: 'pointer' }}>
                      <input type="checkbox" checked={est.includes(id)} onChange={() => toggleEstudiado(d.fecha, id)} /> {TEMA_POR_ID[id].titulo}
                    </label>
                  ))}
                </div>
              </details>
            )}
            <Link className="btn btn--sm btn--soft tone-lilac" to={`/ficha?dia=${d.fecha}`} style={{ marginTop: 8 }}>
              <Icon name="chat" size={14} /> Ficha ChatGPT del {d.corto}
            </Link>
          </section>
        );
      })}
    </div>
  );
}

export function MatrizPage() {
  const enBol = TEMAS.filter((t) => BOLILLAS_DE[t.id]?.length);
  const comp = TEMAS.filter((t) => !BOLILLAS_DE[t.id]?.length);
  const listos = enBol.filter((t) => t.estado === 'listo').length;
  return (
    <div className="f-page">
      <div className="f-kicker">Control de cobertura</div>
      <h1>Matriz bolillas × temas</h1>
      <p className="f-lead">
        {enBol.length} temas del bolillero cubren las 20 bolillas (verificado automáticamente en cada compilación). Desarrollo en la plataforma: <strong>{listos}</strong> listos, {enBol.filter((t) => t.estado === 'parcial').length} parciales y {enBol.filter((t) => t.estado === 'pendiente').length} en preparación.
      </p>
      <Leyenda />
      <div className="f-scroll" style={{ marginTop: 12 }}>
        <table className="f-table f-matriz">
          <thead>
            <tr>
              <th>Tema</th>
              <th>Desarrollo</th>
              {BOLILLERO.map((b) => (
                <th key={b.n} className="f-c">
                  <Link to={`/bolillero/${b.n}`}>{b.n}</Link>
                </th>
              ))}
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {enBol.map((t) => {
              const ns = BOLILLAS_DE[t.id];
              return (
                <tr key={t.id}>
                  <td>
                    <Link to={`/tema/${t.id}`}>
                      <Flags t={t} /> {t.titulo}
                    </Link>
                  </td>
                  <td>{t.estado === 'listo' ? '✓ listo' : t.estado === 'parcial' ? '◐ parcial' : '○ en preparación'}</td>
                  {BOLILLERO.map((b) => (
                    <td key={b.n} className="f-c">
                      {ns.includes(b.n) ? <span className={`f-x ${t.id === 'hc' ? 'f-x--hc' : ''}`} title={`Bolilla ${b.n}`} /> : ''}
                    </td>
                  ))}
                  <td className="f-c">{ns.length}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <h2>Complementarios (azul)</h2>
      <p className="f-muted">No están en el bolillero, pero hacen falta para entender o para las repreguntas.</p>
      <div className="f-row">
        {comp.map((t) => (
          <Link key={t.id} to={`/tema/${t.id}`} className="f-tema">
            <Flags t={t} /> {t.titulo}
          </Link>
        ))}
      </div>
      <h2>Cada bolilla, ítem por ítem</h2>
      <div className="f-scroll">
        <table className="f-table">
          <thead>
            <tr>
              <th>Bolilla</th>
              <th>Ítem oficial</th>
              <th>Tema(s) de la plataforma</th>
            </tr>
          </thead>
          <tbody>
            {BOLILLERO.flatMap((b) =>
              b.items.map((it, i) => (
                <tr key={`${b.n}-${i}`}>
                  <td>{i === 0 ? <Link to={`/bolillero/${b.n}`}>{b.n}</Link> : ''}</td>
                  <td>{it.texto}</td>
                  <td>
                    {it.temas.map((id) => (
                      <div key={id}>
                        <Link to={`/tema/${id}`}>{TEMA_POR_ID[id].titulo}</Link> <span className="f-muted">· {textoBolillasDe(id)}</span>
                      </div>
                    ))}
                  </td>
                </tr>
              )),
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
