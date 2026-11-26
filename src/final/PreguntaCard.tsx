import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Blocks } from '@/components/Blocks';
import { Rich, refText } from '@/components/Rich';
import { Respuesta } from '@/pages/PreguntasPage';
import { TEMA_POR_ID } from '@content/final/temas';
import { agregarError, notaPregunta, useFinal } from './store';
import { TIPO_LABEL, textoRespuesta, type PreguntaFinal } from './preguntas';

/** Pregunta abierta: primero sin respuesta; la usuaria responde en voz alta, revela y se autoevalúa. */
export function PreguntaCard({ p, n, abierta, onNota }: { p: PreguntaFinal; n?: number; abierta?: boolean; onNota?: (nota: 0 | 1 | 2) => void }) {
  const s = useFinal();
  const [ver, setVer] = useState(!!abierta);
  const previa = s.preguntas[p.id];
  const calificar = (nota: 0 | 1 | 2) => {
    notaPregunta(p.id, nota);
    if (nota < 2) {
      const tema = TEMA_POR_ID[p.temaId];
      agregarError({
        pregunta: p.texto,
        temaId: p.temaId,
        respuesta: textoRespuesta(p).replace(/\n+/g, ' ').slice(0, 700),
        concepto: p.claves?.join(' · ') || tema?.titulo || '',
        origen: TIPO_LABEL[p.tipo],
      });
    }
    onNota?.(nota);
  };
  return (
    <article className="f-item">
      <div className="f-item__head">
        <strong style={{ flex: '1 1 260px' }}>
          {n ? `${n}. ` : ''}
          <Rich text={p.texto} />
        </strong>
        <span className={`f-prio f-prio--${p.tipo === 'ortega' || p.tipo === 'preguntero' ? 'naranja' : 'azul'}`}>{TIPO_LABEL[p.tipo]}</span>
      </div>
      <div className="f-item__body">
        {p.cita && (
          <p className="f-cita">
            «{p.cita}» {p.ref && <small>({refText(p.ref)})</small>}
          </p>
        )}
        {p.delCapitulo && <p className="f-muted">Pregunta del capítulo en general (no hay una específica de este tema todavía).</p>}
        {!ver ? (
          <button type="button" className="btn btn--soft tone-sky" onClick={() => setVer(true)}>
            Respondé en voz alta y después mostrá la respuesta
          </button>
        ) : (
          <>
            <div className="f-oral__resp">{p.resp ? <Respuesta r={p.resp} /> : p.blocks ? <Blocks blocks={p.blocks} /> : <p>Sin respuesta cargada.</p>}</div>
            <div className="f-row" style={{ justifyContent: 'space-between' }}>
              <Link to={p.link} className="f-muted">
                Ver en el capítulo →
              </Link>
              {previa && <span className="f-muted">Última vez: {['no la sabía', 'a medias', 'la sabía'][previa.nota]}</span>}
            </div>
            <div className="f-notas" role="group" aria-label="¿Cómo te fue?">
              <button type="button" className="f-nota--0" onClick={() => calificar(0)}>
                No la sabía
              </button>
              <button type="button" className="f-nota--1" onClick={() => calificar(1)}>
                A medias
              </button>
              <button type="button" className="f-nota--2" onClick={() => calificar(2)}>
                La sabía
              </button>
            </div>
          </>
        )}
      </div>
    </article>
  );
}
