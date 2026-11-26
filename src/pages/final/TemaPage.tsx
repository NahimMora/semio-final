import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { TEMA_POR_ID, sistemaDe } from '@content/final/temas';
import { BOLILLAS_DE } from '@content/final/bolillero';
import { MANEUVERS } from '@content/maneuvers';
import { findChapter, isAvailable } from '@content/curriculum';
import { Icon } from '@/components/Icon';
import { Rich } from '@/components/Rich';
import { EstadoSelector, Prios } from '@/final/ui';
import { preguntasDeTema, type PreguntaFinal } from '@/final/preguntas';
import { PreguntaCard } from '@/final/PreguntaCard';
import { NotFound } from '@/pages/Misc';

export function TemaPage() {
  const { id } = useParams();
  const t = id ? TEMA_POR_ID[id] : undefined;
  const [preg, setPreg] = useState<PreguntaFinal[] | null>(null);
  useEffect(() => {
    setPreg(null);
    if (t) void preguntasDeTema(t).then(setPreg);
  }, [t]);
  if (!t) return <NotFound />;
  const sis = sistemaDe(t.sistema);
  const manis = (t.maniobras ?? []).map((m) => MANEUVERS.find((x) => x.id === m)).filter(Boolean);
  const bol = BOLILLAS_DE[t.id] ?? [];
  return (
    <div className={`f-page tone-${sis.tone}`}>
      <div className="f-kicker">
        <Link to={`/era/${sis.era}`}>ERA {sis.era}</Link> · {sis.titulo}
      </div>
      <h1>{t.titulo}</h1>
      <Prios t={t} />
      <p className="f-lead" style={{ marginTop: 12 }}>
        {t.resumen}
      </p>

      {bol.length > 0 && (
        <div className="f-row" style={{ marginBottom: 14 }}>
          {bol.map((n) => (
            <Link key={n} to={`/bolillero/${n}`} className="btn btn--sm btn--ghost">
              Bolilla {n}
            </Link>
          ))}
        </div>
      )}

      {t.frecuente?.length ? (
        <div className="f-card" style={{ borderColor: '#f3b57a', marginBottom: 14 }}>
          <h3>
            <span className="f-flag f-flag--naranja" /> Por qué es frecuente
          </h3>
          <ul style={{ margin: 0 }}>
            {t.frecuente.map((e, i) => (
              <li key={i}>
                <strong>{e.quien === 'ortega' ? 'Ortega' : e.quien === 'merlin' ? 'Merlín' : 'Docente'}:</strong> {e.nota} <span className="f-muted">({e.fuente})</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="f-grid f-grid--2" style={{ alignItems: 'start' }}>
        <section className="f-card">
          <h3>
            <Icon name="book" size={18} /> Dónde se estudia
          </h3>
          <ul style={{ margin: 0, paddingLeft: 18 }}>
            {t.capitulos.map((c) => {
              const meta = findChapter(c.id);
              const ok = meta && isAvailable(meta);
              return (
                <li key={c.id} style={{ marginBottom: 6 }}>
                  {ok ? <Link to={`/capitulo/${c.id}`}>{meta!.title}</Link> : <span>{meta?.title ?? c.id}</span>}
                  {c.parte && <span className="f-muted"> · {c.parte}</span>}
                  {!ok && <span className="f-muted"> — en preparación</span>}
                </li>
              );
            })}
          </ul>
          {t.estado !== 'listo' && t.falta && <p className="f-pend" style={{ marginTop: 10 }}>Pendiente en la plataforma: {t.falta}</p>}
          <div className="f-row" style={{ marginTop: 12 }}>
            <Link className="btn btn--sm btn--soft" to={`/ficha?tema=${t.id}`}>
              <Icon name="chat" size={15} /> Ficha para ChatGPT
            </Link>
            <Link className="btn btn--sm btn--soft" to={`/oral?temas=${t.id}`}>
              <Icon name="mic" size={15} /> Simulacro de este tema
            </Link>
          </div>
        </section>
        <EstadoSelector id={t.id} />
      </div>

      {manis.length > 0 && (
        <section>
          <h2>Maniobras de este tema</h2>
          <div className="f-grid f-grid--2">
            {manis.map((m) => (
              <Link key={m!.id} to={`/maniobras?m=${m!.id}`} className="f-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                <h3>
                  <Icon name="hand" size={16} /> {m!.name}
                </h3>
                <p className="f-muted" style={{ margin: 0 }}>
                  <Rich text={m!.explores} />
                </p>
                <small>{m!.video ? '▶ Con fragmento del video verificado' : 'Sin fragmento de video'}</small>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section>
        <h2>Preguntas para el oral</h2>
        <p className="f-muted">Primero respondé en voz alta; después mirá la respuesta modelo y calificate. Lo que no sabías va al banco de errores.</p>
        {preg === null ? (
          <p>Cargando preguntas…</p>
        ) : preg.length === 0 ? (
          <p className="f-pend">Todavía no hay preguntas cargadas para este tema (se agregan con su capítulo).</p>
        ) : (
          preg.map((p, i) => <PreguntaCard key={p.id} p={p} n={i + 1} />)
        )}
      </section>
    </div>
  );
}
