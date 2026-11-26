import { useSyncExternalStore } from 'react';

/**
 * Estado de estudio del FINAL, guardado solo en este dispositivo (localStorage).
 * No hay sincronización entre dispositivos: se exporta e importa un archivo JSON.
 */

export type EstadoEstudio = 'pendiente' | 'en-estudio' | 'comprendido' | 'necesita-repaso' | 'preparado' | 'dominado';

export const ESTADOS: { id: EstadoEstudio; label: string; corto: string; tone: string; nivel: number; ayuda: string }[] = [
  { id: 'pendiente', label: 'Pendiente', corto: 'Pendiente', tone: 'ink', nivel: 0, ayuda: 'Todavía no lo empecé.' },
  { id: 'en-estudio', label: 'En estudio', corto: 'En estudio', tone: 'sky', nivel: 1, ayuda: 'Lo estoy leyendo o mirando.' },
  { id: 'comprendido', label: 'Comprendido', corto: 'Comprendido', tone: 'lilac', nivel: 2, ayuda: 'Entiendo el porqué, pero todavía no lo digo sin mirar.' },
  { id: 'necesita-repaso', label: 'Necesita repaso', corto: 'Repasar', tone: 'red', nivel: 1, ayuda: 'Lo estudié pero se me borra o me equivoco.' },
  { id: 'preparado', label: 'Preparado para el oral', corto: 'Preparado', tone: 'gold', nivel: 3, ayuda: 'Lo explico en voz alta sin mirar.' },
  { id: 'dominado', label: 'Dominado', corto: 'Dominado', tone: 'mint', nivel: 4, ayuda: 'Lo explico sin mirar y aguanto repreguntas, varias veces seguidas.' },
];
export const estadoInfo = (e: EstadoEstudio) => ESTADOS.find((x) => x.id === e)!;

export interface RegistroTema {
  estado: EstadoEstudio;
  /** Seguridad autopercibida 1–5. */
  seguridad?: number;
  /** ¿Lo puedo explicar sin mirar? (la pregunta que importa). */
  sinMirar?: boolean;
  nota?: string;
  updatedAt: number;
  historial: { at: number; estado: EstadoEstudio; seguridad?: number }[];
}

export interface ErrorItem {
  id: string;
  pregunta: string;
  temaId: string;
  respuesta: string;
  concepto: string;
  fecha: number;
  proximo: number;
  caja: number;
  resuelto?: boolean;
  origen?: string;
}

export interface SesionOral {
  at: number;
  bolilla?: number;
  temas: string[];
  resultados: { pregunta: string; temaId: string; nota: 0 | 1 | 2 }[];
  segundos: number;
}

export interface FinalState {
  version: 1;
  temas: Record<string, RegistroTema>;
  /** Bloques del cronograma terminados. */
  bloques: Record<string, { hecho: boolean; at: number }>;
  /** Temas que efectivamente estudié cada día (fecha ISO). */
  estudiados: Record<string, string[]>;
  /** Bloques movidos a otra fecha (no se borran: se reprograman). */
  movidos: Record<string, string>;
  /** Cambios del cronograma aprobados por la usuaria. */
  aprobado?: number;
  errores: ErrorItem[];
  orales: SesionOral[];
  /** Notas de autoevaluación por pregunta (0 no la sabía · 1 a medias · 2 la sabía). */
  preguntas: Record<string, { nota: 0 | 1 | 2; at: number }>;
  tema: 'claro' | 'oscuro';
}

const KEY = 'semio-final:v1';
const DIA = 86_400_000;
/** Repaso espaciado del banco de errores (días): mañana, 3, 7, 16. */
export const INTERVALOS = [1, 3, 7, 16];

function vacio(): FinalState {
  return { version: 1, temas: {}, bloques: {}, estudiados: {}, movidos: {}, errores: [], orales: [], preguntas: {}, tema: 'claro' };
}

function sanear(raw: unknown): FinalState {
  const b = vacio();
  if (!raw || typeof raw !== 'object') return b;
  const r = raw as Partial<FinalState>;
  const obj = <T,>(x: unknown, d: T): T => (x && typeof x === 'object' && !Array.isArray(x) ? (x as T) : d);
  return {
    version: 1,
    temas: obj(r.temas, {}),
    bloques: obj(r.bloques, {}),
    estudiados: obj(r.estudiados, {}),
    movidos: obj(r.movidos, {}),
    aprobado: typeof r.aprobado === 'number' ? r.aprobado : undefined,
    errores: Array.isArray(r.errores) ? r.errores : [],
    orales: Array.isArray(r.orales) ? r.orales : [],
    preguntas: obj(r.preguntas, {}),
    tema: r.tema === 'oscuro' ? 'oscuro' : 'claro',
  };
}

function cargar(): FinalState {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (raw) return sanear(JSON.parse(raw));
  } catch {
    /* sin almacenamiento: se trabaja en memoria */
  }
  return vacio();
}

let state: FinalState = typeof window === 'undefined' ? vacio() : cargar();
const subs = new Set<() => void>();

function guardar() {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    /* modo privado o cuota llena */
  }
}

function update(fn: (d: FinalState) => void) {
  const d: FinalState = JSON.parse(JSON.stringify(state));
  fn(d);
  state = d;
  guardar();
  subs.forEach((l) => l());
}

export function useFinal(): FinalState {
  return useSyncExternalStore(
    (l) => {
      subs.add(l);
      return () => subs.delete(l);
    },
    () => state,
    () => state,
  );
}
export const getFinal = () => state;

/* ───────── Temas ───────── */

export function registroTema(s: FinalState, id: string): RegistroTema {
  return s.temas[id] ?? { estado: 'pendiente', updatedAt: 0, historial: [] };
}

export function setEstado(id: string, estado: EstadoEstudio) {
  update((d) => {
    const r = d.temas[id] ?? { estado: 'pendiente', updatedAt: 0, historial: [] };
    r.estado = estado;
    if (estado === 'preparado' || estado === 'dominado') r.sinMirar = true;
    if (estado === 'necesita-repaso') r.sinMirar = false;
    r.updatedAt = Date.now();
    r.historial = [...r.historial, { at: r.updatedAt, estado, seguridad: r.seguridad }].slice(-40);
    d.temas[id] = r;
  });
}

export function setSeguridad(id: string, seguridad: number) {
  update((d) => {
    const r = d.temas[id] ?? { estado: 'en-estudio', updatedAt: 0, historial: [] };
    r.seguridad = seguridad;
    r.updatedAt = Date.now();
    d.temas[id] = r;
  });
}

export function setSinMirar(id: string, v: boolean) {
  update((d) => {
    const r = d.temas[id] ?? { estado: 'en-estudio', updatedAt: 0, historial: [] };
    r.sinMirar = v;
    if (!v && (r.estado === 'preparado' || r.estado === 'dominado')) r.estado = 'necesita-repaso';
    r.updatedAt = Date.now();
    d.temas[id] = r;
  });
}

export function setNotaTema(id: string, nota: string) {
  update((d) => {
    const r = d.temas[id] ?? { estado: 'pendiente', updatedAt: 0, historial: [] };
    r.nota = nota;
    r.updatedAt = Date.now();
    d.temas[id] = r;
  });
}

/* ───────── Cronograma ───────── */

export function setBloque(id: string, hecho: boolean) {
  update((d) => {
    d.bloques[id] = { hecho, at: Date.now() };
  });
}

export function toggleEstudiado(fecha: string, temaId: string) {
  update((d) => {
    const l = d.estudiados[fecha] ?? [];
    d.estudiados[fecha] = l.includes(temaId) ? l.filter((x) => x !== temaId) : [...l, temaId];
  });
}

export function moverBloque(id: string, fecha: string | null) {
  update((d) => {
    if (fecha) d.movidos[id] = fecha;
    else delete d.movidos[id];
  });
}

export function aprobarCronograma() {
  update((d) => {
    d.aprobado = Date.now();
  });
}

/* ───────── Banco de errores ───────── */

export function agregarError(e: Omit<ErrorItem, 'id' | 'fecha' | 'proximo' | 'caja'>) {
  update((d) => {
    const existente = d.errores.find((x) => x.pregunta === e.pregunta && !x.resuelto);
    const ahora = Date.now();
    if (existente) {
      existente.caja = 0;
      existente.proximo = ahora + INTERVALOS[0] * DIA;
      return;
    }
    d.errores.unshift({ ...e, id: `e${ahora.toString(36)}`, fecha: ahora, proximo: ahora + INTERVALOS[0] * DIA, caja: 0 });
  });
}

export function repasarError(id: string, acerte: boolean) {
  update((d) => {
    const e = d.errores.find((x) => x.id === id);
    if (!e) return;
    const ahora = Date.now();
    if (acerte) {
      e.caja += 1;
      if (e.caja >= INTERVALOS.length) e.resuelto = true;
      else e.proximo = ahora + INTERVALOS[e.caja] * DIA;
    } else {
      e.caja = 0;
      e.proximo = ahora + INTERVALOS[0] * DIA;
    }
  });
}

export function editarError(id: string, cambios: Partial<ErrorItem>) {
  update((d) => {
    const e = d.errores.find((x) => x.id === id);
    if (e) Object.assign(e, cambios);
  });
}

export function borrarError(id: string) {
  update((d) => {
    d.errores = d.errores.filter((x) => x.id !== id);
  });
}

/* ───────── Preguntas y simulacros ───────── */

export function notaPregunta(id: string, nota: 0 | 1 | 2) {
  update((d) => {
    d.preguntas[id] = { nota, at: Date.now() };
  });
}

export function guardarOral(s: SesionOral) {
  update((d) => {
    d.orales = [s, ...d.orales].slice(0, 100);
  });
}

/* ───────── Apariencia ───────── */

export function setTema(t: 'claro' | 'oscuro') {
  update((d) => {
    d.tema = t;
  });
}

/* ───────── Exportar / importar (junto con el progreso de los capítulos) ───────── */

const KEY_CAPITULOS = 'aula-clinica-ortega:v1';

export function exportarTodo(): string {
  let capitulos: unknown = null;
  try {
    capitulos = JSON.parse(window.localStorage.getItem(KEY_CAPITULOS) ?? 'null');
  } catch {
    capitulos = null;
  }
  return JSON.stringify({ app: 'semio-final', exportado: new Date().toISOString(), final: state, capitulos }, null, 1);
}

export function importarTodo(texto: string): { ok: boolean; msg: string } {
  try {
    const data = JSON.parse(texto);
    if (!data || data.app !== 'semio-final' || !data.final) return { ok: false, msg: 'El archivo no es un respaldo de esta plataforma.' };
    state = sanear(data.final);
    guardar();
    if (data.capitulos) window.localStorage.setItem(KEY_CAPITULOS, JSON.stringify(data.capitulos));
    subs.forEach((l) => l());
    return { ok: true, msg: 'Progreso importado. Recargá la página para ver también el progreso de los capítulos.' };
  } catch {
    return { ok: false, msg: 'No se pudo leer el archivo.' };
  }
}

/* ───────── Fechas ───────── */

/** Fecha ISO local (yyyy-mm-dd), sin desfase de zona horaria. */
export function hoyISO(d = new Date()): string {
  const z = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${z(d.getMonth() + 1)}-${z(d.getDate())}`;
}

export function diasEntre(a: string, b: string): number {
  const [y1, m1, d1] = a.split('-').map(Number);
  const [y2, m2, d2] = b.split('-').map(Number);
  return Math.round((Date.UTC(y2, m2 - 1, d2) - Date.UTC(y1, m1 - 1, d1)) / DIA);
}

export function fechaLarga(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d).toLocaleDateString('es-AR', { weekday: 'long', day: 'numeric', month: 'long' });
}
