import { Link } from 'react-router-dom';
import { TEMAS, TEMA_POR_ID, type Tema } from '@content/final/temas';
import { BOLILLAS_DE, BOLILLERO } from '@content/final/bolillero';
import { ESTADOS, registroTema, setEstado, setSeguridad, setSinMirar, useFinal, type EstadoEstudio, type FinalState } from './store';

export type Bandera = 'rojo' | 'naranja' | 'azul';

export function banderas(t: Tema): Bandera[] {
  const b: Bandera[] = [];
  if (BOLILLAS_DE[t.id]?.length) b.push('rojo');
  if (t.frecuente?.length) b.push('naranja');
  if (!BOLILLAS_DE[t.id]?.length) b.push('azul');
  return b;
}

export function textoBolillasDe(id: string): string {
  const ns = BOLILLAS_DE[id] ?? [];
  if (!ns.length) return 'No está en el bolillero (complementario)';
  if (ns.length >= 19) {
    const faltan = BOLILLERO.map((b) => b.n).filter((n) => !ns.includes(n));
    return faltan.length ? `Todas las bolillas menos la ${faltan.join(', ')}` : 'Las 20 bolillas';
  }
  return ns.length === 1 ? `Bolilla ${ns[0]}` : `Bolillas ${ns.slice(0, -1).join(', ')} y ${ns[ns.length - 1]}`;
}

export function Flags({ t }: { t: Tema }) {
  const b = banderas(t);
  return (
    <span className="f-flags" aria-label={b.map((x) => ({ rojo: 'bolillero', naranja: 'frecuente', azul: 'complementario' })[x]).join(', ')}>
      {b.map((x) => (
        <span key={x} className={`f-flag f-flag--${x}`} />
      ))}
    </span>
  );
}

export function Prios({ t }: { t: Tema }) {
  return (
    <span className="f-row">
      {banderas(t).map((b) => (
        <span key={b} className={`f-prio f-prio--${b}`}>
          {b === 'rojo' ? `Bolillero · ${textoBolillasDe(t.id)}` : b === 'naranja' ? 'Pregunta frecuente' : 'Complementario'}
        </span>
      ))}
    </span>
  );
}

export function TemaChip({ id, extra }: { id: string; extra?: string }) {
  const s = useFinal();
  const t = TEMA_POR_ID[id];
  if (!t) return null;
  const r = registroTema(s, id);
  return (
    <Link to={`/tema/${id}`} className="f-tema" title={`${t.titulo} — ${textoBolillasDe(id)}`}>
      <span className={`f-dot f-dot--${r.estado}`} aria-hidden="true" />
      <Flags t={t} />
      <span>{t.titulo}</span>
      {extra && <small className="f-muted">{extra}</small>}
    </Link>
  );
}

export function Leyenda() {
  return (
    <div className="f-leyenda">
      <span>
        <span className="f-flag f-flag--rojo" /> Rojo: está en el bolillero oficial
      </span>
      <span>
        <span className="f-flag f-flag--naranja" /> Naranja: pregunta frecuente con fuente (Ortega o Merlín)
      </span>
      <span>
        <span className="f-flag f-flag--azul" /> Azul: complementario (para entender o para repreguntas)
      </span>
    </div>
  );
}

export function EstadoSelector({ id }: { id: string }) {
  const s = useFinal();
  const r = registroTema(s, id);
  return (
    <div className="f-card">
      <h3>¿Cómo estás con este tema?</h3>
      <div className="f-estados" role="radiogroup" aria-label="Estado de estudio">
        {ESTADOS.map((e) => (
          <button key={e.id} type="button" role="radio" aria-checked={r.estado === e.id} className={`f-estado f-estado--${e.id} ${r.estado === e.id ? 'is-on' : ''}`} title={e.ayuda} onClick={() => setEstado(id, e.id)}>
            {e.label}
          </button>
        ))}
      </div>
      <p className="f-muted" style={{ margin: '8px 0 12px' }}>
        {ESTADOS.find((e) => e.id === r.estado)?.ayuda}
      </p>
      <div className="f-row" style={{ justifyContent: 'space-between' }}>
        <div>
          <div className="f-muted">Seguridad (1 = nada · 5 = total)</div>
          <div className="f-seg">
            {[1, 2, 3, 4, 5].map((n) => (
              <button key={n} type="button" className={r.seguridad === n ? 'is-on' : ''} onClick={() => setSeguridad(id, n)} aria-label={`Seguridad ${n}`}>
                {n}
              </button>
            ))}
          </div>
        </div>
        <div>
          <div className="f-muted">¿Lo podés explicar sin mirar?</div>
          <div className="f-row">
            <button type="button" className={`btn btn--sm btn--known ${r.sinMirar === true ? 'is-on' : ''}`} onClick={() => setSinMirar(id, true)}>
              Sí
            </button>
            <button type="button" className={`btn btn--sm btn--unknown ${r.sinMirar === false ? 'is-on' : ''}`} onClick={() => setSinMirar(id, false)}>
              Todavía no
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function conteo(s: FinalState, ids: string[]): Record<EstadoEstudio, number> {
  const c = { pendiente: 0, 'en-estudio': 0, comprendido: 0, 'necesita-repaso': 0, preparado: 0, dominado: 0 } as Record<EstadoEstudio, number>;
  for (const id of ids) c[registroTema(s, id).estado]++;
  return c;
}

export function Barra({ ids }: { ids: string[] }) {
  const s = useFinal();
  const c = conteo(s, ids);
  const n = ids.length || 1;
  const w = (x: number) => `${(100 * x) / n}%`;
  return (
    <div className="f-bar" role="img" aria-label={`${c.dominado} dominados, ${c.preparado} preparados, ${c.comprendido} comprendidos de ${ids.length}`}>
      <span className="f-bar__dom" style={{ width: w(c.dominado) }} />
      <span className="f-bar__prep" style={{ width: w(c.preparado) }} />
      <span className="f-bar__comp" style={{ width: w(c.comprendido) }} />
      <span className="f-bar__est" style={{ width: w(c['en-estudio']) }} />
      <span className="f-bar__rep" style={{ width: w(c['necesita-repaso']) }} />
    </div>
  );
}

/** Estado de una bolilla = el peor estado de sus temas. */
export function estadoBolilla(s: FinalState, n: number): 'dominada' | 'preparada' | 'en-camino' | 'pendiente' {
  const b = BOLILLERO.find((x) => x.n === n);
  if (!b) return 'pendiente';
  const ids = [...new Set(b.items.flatMap((i) => i.temas))];
  const niveles = ids.map((id) => ESTADOS.find((e) => e.id === registroTema(s, id).estado)!.nivel);
  const min = Math.min(...niveles);
  if (min >= 4) return 'dominada';
  if (min >= 3) return 'preparada';
  if (niveles.some((x) => x > 0)) return 'en-camino';
  return 'pendiente';
}

export function temasDeBolilla(n: number): string[] {
  const b = BOLILLERO.find((x) => x.n === n);
  return b ? [...new Set(b.items.flatMap((i) => i.temas))] : [];
}

export const TODOS_LOS_TEMAS = TEMAS.map((t) => t.id);

export function useToast(): [string | null, (m: string) => void] {
  // Toast mínimo sin dependencias.
  const s = useFinal();
  void s;
  return [null, (m: string) => {
    const el = document.createElement('div');
    el.className = 'f-toast';
    el.setAttribute('role', 'status');
    el.textContent = m;
    document.body.appendChild(el);
    window.setTimeout(() => el.remove(), 2200);
  }];
}
