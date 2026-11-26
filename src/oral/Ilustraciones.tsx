/* Ilustraciones propias de los apuntes (SVG). Colores por variables: se ven en oscuro, en claro y en el PDF. */

function HcEstructura({ vertical }: { vertical?: boolean }) {
  const partes = [
    { n: '1', t: 'Anamnesis', g: 0 },
    { n: '2', t: 'Examen físico', g: 0 },
    { n: '3', t: 'Resumen semiológico', g: 1 },
    { n: '4', t: 'Consideraciones dx', g: 1 },
    { n: '5', t: 'Evolución', g: 2 },
    { n: '6', t: 'Epicrisis', g: 2 },
  ];
  const grupos = ['Recoger datos', 'Pensar', 'Seguir al paciente'];
  const col = ['var(--ap-azul)', 'var(--ap-rosa)', 'var(--ap-lila)'];
  if (vertical)
    return (
      <svg viewBox="0 0 340 330" role="img" aria-label="Las seis partes de la historia clínica en tres grupos">
        {grupos.map((g, i) => (
          <g key={g}>
            <rect x={4} y={4 + i * 108} width={332} height={100} rx={14} fill="none" stroke={col[i]} strokeWidth={2} strokeDasharray="5 5" />
            <text x={18} y={28 + i * 108} fill={col[i]} fontSize={15} fontWeight={700}>
              {g}
            </text>
          </g>
        ))}
        {partes.map((p, i) => {
          const x = 14 + (i % 2) * 160;
          const y = 42 + p.g * 108;
          return (
            <g key={p.n}>
              <rect x={x} y={y} width={152} height={50} rx={9} fill={col[p.g]} opacity={0.16} />
              <circle cx={x + 18} cy={y + 25} r={12} fill={col[p.g]} />
              <text x={x + 18} y={y + 30} textAnchor="middle" fill="var(--ap-fondo)" fontSize={14} fontWeight={800}>
                {p.n}
              </text>
              <text x={x + 36} y={y + 30} fill="var(--ap-tinta)" fontSize={13.5} fontWeight={600}>
                {p.t.replace('Consideraciones dx', 'Consid. dx').replace('Resumen semiológico', 'Resumen')}
              </text>
            </g>
          );
        })}
      </svg>
    );
  return (
    <svg viewBox="0 0 720 150" role="img" aria-label="Las seis partes de la historia clínica en tres grupos: recoger datos, pensar y seguir al paciente">
      {grupos.map((g, i) => (
        <g key={g}>
          <rect x={8 + i * 238} y={8} width={226} height={134} rx={14} fill="none" stroke={col[i]} strokeWidth={2} strokeDasharray="5 5" />
          <text x={21 + i * 238} y={32} fill={col[i]} fontSize={15} fontWeight={700}>
            {g}
          </text>
        </g>
      ))}
      {partes.map((p, i) => {
        const x = 20 + p.g * 238;
        const y = 46 + (i % 2) * 46;
        return (
          <g key={p.n}>
            <rect x={x} y={y} width={202} height={36} rx={9} fill={col[p.g]} opacity={0.16} />
            <circle cx={x + 18} cy={y + 18} r={12} fill={col[p.g]} />
            <text x={x + 18} y={y + 23} textAnchor="middle" fill="var(--ap-fondo)" fontSize={14} fontWeight={800}>
              {p.n}
            </text>
            <text x={x + 38} y={y + 23} fill="var(--ap-tinta)" fontSize={15} fontWeight={600}>
              {p.t}
            </text>
          </g>
        );
      })}
      {[0, 1].map((i) => (
        <path key={i} d={`M${236 + i * 238} 75 l8 0 m-6 -5 l6 5 l-6 5`} stroke="var(--ap-tinta-2)" strokeWidth={2} fill="none" />
      ))}
    </svg>
  );
}

const ILUS: Record<string, (p: { vertical?: boolean }) => JSX.Element> = {
  'hc-estructura': HcEstructura,
};

export function Ilustracion({ id, pie }: { id: string; pie?: string }) {
  const C = ILUS[id];
  if (!C) return null;
  return (
    <figure className="ap-ilus">
      <div className="ap-ilus__h"><C /></div>
      <div className="ap-ilus__v"><C vertical /></div>
      {pie && <figcaption>{pie}</figcaption>}
    </figure>
  );
}
