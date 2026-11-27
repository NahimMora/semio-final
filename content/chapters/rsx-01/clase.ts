import type { SourceRef } from '@/types';
import type { Diapositiva, Mazo, PlanClase } from '@/clase/tipos';
import video from './clase-video.json';

/*
 * rsx-01 · «Para entenderlo»: nefrótico, nefrítico, IRA y ERC.
 * Fuentes: apunte de Ortega pp. 429–444, clases de Ortega (nefrítico, insuficiencia renal).
 */
const L = (p: string): SourceRef => ({ src: 'libro', p });

const diapos: Diapositiva[] = [
  {
    id: 'rs-filtro',
    sec: 'glomerulo',
    titulo: 'Un filtro que deja pasar o un filtro roto',
    amplio: true,
    bloques: [
      {
        t: 'comparar',
        cols: [
          { titulo: 'Nefrótico: pasan proteínas', tono: 'sky', items: ['Proteinuria **> 3,5 g**', 'Albúmina **< 3** → **edema** masivo', 'Hiperlipidemia', 'Sin hematuria'] },
          { titulo: 'Nefrítico: el capilar se rompe', tono: 'rose', items: ['**Hematuria**, cilindros hemáticos', '**HTA**, **oliguria**', '**Hiperazoemia**', 'Faringitis 1–2 semanas antes'] },
        ],
      },
    ],
    voz: [
      'Los dos síndromes glomerulares se entienden pensando en el glomérulo como un filtro. En el nefrótico el filtro deja pasar proteínas: se pierden más de tres gramos y medio por día, la albúmina baja, el agua sale de los vasos y aparece un edema masivo, con hiperlipidemia. No hay sangre en la orina.',
      'En el nefrítico, en cambio, el capilar glomerular se inflama y se rompe: pasan glóbulos rojos, hay hematuria con cilindros hemáticos, y como cae el filtrado, el riñón retiene sal y agua y aparecen hipertensión, oliguria y aumento de la urea. El típico es el postestreptocócico, una o dos semanas después de una faringitis.',
    ],
    refs: [L('440–441')],
  },
  {
    id: 'rs-ira',
    sec: 'ira',
    titulo: 'IRA: antes, dentro o después del riñón',
    amplio: true,
    bloques: [
      {
        t: 'secuencia',
        flechas: true,
        items: [
          { ico: 'gota', t: 'Prerrenal', d: 'No llega sangre · **Na u < 20**', tono: 'sky' },
          { ico: 'rinon', t: 'Renal', d: 'Túbulo roto (NTA) · **Na u > 40**', tono: 'rose' },
          { ico: 'nudo', t: 'Posrenal', d: 'La orina no sale · anuria', tono: 'lilac' },
        ],
      },
      { t: 'clave', en: 1, text: 'Túbulo **sano** guarda el sodio; túbulo **roto** lo pierde.', tono: 'lilac' },
    ],
    voz: [
      'La insuficiencia renal aguda puede venir de antes, de dentro o de después del riñón. Prerrenal: no le llega sangre, por hipovolemia o falla cardíaca; es la más frecuente. Como el túbulo está sano y cree que falta volumen, guarda todo el sodio: el sodio urinario es menor de veinte.',
      'Renal: el daño está en el riñón, sobre todo la necrosis tubular; el túbulo roto no puede retener sodio y el sodio urinario es mayor de cuarenta.',
      'Posrenal: la orina no puede salir, por una próstata grande o cálculos, y suele dar anuria.',
    ],
    refs: [L('430–432')],
  },
  {
    id: 'rs-erc',
    sec: 'erc',
    titulo: 'ERC: menos nefronas, menos funciones',
    amplio: true,
    bloques: [
      {
        t: 'comparar',
        cols: [
          { titulo: 'Deja de excretar', tono: 'rose', items: ['Urea: **síndrome urémico**', '**Potasio** y ácido', 'Agua: edema, HTA'] },
          { titulo: 'Deja de fabricar y concentrar', tono: 'sky', items: ['Eritropoyetina: **anemia**', 'Vitamina D: **hipocalcemia**', 'Isostenuria: **nicturia**'] },
        ],
      },
      { t: 'clave', en: 1, text: 'G5 **< 15**: diálisis si hay **AEIOU** (acidosis, electrolitos, intoxicación, overload, uremia).', tono: 'rose' },
    ],
    voz: [
      'En la enfermedad renal crónica se van perdiendo nefronas en forma irreversible, y el riñón va perdiendo funciones. Deja de excretar: se acumulan la urea, el potasio, el ácido y el agua.',
      'Y deja de fabricar y de concentrar: sin eritropoyetina aparece anemia, sin vitamina D baja el calcio, y como no concentra, el paciente orina de noche. Cuando el filtrado cae por debajo de quince, estadio cinco, se piensa en diálisis, que se indica con cualquiera de las vocales: acidosis, electrolitos, intoxicaciones, sobrecarga o uremia.',
    ],
    refs: [L('436–437')],
  },
];

const fisio: Mazo = {
  id: 'fisio',
  secciones: [
    { id: 'glomerulo', label: 'Glomérulo' },
    { id: 'ira', label: 'IRA' },
    { id: 'erc', label: 'ERC' },
  ],
  diapos,
};

export const clase: PlanClase = {
  mapa: { raices: [{ id: 'rs', label: 'Síndromes renales', tone: 'sky', hijos: [] }] },
  fisio,
  teoria: { id: 'teoria', secciones: [], diapos: [] },
  video: (video as { src?: string }).src ? (video as PlanClase['video']) : undefined,
  casos: [],
  simulacroDesarrollos: [],
  anclas: {},
};
