import { lazy, Suspense } from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Shell } from '@/nuevo/Shell';
import { Loading, NotFound } from '@/pages/Misc';

/*
 * Navegación del final (27/11): Inicio y cronograma · Temas · Bolillero · Apuntes · Oral.
 * Las páginas del proyecto anterior que siguen siendo útiles (capítulos largos, maniobras, buscador,
 * control de cobertura) quedan accesibles por enlace, pero no en la navegación.
 * El resto (estadísticas, progreso por estados, banco de errores, parcial del 16/11) se retiró de las rutas;
 * el código y los datos guardados se conservan (etiqueta git v1-antes-reestructuracion).
 */
const N = (f: () => Promise<Record<string, unknown>>, k: string) => lazy(() => f().then((m) => ({ default: m[k] as React.ComponentType })));
const P = () => import('@/nuevo/Paginas');
const InicioNuevo = N(P, 'InicioNuevo');
const TemasNuevo = N(P, 'TemasNuevo');
const UnidadNueva = N(P, 'UnidadNueva');
const BolilleroNuevo = N(P, 'BolilleroNuevo');
const ApuntesNuevo = N(P, 'ApuntesNuevo');
const OralNuevo = N(P, 'OralNuevo');
const ImprimirApunte = N(() => import('@/nuevo/Imprimir'), 'ImprimirApunte');
const ChapterPage = N(() => import('@/pages/ChapterPage'), 'ChapterPage');
const ManeuversPage = N(() => import('@/pages/ManeuversPage'), 'ManeuversPage');
const SearchPage = N(() => import('@/pages/SearchPage'), 'SearchPage');
const MatrizPage = N(() => import('@/pages/final/CronogramaPage'), 'MatrizPage');
const PrintManual = N(() => import('@/pages/Manual'), 'PrintManual');

export function App() {
  return (
    <HashRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/imprimir/apunte/:sistema" element={<ImprimirApunte />} />
          <Route path="/imprimir/:id" element={<PrintManual />} />
          <Route element={<Shell />}>
            <Route index element={<InicioNuevo />} />
            <Route path="temas" element={<TemasNuevo />} />
            <Route path="u/:id" element={<UnidadNueva />} />
            <Route path="bolillero" element={<BolilleroNuevo />} />
            <Route path="apuntes" element={<ApuntesNuevo />} />
            <Route path="oral" element={<OralNuevo />} />
            <Route path="capitulo/:id" element={<ChapterPage />} />
            <Route path="maniobras" element={<ManeuversPage />} />
            <Route path="buscar" element={<SearchPage />} />
            <Route path="matriz" element={<MatrizPage />} />
            {/* Enlaces viejos → su lugar nuevo */}
            <Route path="cronograma" element={<Navigate to="/" replace />} />
            <Route path="bolillero/*" element={<Navigate to="/bolillero" replace />} />
            <Route path="tema/:id" element={<Navigate to="/temas" replace />} />
            <Route path="era/:n" element={<Navigate to="/temas" replace />} />
            <Route path="ficha" element={<Navigate to="/oral" replace />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
}
