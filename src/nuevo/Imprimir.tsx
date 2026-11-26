import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SISTEMAS_FINAL } from '@content/final/temas';
import { UNIDADES } from '@content/final/unidades';
import type { ApunteUnidad } from '@content/oral/tipos';
import { cargarApunte } from '@/oral/apuntes';
import { NoOlvidar, TemaOral } from '@/oral/Render';
import '@/styles/apunte-print.css';

/** Apunte de un sistema para imprimir: /imprimir/apunte/<sistema>. Base del PDF. */
export function ImprimirApunte() {
  const { sistema } = useParams();
  const sis = SISTEMAS_FINAL.find((s) => s.id === sistema);
  const [aps, setAps] = useState<ApunteUnidad[] | null>(null);
  useEffect(() => {
    document.documentElement.dataset.tema = 'impreso';
    const us = UNIDADES.filter((u) => u.sistema === sistema);
    void Promise.all(us.map((u) => cargarApunte(u.id))).then((l) => setAps(l.filter((x): x is ApunteUnidad => !!x)));
  }, [sistema]);
  if (!sis) return <p>Sistema inexistente.</p>;
  if (!aps) return <p>Cargando…</p>;
  const temas = aps.flatMap((a) => a.temas);
  return (
    <div className="pr">
      <header className="pr-portada">
        <div className="pr-kicker">Semiología · final oral · Fundación Barceló</div>
        <h1>{sis.titulo}</h1>
        {temas.length > 1 && (
          <ol className="pr-indice">
            {temas.map((t) => (
              <li key={t.tema}>{t.titulo}</li>
            ))}
          </ol>
        )}
        <p className="pr-como">
          Cómo leerlo: cada tema empieza por <b>Para entenderlo</b> (el porqué), sigue en el <b>orden en que se responde en el oral</b> y cierra con <b>Así lo digo en el oral</b>. Al final del sistema: <b>Lo que no te podés olvidar</b>.
        </p>
      </header>
      {aps.map((a) => (
        <div key={a.unidad}>
          {a.temas.map((t) => (
            <div key={t.tema} className="pr-tema">
              <TemaOral t={t} impreso />
            </div>
          ))}
        </div>
      ))}
      <div className="pr-tema pr-final">
        {aps.map((a) => (
          <NoOlvidar key={a.unidad} a={a} impreso />
        ))}
      </div>
      <div id="listo-para-pdf" />
    </div>
  );
}
