import { useState } from 'react';
import type { ApunteTema, ApunteUnidad, BloqueOral } from '@content/oral/tipos';
import { MANEUVERS } from '@content/maneuvers';
import { Rich } from '@/components/Rich';
import { textoBolillasDe } from '@/final/ui';
import { Ilustracion } from './Ilustraciones';

/** Un bloque del apunte para el oral. `impreso`: versión para el PDF (sin interacción). */
export function Bloque({ b, impreso }: { b: BloqueOral; impreso?: boolean }) {
  switch (b.t) {
    case 'def':
      return (
        <p className="ap-def">
          <Rich text={b.text} />
        </p>
      );
    case 'paso':
      return (
        <div className="ap-paso">
          <h4>{b.titulo}</h4>
          {b.text && (
            <p>
              <Rich text={b.text} />
            </p>
          )}
          {b.items &&
            (b.ordenada ? (
              <ol>
                {b.items.map((x, i) => (
                  <li key={i}>
                    <Rich text={x} />
                  </li>
                ))}
              </ol>
            ) : (
              <ul>
                {b.items.map((x, i) => (
                  <li key={i}>
                    <Rich text={x} />
                  </li>
                ))}
              </ul>
            ))}
        </div>
      );
    case 'cuadro':
      return (
        <div className="ap-cuadro">
          {b.titulo && <h4>{b.titulo}</h4>}
          <div className="ap-scroll">
            <table>
              <thead>
                <tr>
                  {b.head.map((h, i) => (
                    <th key={i}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {b.filas.map((f, i) => (
                  <tr key={i}>
                    {f.map((c, j) => (
                      <td key={j} data-label={b.head[j] || undefined} className={j === b.marca ? 'is-marca' : undefined}>
                        <Rich text={c} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    case 'clave':
      return (
        <div className="ap-clave">
          <h4>{b.titulo}</h4>
          <ul>
            {b.items.map((x, i) => (
              <li key={i}>
                <Rich text={x} />
              </li>
            ))}
          </ul>
        </div>
      );
    case 'ojo':
      return (
        <p className="ap-ojo">
          <strong>Ojo · </strong>
          <Rich text={b.text} />
        </p>
      );
    case 'ejemplo':
      return (
        <p className="ap-ejemplo">
          <strong>Ejemplo · </strong>
          <Rich text={b.text} />
        </p>
      );
    case 'maniobras':
      return <Maniobras ids={b.ids} impreso={impreso} />;
    case 'ilustracion':
      return <Ilustracion id={b.id} pie={b.pie} />;
  }
}

function Maniobras({ ids, impreso }: { ids: string[]; impreso?: boolean }) {
  const ms = ids.map((id) => MANEUVERS.find((m) => m.id === id)).filter(Boolean);
  return (
    <div className="ap-manis">
      <h4>Maniobras</h4>
      {ms.map((m) => (
        <Maniobra key={m!.id} m={m!} impreso={impreso} />
      ))}
    </div>
  );
}

function Maniobra({ m, impreso }: { m: (typeof MANEUVERS)[number]; impreso?: boolean }) {
  const [ver, setVer] = useState(false);
  return (
    <div className="ap-mani">
      <strong>{m.name}</strong>
      <p>
        <Rich text={m.explores} /> <span className="ap-tenue">Posición:</span> <Rich text={m.patientPosition} />
      </p>
      <ol>
        {m.technique.map((p, i) => (
          <li key={i}>
            <Rich text={p} />
          </li>
        ))}
      </ol>
      <p>
        <span className="ap-tenue">Positiva:</span> <Rich text={m.pathologic} />
      </p>
      {!impreso && m.video && (
        <>
          <button type="button" className="nx-btn nx-btn--chico" onClick={() => setVer((v) => !v)}>
            {ver ? 'Ocultar video' : '▶ Ver la maniobra'}
          </button>
          {ver && (
            <div className="ap-video">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${m.video.youtubeId}?start=${m.video.start}&end=${m.video.end}&rel=0`}
                title={m.name}
                allow="encrypted-media; picture-in-picture; fullscreen"
                loading="lazy"
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}

export function TemaOral({ t, impreso }: { t: ApunteTema; impreso?: boolean }) {
  return (
    <section className="ap-tema" id={t.tema}>
      <header className="ap-tema__head">
        <h3>{t.titulo}</h3>
        <span className="ap-bol">{textoBolillasDe(t.tema)}</span>
      </header>
      {impreso && t.porque && (
        <div className="ap-porque">
          <h4>Para entenderlo</h4>
          <ol>
            {t.porque.map((x, i) => (
              <li key={i}>
                <Rich text={x} />
              </li>
            ))}
          </ol>
        </div>
      )}
      {t.bloques.map((b, i) => (
        <Bloque key={i} b={b} impreso={impreso} />
      ))}
      {impreso ? (
        <div className="ap-oral">
          <h4>Así lo digo en el oral</h4>
          <p>
            <Rich text={t.oral} />
          </p>
        </div>
      ) : (
        <details className="ap-oral">
          <summary>Así lo digo en el oral (1 minuto)</summary>
          <p>
            <Rich text={t.oral} />
          </p>
        </details>
      )}
      {t.repreguntas?.length ? (
        impreso ? (
          <div className="ap-rep">
            <h4>Repreguntas</h4>
            {t.repreguntas.map((r, i) => (
              <p key={i}>
                <strong>
                  <Rich text={r.q} />
                </strong>{' '}
                <Rich text={r.a} />
              </p>
            ))}
          </div>
        ) : (
          <div className="ap-rep">
            <h4>Repreguntas</h4>
            {t.repreguntas.map((r, i) => (
              <details key={i}>
                <summary>
                  <Rich text={r.q} />
                </summary>
                <p>
                  <Rich text={r.a} />
                </p>
              </details>
            ))}
          </div>
        )
      ) : null}
      <p className="ap-fuentes">Fuentes: {t.fuentes}</p>
    </section>
  );
}

export function NoOlvidar({ a, impreso }: { a: ApunteUnidad; impreso?: boolean }) {
  return (
    <section className="ap-noolvidar">
      <h3>Lo que no te podés olvidar</h3>
      <dl>
        {a.noOlvidar.map((x, i) =>
          impreso ? (
            <div key={i}>
              <dt>
                <Rich text={x.q} />
              </dt>
              <dd>
                <Rich text={x.a} />
              </dd>
            </div>
          ) : (
            <details key={i}>
              <summary>
                <Rich text={x.q} />
              </summary>
              <p>
                <Rich text={x.a} />
              </p>
            </details>
          ),
        )}
      </dl>
    </section>
  );
}
