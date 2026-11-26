import { lazy, Suspense } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Home } from '@/pages/Home';
import { SystemPage } from '@/pages/SystemPage';
import { Loading, NotFound } from '@/pages/Misc';

// Carga diferida por ruta: nada de capítulos, manual ni práctica se descarga al entrar.
const ChapterPage = lazy(() => import('@/pages/ChapterPage').then((m) => ({ default: m.ChapterPage })));
const ManualPage = lazy(() => import('@/pages/Manual').then((m) => ({ default: m.ManualPage })));
const PrintManual = lazy(() => import('@/pages/Manual').then((m) => ({ default: m.PrintManual })));
const PracticePage = lazy(() => import('@/pages/Study').then((m) => ({ default: m.PracticePage })));
const ExamPage = lazy(() => import('@/pages/Study').then((m) => ({ default: m.ExamPage })));
const ReviewPage = lazy(() => import('@/pages/Study').then((m) => ({ default: m.ReviewPage })));
const ProgressPage = lazy(() => import('@/pages/ProgressPage').then((m) => ({ default: m.ProgressPage })));
const ManeuversPage = lazy(() => import('@/pages/ManeuversPage').then((m) => ({ default: m.ManeuversPage })));
const PreguntasPage = lazy(() => import('@/pages/PreguntasPage').then((m) => ({ default: m.PreguntasPage })));
const SearchPage = lazy(() => import('@/pages/SearchPage').then((m) => ({ default: m.SearchPage })));
const ImprimirParcial = lazy(() => import('@/pages/ImprimirParcial').then((m) => ({ default: m.ImprimirParcial })));
const ImprimirParcialCompacto = lazy(() => import('@/pages/ImprimirParcialCompacto').then((m) => ({ default: m.ImprimirParcialCompacto })));
const InicioFinal = lazy(() => import('@/pages/final/Inicio').then((m) => ({ default: m.InicioFinal })));
const TemaPage = lazy(() => import('@/pages/final/TemaPage').then((m) => ({ default: m.TemaPage })));
const BolilleroPage = lazy(() => import('@/pages/final/BolilleroPage').then((m) => ({ default: m.BolilleroPage })));
const BolillaPage = lazy(() => import('@/pages/final/BolilleroPage').then((m) => ({ default: m.BolillaPage })));
const SorteoPage = lazy(() => import('@/pages/final/BolilleroPage').then((m) => ({ default: m.SorteoPage })));
const OralPage = lazy(() => import('@/pages/final/OralPage').then((m) => ({ default: m.OralPage })));
const CronogramaPage = lazy(() => import('@/pages/final/CronogramaPage').then((m) => ({ default: m.CronogramaPage })));
const MatrizPage = lazy(() => import('@/pages/final/CronogramaPage').then((m) => ({ default: m.MatrizPage })));
const FichaPage = lazy(() => import('@/pages/final/FichaPage').then((m) => ({ default: m.FichaPage })));
const RepasosPage = lazy(() => import('@/pages/final/FichaPage').then((m) => ({ default: m.RepasosPage })));
const EraPage = lazy(() => import('@/pages/final/VariasPages').then((m) => ({ default: m.EraPage })));
const ApuntesPage = lazy(() => import('@/pages/final/VariasPages').then((m) => ({ default: m.ApuntesPage })));
const ErroresPage = lazy(() => import('@/pages/final/VariasPages').then((m) => ({ default: m.ErroresPage })));
const MemoriaPage = lazy(() => import('@/pages/final/VariasPages').then((m) => ({ default: m.MemoriaPage })));
const ProgresoFinalPage = lazy(() => import('@/pages/final/VariasPages').then((m) => ({ default: m.ProgresoFinalPage })));
const ParcialPage = lazy(() => import('@/pages/ParcialPage').then((m) => ({ default: m.ParcialPage })));

export function App() {
  return (
    <HashRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/imprimir/:id" element={<PrintManual />} />
          <Route path="/imprimir-parcial/:sistema" element={<ImprimirParcial />} />
          <Route path="/imprimir-parcial/:sistema/compacto" element={<ImprimirParcialCompacto />} />
          <Route element={<Layout />}>
            <Route index element={<InicioFinal />} />
            <Route path="sistemas" element={<Home />} />
            <Route path="era/:n" element={<EraPage />} />
            <Route path="tema/:id" element={<TemaPage />} />
            <Route path="bolillero" element={<BolilleroPage />} />
            <Route path="bolillero/sorteo" element={<SorteoPage />} />
            <Route path="bolillero/:n" element={<BolillaPage />} />
            <Route path="oral" element={<OralPage />} />
            <Route path="cronograma" element={<CronogramaPage />} />
            <Route path="matriz" element={<MatrizPage />} />
            <Route path="ficha" element={<FichaPage />} />
            <Route path="repasos" element={<RepasosPage />} />
            <Route path="errores" element={<ErroresPage />} />
            <Route path="memoria" element={<MemoriaPage />} />
            <Route path="apuntes" element={<ApuntesPage />} />
            <Route path="sistema/:id" element={<SystemPage />} />
            <Route path="capitulo/:id" element={<ChapterPage />} />
            <Route path="manual/:id" element={<ManualPage />} />
            <Route path="practica" element={<PracticePage />} />
            <Route path="examen" element={<ExamPage />} />
            <Route path="repasar" element={<ReviewPage />} />
            <Route path="progreso" element={<ProgresoFinalPage />} />
            <Route path="progreso-capitulos" element={<ProgressPage />} />
            <Route path="maniobras" element={<ManeuversPage />} />
            <Route path="preguntas" element={<PreguntasPage />} />
            <Route path="buscar" element={<SearchPage />} />
            <Route path="parcial" element={<ParcialPage />} />
            <Route path="parcial/:sec" element={<ParcialPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
}
