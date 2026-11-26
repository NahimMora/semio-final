import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CRONOGRAMA, temasDeRepaso } from '@content/final/cronograma';
import { TEMA_POR_ID, TEMAS, SISTEMAS_FINAL } from '@content/final/temas';
import { BOLILLERO } from '@content/final/bolillero';
import { Icon } from '@/components/Icon';
import { armarFicha, fichaDelDia } from '@/final/ficha';
import { hoyISO, useFinal, repasarError } from '@/final/store';
import { TemaChip, temasDeBolilla } from '@/final/ui';
import { diaDe } from './Inicio';

function toast(m: string) {
  const el = document.createElement('div');
  el.className = 'f-toast';
  el.setAttribute('role', 'status');
  el.textContent = m;
  document.body.appendChild(el);
  window.setTimeout(() => el.remove(), 2200);
}

async function copiar(t: string) {
  try {
    await navigator.clipboard.writeText(t);
    toast('Ficha copiada: pegala en ChatGPT');
  } catch {
    toast('No se pudo copiar: seleccioná el texto a mano');
  }
}

function descargar(nombre: string, t: string, tipo: 'md' | 'txt') {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([t], { type: tipo === 'md' ? 'text/markdown' : 'text/plain' }));
  a.download = `${nombre}.${tipo}`;
  a.click();
  URL.revokeObjectURL(a.href);
}

export function FichaPage() {
  const [sp] = useSearchParams();
  const [ficha, setFicha] = useState<{ titulo: string; texto: string } | null>(null);
  const dia = sp.get('dia');
  const sistema = sp.get('sistema');
  const bolilla = sp.get('bolilla');
  const tema = sp.get('tema');
  const temas = sp.get('temas');
  useEffect(() => {
    setFicha(null);
    (async () => {
      if (dia) return setFicha(await fichaDelDia(dia));
      if (bolilla) {
        const n = Number(bolilla);
        return setFicha({ titulo: `Bolilla ${n}`, texto: await armarFicha(temasDeBolilla(n), { titulo: `Bolilla ${n} del bolillero oficial`, nota: `Ítems: ${BOLILLERO.find((b) => b.n === n)?.items.map((i) => i.texto).join(' · ')}` }) });
      }
      if (sistema) {
        const sis = SISTEMAS_FINAL.find((x) => x.id === sistema);
        const ids = TEMAS.filter((t) => t.sistema === sistema).map((t) => t.id);
        return setFicha({ titulo: sis?.titulo ?? sistema, texto: await armarFicha(ids, { titulo: sis?.titulo ?? sistema }) });
      }
      if (tema && TEMA_POR_ID[tema]) return setFicha({ titulo: TEMA_POR_ID[tema].titulo, texto: await armarFicha([tema], { titulo: TEMA_POR_ID[tema].titulo }) });
      if (temas) {
        const ids = temas.split(',').filter((x) => TEMA_POR_ID[x]);
        return setFicha({ titulo: 'Simulacro', texto: await armarFicha(ids, { titulo: 'Temas del simulacro' }) });
      }
      const hoy = diaDe(hoyISO());
      setFicha(await fichaDelDia(hoy.fecha));
    })();
  }, [dia, sistema, bolilla, tema, temas]);

  return (
    <div className="f-page">
      <div className="f-kicker">Repasar con ChatGPT</div>
      <h1>{ficha ? ficha.titulo : 'Armando la ficha…'}</h1>
      <p className="f-lead">La ficha es autosuficiente: lleva las instrucciones de examinador, los temas, los conceptos imprescindibles, las maniobras, las preguntas documentadas con su respuesta de referencia, tus errores y las fuentes. ChatGPT no puede ver esta página, por eso no alcanza con un enlace.</p>
      {ficha && (
        <>
          <div className="f-row" style={{ marginBottom: 12 }}>
            <button type="button" className="btn btn--primary" onClick={() => copiar(ficha.texto)}>
              <Icon name="copy" size={16} /> Copiar para ChatGPT
            </button>
            <button
              type="button"
              className="btn btn--soft tone-lilac"
              onClick={async () => {
                await copiar(ficha.texto);
                window.open('https://chatgpt.com/', '_blank', 'noopener');
              }}
            >
              <Icon name="chat" size={16} /> Repasar con ChatGPT
            </button>
            <button type="button" className="btn btn--ghost" onClick={() => descargar(`ficha-${ficha.titulo.replace(/[^\w]+/g, '-')}`, ficha.texto, 'md')}>
              <Icon name="download" size={16} /> Markdown
            </button>
            <button type="button" className="btn btn--ghost" onClick={() => descargar(`ficha-${ficha.titulo.replace(/[^\w]+/g, '-')}`, ficha.texto, 'txt')}>
              <Icon name="download" size={16} /> Texto
            </button>
          </div>
          <p className="f-muted">«Repasar con ChatGPT» copia la ficha y abre ChatGPT: pegala (mantené apretado → Pegar) y empezá. Enlace directo a esta ficha: <code>{window.location.href}</code></p>
          <pre className="f-ficha">{ficha.texto}</pre>
        </>
      )}
      <h2>Otras fichas</h2>
      <div className="f-row">
        {SISTEMAS_FINAL.map((x) => (
          <Link key={x.id} className="btn btn--sm btn--ghost" to={`/ficha?sistema=${x.id}`}>
            {x.corto}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function RepasosPage() {
  const s = useFinal();
  const hoy = hoyISO();
  const dia = diaDe(hoy);
  const ahora = Date.now();
  const vencidos = s.errores.filter((e) => !e.resuelto && e.proximo <= ahora);
  const repasosHoy = dia.bloques.filter((b) => b.tipo === 'repaso' || b.tipo === 'recuerdo');
  const ayer = CRONOGRAMA[CRONOGRAMA.indexOf(dia) - 1];
  return (
    <div className="f-page">
      <div className="f-kicker">Repetición espaciada</div>
      <h1>Repasos pendientes</h1>
      <ol className="f-lead" style={{ paddingLeft: 20 }}>
        <li>Al terminar un tema: explicalo sin mirar.</li>
        <li>Al día siguiente: recuerdo rápido de 5 minutos.</li>
        <li>En la fecha programada: preguntas abiertas (25 min; 40–50 si necesitás un oral más profundo).</li>
        <li>Desde el 9/12: simulacros integradores y errores.</li>
      </ol>
      {ayer && (
        <section className="f-card f-card--accent tone-sky">
          <h3>Recuerdo rápido de ayer ({ayer.corto}) · 5 min</h3>
          <div className="f-row">
            {[...new Set(ayer.bloques.flatMap((b) => b.temas))].map((id) => (
              <TemaChip key={id} id={id} />
            ))}
          </div>
          <Link className="btn btn--sm btn--soft" to={`/ficha?dia=${ayer.fecha}`} style={{ marginTop: 8 }}>
            Ficha del {ayer.corto}
          </Link>
        </section>
      )}
      {repasosHoy.map((b) => (
        <section key={b.id} className="f-card" style={{ marginTop: 12 }}>
          <h3>
            {b.titulo} · {b.min} min
          </h3>
          <div className="f-row">
            {temasDeRepaso(b).map((id) => (
              <TemaChip key={id} id={id} />
            ))}
          </div>
          <div className="f-row" style={{ marginTop: 8 }}>
            {(b.repasa ?? []).map((c) => {
              const d = CRONOGRAMA.find((x) => x.corto === c)!;
              return (
                <Link key={c} className="btn btn--sm btn--primary" to={`/ficha?dia=${d.fecha}`}>
                  <Icon name="chat" size={14} /> Ficha ChatGPT del {c}
                </Link>
              );
            })}
            {temasDeRepaso(b).length > 0 && (
              <Link className="btn btn--sm btn--soft tone-rose" to={`/oral?temas=${temasDeRepaso(b).join(',')}`}>
                <Icon name="mic" size={14} /> Preguntas abiertas acá
              </Link>
            )}
          </div>
        </section>
      ))}
      <h2>Errores para hoy ({vencidos.length})</h2>
      {vencidos.length === 0 ? (
        <p className="f-muted">No hay errores vencidos. Bien.</p>
      ) : (
        vencidos.map((e) => (
          <div key={e.id} className="f-card f-error is-due" style={{ marginBottom: 10 }}>
            <strong>{e.pregunta}</strong>
            <details className="f-det">
              <summary>Ver respuesta</summary>
              <p>{e.respuesta}</p>
              {e.concepto && <p className="f-muted">Reforzar: {e.concepto}</p>}
            </details>
            <div className="f-row">
              <button type="button" className="btn btn--sm btn--known" onClick={() => repasarError(e.id, true)}>
                Ahora la sé
              </button>
              <button type="button" className="btn btn--sm btn--unknown" onClick={() => repasarError(e.id, false)}>
                Sigo sin saberla
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
