import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { BOLILLERO } from '@content/final/bolillero';
import { TEMA_POR_ID } from '@content/final/temas';
import { findChapter, isAvailable } from '@content/curriculum';
import { Icon } from '@/components/Icon';
import { useFinal, registroTema, estadoInfo } from '@/final/store';
import { Barra, Leyenda, TemaChip, estadoBolilla, temasDeBolilla, Flags } from '@/final/ui';
import { NotFound } from '@/pages/Misc';

const ROTULO = { dominada: 'Dominada', preparada: 'Preparada', 'en-camino': 'En camino', pendiente: 'Pendiente' } as const;

function Modos({ n, actual }: { n?: number; actual: 'estudio' | 'oral' | 'sorteo' }) {
  return (
    <div className="f-modos">
      <Link className={`f-modo ${actual === 'estudio' ? 'is-on' : ''}`} to={n ? `/bolillero/${n}` : '/bolillero'}>
        <Icon name="book" size={18} /> Modo estudio
      </Link>
      <Link className={`f-modo ${actual === 'oral' ? 'is-on' : ''}`} to={n ? `/oral?bolilla=${n}` : '/oral'}>
        <Icon name="mic" size={18} /> Modo examen oral
      </Link>
      <Link className={`f-modo ${actual === 'sorteo' ? 'is-on' : ''}`} to="/bolillero/sorteo">
        <Icon name="dice" size={18} /> Modo sorteo
      </Link>
    </div>
  );
}

export function BolilleroPage() {
  const s = useFinal();
  return (
    <div className="f-page">
      <div className="f-kicker">Semiología General · Bolillero examen final</div>
      <h1>Bolillero oficial</h1>
      <p className="f-lead">Las 20 bolillas exactamente como figuran en el archivo oficial. Cada tema lleva al mismo desarrollo que en los sistemas (no hay contenido duplicado). El color de la bolilla muestra tu preparación: el peor tema manda.</p>
      <Modos actual="estudio" />
      <Leyenda />
      <div className="f-bolillas" style={{ marginTop: 14 }}>
        {BOLILLERO.map((b) => {
          const e = estadoBolilla(s, b.n);
          return (
            <Link key={b.n} to={`/bolillero/${b.n}`} className="f-bolilla">
              <span className={`f-bolilla__n ${e === 'dominada' ? 'is-dom' : e === 'preparada' ? 'is-prep' : ''}`}>{b.n}</span>
              <div>
                <div className="f-row" style={{ justifyContent: 'space-between' }}>
                  <strong>Bolilla {b.n}</strong>
                  <span className="f-muted">{ROTULO[e]}</span>
                </div>
                <ul className="f-bolilla__items">
                  {b.items.map((it, i) => (
                    <li key={i}>
                      {it.texto}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: 8 }}>
                  <Barra ids={temasDeBolilla(b.n)} />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export function BolillaPage() {
  const { n } = useParams();
  const num = Number(n);
  const b = BOLILLERO.find((x) => x.n === num);
  const s = useFinal();
  if (!b) return <NotFound />;
  return (
    <div className="f-page">
      <div className="f-kicker">
        <Link to="/bolillero">Bolillero oficial</Link> · {ROTULO[estadoBolilla(s, b.n)]}
      </div>
      <h1>Bolilla {b.n}</h1>
      <Modos n={b.n} actual="estudio" />
      <div className="f-row" style={{ marginBottom: 12 }}>
        <Link className="btn btn--sm btn--soft tone-lilac" to={`/ficha?bolilla=${b.n}`}>
          <Icon name="chat" size={15} /> Ficha de esta bolilla para ChatGPT
        </Link>
        {b.n > 1 && (
          <Link className="btn btn--sm btn--ghost" to={`/bolillero/${b.n - 1}`}>
            ← Bolilla {b.n - 1}
          </Link>
        )}
        {b.n < 20 && (
          <Link className="btn btn--sm btn--ghost" to={`/bolillero/${b.n + 1}`}>
            Bolilla {b.n + 1} →
          </Link>
        )}
      </div>
      {b.items.map((it, i) => (
        <section key={i} className="f-item">
          <div className="f-item__head">
            <strong>
              {i + 1}. {it.texto}
            </strong>
          </div>
          <div className="f-item__body">
            {it.temas.map((id) => {
              const t = TEMA_POR_ID[id];
              const r = registroTema(s, id);
              return (
                <div key={id} style={{ marginBottom: 12 }}>
                  <div className="f-row" style={{ justifyContent: 'space-between' }}>
                    <Link to={`/tema/${id}`} style={{ fontWeight: 600 }}>
                      <Flags t={t} /> {t.titulo}
                    </Link>
                    <span className="f-muted">
                      <span className={`f-dot f-dot--${r.estado}`} /> {estadoInfo(r.estado).label}
                      {r.sinMirar ? ' · sin mirar ✓' : ''}
                    </span>
                  </div>
                  <p className="f-muted" style={{ margin: '4px 0' }}>
                    {t.resumen}
                  </p>
                  <div className="f-row">
                    {t.capitulos.map((c) => {
                      const m = findChapter(c.id);
                      return m && isAvailable(m) ? (
                        <Link key={c.id} className="btn btn--sm btn--soft" to={`/capitulo/${c.id}`}>
                          <Icon name="book" size={14} /> {m.title}
                        </Link>
                      ) : (
                        <span key={c.id} className="f-pend">
                          {m?.title ?? c.id}: en preparación
                        </span>
                      );
                    })}
                    {t.maniobras?.length ? (
                      <Link className="btn btn--sm btn--soft tone-mint" to={`/tema/${id}#maniobras`}>
                        <Icon name="hand" size={14} /> {t.maniobras.length} maniobras
                      </Link>
                    ) : null}
                    <Link className="btn btn--sm btn--ghost" to={`/tema/${id}`}>
                      Preguntas y estado →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}

export function SorteoPage() {
  const nav = useNavigate();
  const s = useFinal();
  const [n, setN] = useState<number | null>(null);
  const [rodando, setRodando] = useState(false);
  const [soloFlojas, setSoloFlojas] = useState(false);
  const timer = useRef<number>();
  useEffect(() => () => window.clearInterval(timer.current), []);
  const sortear = () => {
    const pool = BOLILLERO.map((b) => b.n).filter((x) => !soloFlojas || !['dominada'].includes(estadoBolilla(s, x)));
    const lista = pool.length ? pool : BOLILLERO.map((b) => b.n);
    setRodando(true);
    let k = 0;
    timer.current = window.setInterval(() => {
      setN(lista[Math.floor(Math.random() * lista.length)]);
      k++;
      if (k > 14) {
        window.clearInterval(timer.current);
        const final = lista[crypto.getRandomValues(new Uint32Array(1))[0] % lista.length];
        setN(final);
        setRodando(false);
      }
    }, 90);
  };
  const b = n ? BOLILLERO.find((x) => x.n === n) : undefined;
  return (
    <div className="f-page">
      <div className="f-kicker">
        <Link to="/bolillero">Bolillero oficial</Link>
      </div>
      <h1>Sorteo de bolilla</h1>
      <Modos actual="sorteo" />
      <div className="f-card f-sorteo">
        <div className={`f-bola ${rodando ? 'is-rodando' : ''}`} aria-live="polite">
          {n ?? '?'}
        </div>
        <label className="f-row" style={{ justifyContent: 'center' }}>
          <input type="checkbox" checked={soloFlojas} onChange={(e) => setSoloFlojas(e.target.checked)} /> Excluir las bolillas que ya tengo dominadas
        </label>
        <button type="button" className="btn btn--primary" onClick={sortear} disabled={rodando} style={{ minHeight: 52, fontSize: '1.05rem' }}>
          <Icon name="dice" size={20} /> {n ? 'Sortear otra' : 'Sortear bolilla'}
        </button>
      </div>
      {b && !rodando && (
        <section className="f-card" style={{ marginTop: 16 }}>
          <h2 style={{ marginTop: 0 }}>Bolilla {b.n}</h2>
          <ul>
            {b.items.map((it, i) => (
              <li key={i}>{it.texto}</li>
            ))}
          </ul>
          <div className="f-row">
            <button type="button" className="btn btn--primary" onClick={() => nav(`/oral?bolilla=${b.n}`)}>
              <Icon name="mic" size={16} /> Rendirla ahora (examen oral)
            </button>
            <Link className="btn btn--ghost" to={`/bolillero/${b.n}`}>
              Estudiarla
            </Link>
          </div>
          <div className="f-row" style={{ marginTop: 10 }}>
            {temasDeBolilla(b.n).map((id) => (
              <TemaChip key={id} id={id} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
