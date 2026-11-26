import type { Inline } from '@/types';

/**
 * APUNTE PARA EL ORAL. Un solo dato que se ve en la web y sale en el PDF.
 * Orden = el orden en que se le responde al profesor. Sin fisiopatología extensa (eso va en «Para entenderlo»).
 */
export type BloqueOral =
  /** Definición: la primera frase de la respuesta. */
  | { t: 'def'; text: Inline }
  /** Paso numerado de la respuesta (1. Definición, 2. Clasificación…): título + texto y/o lista. */
  | { t: 'paso'; titulo: string; text?: Inline; items?: Inline[]; ordenada?: boolean }
  /** Cuadro comparativo. `marca` resalta una columna. */
  | { t: 'cuadro'; titulo?: string; head: string[]; filas: Inline[][]; marca?: number }
  /** Para memorizar tal cual: tríadas, criterios, valores. */
  | { t: 'clave'; titulo: string; items: Inline[] }
  /** Trampa frecuente o diferencia entre fuentes que importa para responder. */
  | { t: 'ojo'; text: Inline }
  /** Ejemplo clínico concreto. */
  | { t: 'ejemplo'; text: Inline }
  /** Maniobras de la biblioteca (con su fragmento de video). */
  | { t: 'maniobras'; ids: string[] }
  /** Ilustración propia (src/oral/Ilustraciones.tsx). */
  | { t: 'ilustracion'; id: string; pie?: string };

export interface ApunteTema {
  /** Id del tema central (temas.ts). */
  tema: string;
  titulo: string;
  /** Los porqués, en pocas líneas numeradas (como en los resúmenes de referencia). */
  porque?: Inline[];
  bloques: BloqueOral[];
  /** Respuesta de un minuto, como se dice frente al profesor. */
  oral: Inline;
  /** Repreguntas probables, con respuesta corta. */
  repreguntas?: { q: Inline; a: Inline }[];
  /** Una línea al final: libro, capítulo, página. */
  fuentes: string;
}

export interface ApunteUnidad {
  unidad: string;
  temas: ApunteTema[];
  /** «Lo que no te podés olvidar»: pregunta → respuesta corta. */
  noOlvidar: { q: Inline; a: Inline }[];
}
