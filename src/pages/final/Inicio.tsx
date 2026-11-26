import { Link } from 'react-router-dom';
import { CRONOGRAMA, FECHA_FINAL, temasDeRepaso, type Bloque, type Dia } from '@content/final/cronograma';
import { TEMAS } from '@content/final/temas';
import { BOLILLERO } from '@content/final/bolillero';
import { Icon } from '@/components/Icon';
import { diasEntre, fechaLarga, hoyISO, setBloque, useFinal, registroTema, type FinalState } from '@/final/store';
import { Barra, TemaChip, estadoBolilla, TODOS_LOS_TEMAS } from '@/final/ui';

const ACCESOS = [
  { to: '/era/1', icon: 'lungs', t: 'Primera ERA', d: 'HC, signos y síntomas, vitales, cabeza y cuello, respiratorio, cardio', tone: 'sky' },
  { to: '/era/2', icon: 'brain', t: 'Segunda ERA', d: 'Digestivo, renal, neurología y SOMA', tone: 'lilac' },
  { to: '/bolillero', icon: 'dice', t: 'Bolillero oficial', d: 'Las 20 bolillas: estudio, examen oral y sorteo', tone: 'rose' },
  { to: '/oral', icon: 'mic', t: 'Simulador oral', d: 'Preguntas de a una, respondés en voz alta', tone: 'rose' },
  { to: '/maniobras', icon: 'hand', t: 'Examen físico y maniobras', d: 'Con el fragmento exacto del video', tone: 'mint' },
  { to: '/memoria', icon: 'bulb', t: 'Memoria rápida', d: 'Tríadas, criterios, valores y clasificaciones', tone: 'gold' },
  { to: '/apuntes', icon: 'download', t: 'Apuntes PDF', d: 'Un apunte por sistema para imprimir', tone: 'sky' },
  { to: '/repasos', icon: 'refresh', t: 'Repasos pendientes', d: 'Lo que toca hoy y las fichas para ChatGPT', tone: 'lilac' },
  { to: '/errores', icon: 'flag', t: 'Banco de errores', d: 'Lo que respondiste mal vuelve hasta que lo sepas', tone: 'peach' },
  { to: '/progreso', icon: 'chart', t: 'Progreso', d: 'Por ERA, sistema, tema, bolilla y maniobras', tone: 'mint' },
  { to: '/cronograma', icon: 'calendar', t: 'Cronograma', d: '26/11 → 14/12, con reprogramación', tone: 'sky' },
  { to: '/matriz', icon: 'grid', t: 'Matriz de cobertura', d: 'Las 20 bolillas × todos los temas', tone: 'gold' },
];

/** Día del cronograma que corresponde a una fecha (antes del 26/11 muestra el primero). */
export function diaDe(fecha: string): Dia {
  return CRONOGRAMA.find((d) => d.fecha === fecha) ?? (fecha < CRONOGRAMA[0].fecha ? CRONOGRAMA[0] : CRONOGRAMA[CRONOGRAMA.length - 1]);
}

/** Bloques de días anteriores no terminados ni reprogramados. */
export function atrasados(s: FinalState, hoy: string): { dia: Dia; b: Bloque }[] {
  const out: { dia: Dia; b: Bloque }[] = [];
  for (const d of CRONOGRAMA) {
    if (d.fecha >= hoy) break;
    for (const b of d.bloques) {
      if (b.tipo === 'examen') continue;
      const movido = s.movidos[b.id];
      if (s.bloques[b.id]?.hecho) continue;
      if (movido && movido >= hoy) continue;
      out.push({ dia: d, b });
    }
  }
  return out;
}

/** Bloques reprogramados para una fecha. */
export function movidosA(s: FinalState, fecha: string): { dia: Dia; b: Bloque }[] {
  const out: { dia: Dia; b: Bloque }[] = [];
  for (const d of CRONOGRAMA) for (const b of d.bloques) if (s.movidos[b.id] === fecha) out.push({ dia: d, b });
  return out;
}

export function BloqueCard({ b, dia, s, compacto }: { b: Bloque; dia: Dia; s: FinalState; compacto?: boolean }) {
  const hecho = !!s.bloques[b.id]?.hecho;
  const temas = b.repasa ? temasDeRepaso(b) : b.temas;
  return (
    <div className={`f-bloque ${hecho ? 'is-done' : ''}`}>
      <button type="button" className={`f-check ${hecho ? 'is-on' : ''}`} onClick={() => setBloque(b.id, !hecho)} aria-pressed={hecho} aria-label={hecho ? 'Marcar como no hecho' : 'Marcar como hecho'}>
        {hecho && <Icon name="check" size={18} />}
      </button>
      <div>
        <div className="f-row">
          <span className={`f-bloque__tipo f-bloque__tipo--${b.tipo}`}>{b.tipo === 'nuevo' ? 'Contenido nuevo' : b.tipo}</span>
          {b.min > 0 && <span className="f-bloque__min">{b.min} min</span>}
          {s.movidos[b.id] && <span className="f-muted">(reprogramado desde el {dia.corto})</span>}
        </div>
        <div className="f-bloque__tit">{b.titulo}</div>
        {b.nota && !compacto && <p className="f-muted" style={{ margin: '0 0 6px' }}>{b.nota}</p>}
        {temas.length > 0 && (
          <div className="f-row">
            {temas.map((id) => (
              <TemaChip key={id} id={id} />
            ))}
          </div>
        )}
        {b.tipo === 'repaso' && b.repasa && (
          <div className="f-row" style={{ marginTop: 8 }}>
            {b.repasa.map((c) => {
              const d = CRONOGRAMA.find((x) => x.corto === c);
              return d ? (
                <Link key={c} className="btn btn--sm btn--soft tone-lilac" to={`/ficha?dia=${d.fecha}`}>
                  <Icon name="chat" size={15} /> Ficha ChatGPT del {c}
                </Link>
              ) : null;
            })}
          </div>
        )}
        {(b.tipo === 'simulacro') && (
          <Link className="btn btn--sm btn--soft tone-rose" to="/bolillero/sorteo" style={{ marginTop: 8 }}>
            <Icon name="dice" size={15} /> Ir al sorteo
          </Link>
        )}
        {(b.tipo === 'errores') && (
          <Link className="btn btn--sm btn--soft tone-peach" to="/errores" style={{ marginTop: 8 }}>
            <Icon name="flag" size={15} /> Abrir el banco de errores
          </Link>
        )}
        {(b.tipo === 'debiles') && (
          <Link className="btn btn--sm btn--soft tone-gold" to="/progreso?ver=debiles" style={{ marginTop: 8 }}>
            <Icon name="target" size={15} /> Ver lo que no puedo explicar sin mirar
          </Link>
        )}
      </div>
    </div>
  );
}

export function InicioFinal() {
  const s = useFinal();
  const hoy = hoyISO();
  const faltan = diasEntre(hoy, FECHA_FINAL);
  const dia = diaDe(hoy);
  const esHoy = dia.fecha === hoy;
  const atras = atrasados(s, hoy);
  const movidos = movidosA(s, hoy);
  const idx = CRONOGRAMA.indexOf(dia);
  const proximos = CRONOGRAMA.slice(idx + 1, idx + 3);
  const minutosHechos = dia.bloques.filter((b) => s.bloques[b.id]?.hecho).reduce((a, b) => a + b.min, 0);
  const erroresHoy = s.errores.filter((e) => !e.resuelto && e.proximo <= Date.now()).length;
  const bolDom = BOLILLERO.filter((b) => ['dominada', 'preparada'].includes(estadoBolilla(s, b.n))).length;
  const sinMirar = TEMAS.filter((t) => registroTema(s, t.id).sinMirar).length;

  return (
    <div className="f-page">
      <section className="f-hero">
        <div>
          <div className="f-kicker">Final de Semiología · Fundación Barceló</div>
          <h1>{faltan > 0 ? 'Hoy toca' : faltan === 0 ? 'Hoy es el final' : 'Final rendido'}</h1>
          <div className="f-hero__fecha">{fechaLarga(hoy)}</div>
          {!esHoy && faltan > 0 && <p className="f-muted">El cronograma empieza el 26/11: te muestro el primer día.</p>}
        </div>
        <div className="f-count" aria-label={`Faltan ${faltan} días para el final`}>
          <strong>{Math.max(faltan, 0)}</strong>
          <span>
            {faltan === 1 ? 'día' : 'días'} para el final
            <br />
            lunes 14/12
          </span>
        </div>
      </section>

      <div className="f-grid f-grid--3" style={{ alignItems: 'start' }}>
        <section style={{ gridColumn: '1 / -1' }}>
          <div className="f-row" style={{ justifyContent: 'space-between' }}>
            <h2 style={{ margin: '4px 0 8px' }}>
              {dia.corto} · {dia.titulo}
            </h2>
            <span className="f-muted">
              {minutosHechos} de {dia.minutos} min hechos · bloques de ≤ 90 min
            </span>
          </div>
          {dia.control && <p className="f-pend">{dia.control}</p>}
          {dia.bloques.map((b) => (
            <BloqueCard key={b.id} b={b} dia={dia} s={s} />
          ))}
          {movidos.map(({ dia: d, b }) => (
            <BloqueCard key={b.id} b={b} dia={d} s={s} />
          ))}
          <div className="f-row">
            <Link className="btn btn--primary" to={`/ficha?dia=${dia.fecha}`}>
              <Icon name="chat" size={16} /> Ficha de hoy para ChatGPT
            </Link>
            <Link className="btn btn--ghost" to={`/cronograma#d-${dia.fecha}`}>
              <Icon name="pen" size={16} /> Registrar lo que estudié
            </Link>
          </div>
        </section>
      </div>

      {atras.length > 0 && (
        <section>
          <h2>Atrasado ({atras.length})</h2>
          <p className="f-muted">Nada se borra: marcalo como hecho o reprogramalo desde el cronograma (sin tocar el tiempo de Fármaco y Pato).</p>
          {atras.slice(0, 4).map(({ dia: d, b }) => (
            <BloqueCard key={b.id} b={b} dia={d} s={s} compacto />
          ))}
          {atras.length > 4 && <Link to="/cronograma">Ver los {atras.length - 4} restantes en el cronograma →</Link>}
        </section>
      )}

      <section className="f-grid f-grid--3" style={{ marginTop: 18 }}>
        <div className="f-card f-card--accent tone-lilac">
          <h3>
            <Icon name="refresh" size={18} /> Repasos pendientes
          </h3>
          <p>
            <strong>{erroresHoy}</strong> errores para repasar hoy.
          </p>
          <Link className="btn btn--sm btn--soft" to="/repasos">
            Abrir repasos
          </Link>
        </div>
        <div className="f-card f-card--accent tone-rose">
          <h3>
            <Icon name="dice" size={18} /> Bolillas
          </h3>
          <p>
            <strong>{bolDom}</strong> de 20 preparadas o dominadas.
          </p>
          <Link className="btn btn--sm btn--soft" to="/bolillero">
            Ver el bolillero
          </Link>
        </div>
        <div className="f-card f-card--accent tone-mint">
          <h3>
            <Icon name="chart" size={18} /> Progreso real
          </h3>
          <p>
            <strong>{sinMirar}</strong> de {TEMAS.length} temas los explicás sin mirar.
          </p>
          <Barra ids={TODOS_LOS_TEMAS} />
        </div>
      </section>

      {proximos.length > 0 && (
        <section>
          <h2>Próximos objetivos</h2>
          <div className="f-grid f-grid--2">
            {proximos.map((d) => (
              <div key={d.fecha} className="f-card">
                <h3>
                  {d.corto} · {d.titulo}
                </h3>
                <div className="f-row">
                  {[...new Set(d.bloques.flatMap((b) => b.temas))].slice(0, 10).map((id) => (
                    <TemaChip key={id} id={id} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section>
        <h2>Todo lo que hay</h2>
        <div className="f-tiles">
          {ACCESOS.map((a) => (
            <Link key={a.to} to={a.to} className={`f-tile tone-${a.tone}`}>
              <Icon name={a.icon} size={22} />
              <strong>{a.t}</strong>
              <small>{a.d}</small>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
