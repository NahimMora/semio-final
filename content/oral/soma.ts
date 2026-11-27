import type { ApunteUnidad } from './tipos';

/*
 * SOMA: exploración articular — apunte para el oral.
 * Base: Argente-Álvarez cap. 23 («Sistema osteoarticulomuscular») y su video 4 de maniobras,
 * con la indicación de Ortega sobre las maniobras de rodilla (clase «meníngeo-osteoarticular», 46:17).
 */
export const apunte: ApunteUnidad = {
  unidad: 'soma',
  temas: [
    {
      tema: 'ef-articulaciones',
      titulo: 'Exploración física de las articulaciones',
      porque: [
        'Cada maniobra **estira, comprime o tensiona** una estructura concreta (un ligamento, un menisco, una raíz nerviosa) y la respuesta —dolor o movimiento anormal— dice **qué estructura** está lesionada.',
        'Comparar **movilidad activa** (la hace el paciente) con **pasiva** (la hace el médico) separa el problema **articular** (ambas limitadas) del **neurológico o tendinoso** (activa perdida, pasiva conservada).',
      ],
      bloques: [
        {
          t: 'paso',
          titulo: 'Sistemática',
          ordenada: true,
          items: [
            '**Inspección**: actitud, deformidades, **tumefacción**, color (eritema), atrofia muscular; siempre **comparando con el lado opuesto**.',
            '**Palpación**: **temperatura**, **dolor**, **derrame**, engrosamiento sinovial, crepitación.',
            '**Movilidad activa** y luego **pasiva**, en todos los ejes.',
            '**Maniobras específicas** de cada articulación.',
          ],
        },
        { t: 'ojo', text: '**Activa perdida con pasiva conservada**: causa **neurológica** (paresia) o **rotura tendinosa** (manguito rotador). **Ambas limitadas**: causa **articular**.' },
        {
          t: 'cuadro',
          titulo: 'Maniobras por región',
          head: ['Región', 'Maniobra', 'Qué explora / positiva'],
          filas: [
            ['**Columna cervical**', '**Spurling**: comprimir y lateralizar la cabeza', 'Dolor irradiado al brazo: **compresión radicular cervical**'],
            ['**Columna dorsal**', '**Adams**: flexionar el tronco a 90°', 'Giba que se acentúa: escoliosis **estructural**'],
            ['**Columna lumbar**', '**Lasègue**: elevar la pierna extendida · **Neri**: flexionar la cabeza', 'Dolor posterior del muslo y pierna: **ciático** (hernia de disco)'],
            ['', '**Goldthwait**', 'Dolor antes de los 70°: orienta a simulación'],
            ['**Hombro**', '**Caída del brazo** (90° de abducción)', 'El brazo cae: **supraespinoso** (manguito rotador)'],
            ['**Codo**', '**Cozen** (extensión contra resistencia) · Cozen invertida', '**Epicondilitis** (tenista) · epitrocleitis (golfista)'],
            ['**Muñeca**', '**Phalen** (dorsos enfrentados 30–60 s) · **Tinel** (percutir el carpo)', 'Parestesias del mediano: **túnel carpiano**'],
            ['**Cadera y sacroilíaca**', '**Patrick (FABERE)** · **Thomas**', 'Sacroileítis o cadera · flexo de cadera'],
            ['**Rodilla**', '**Cajón** anterior/posterior · **bostezo** · **McMurray** · **choque rotuliano**', '**Cruzados** · **colaterales** · **meniscos** · **derrame**'],
            ['**Tobillo**', '**Thompson** (apretar la pantorrilla)', 'El pie no se flexiona: **rotura del tendón de Aquiles**'],
          ],
        },
        { t: 'clave', titulo: 'Para el oral', items: ['Ortega avisó en clase que **las maniobras de rodilla** son las que más preguntan: cajón, bostezo, McMurray y choque rotuliano.'] },
        { t: 'maniobras', ids: ['cajon-rodilla', 'bostezo-rodilla', 'mcmurray', 'choque-rotuliano', 'lasegue', 'spurling', 'phalen', 'tinel', 'patrick-fabere', 'thompson'] },
      ],
      oral: '«La exploración articular sigue una sistemática: inspección, comparando siempre con el lado opuesto —actitud, deformidades, tumefacción, eritema y atrofia—; palpación —temperatura, dolor, derrame y crepitación—; movilidad activa y pasiva en todos los ejes; y maniobras específicas. Si la activa está perdida y la pasiva conservada, la causa es neurológica o una rotura tendinosa; si ambas están limitadas, es articular. Las maniobras principales son: Spurling para la raíz cervical; Lasègue y Neri para el ciático; la caída del brazo para el supraespinoso; Cozen para la epicondilitis; Phalen y Tinel para el túnel carpiano; Patrick para la sacroilíaca y la cadera; y en la rodilla, el cajón para los cruzados, el bostezo para los colaterales, McMurray para los meniscos y el choque rotuliano para el derrame. Thompson explora el tendón de Aquiles.»',
      repreguntas: [
        { q: '¿Qué explora la maniobra del cajón anterior?', a: 'El ligamento cruzado anterior.' },
        { q: '¿Cómo buscás un derrame de rodilla?', a: 'Con el choque rotuliano: la rótula se hunde y rebota.' },
        { q: '¿Qué maniobras usás para el túnel carpiano?', a: 'Phalen y Tinel.' },
        { q: '¿Qué indica un Lasègue positivo?', a: 'Compromiso del nervio ciático (hernia de disco lumbar).' },
      ],
      fuentes: 'Argente-Álvarez, cap. 23 y video 4 (sistema osteoarticulomuscular) · Clase de Ortega, meníngeo y osteoarticular (46:17).',
    },
  ],
  noOlvidar: [
    { q: 'Sistemática', a: 'Inspección, palpación, movilidad activa y pasiva, maniobras; comparar lados.' },
    { q: 'Activa vs pasiva', a: 'Solo la activa perdida: neurológica o tendón roto.' },
    { q: 'Rodilla', a: 'Cajón (cruzados), bostezo (colaterales), McMurray (meniscos), choque rotuliano (derrame).' },
    { q: 'Columna', a: 'Spurling (cervical), Lasègue y Neri (ciático), Adams (escoliosis).' },
    { q: 'Miembro superior', a: 'Caída del brazo (supraespinoso), Cozen (epicóndilo), Phalen y Tinel (carpiano).' },
  ],
};
