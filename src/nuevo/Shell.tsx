import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { Icon } from '@/components/Icon';
import { ErrorBoundary } from '@/components/ErrorBoundary';

const SECCIONES = [
  { to: '/', label: 'Inicio', icon: 'home', end: true },
  { to: '/temas', label: 'Temas', icon: 'book' },
  { to: '/bolillero', label: 'Bolillero', icon: 'dice' },
  { to: '/apuntes', label: 'Apuntes', icon: 'download' },
  { to: '/oral', label: 'Oral', icon: 'mic' },
];

const CLAVE_TEMA = 'semio-final:tema-visual';

export function Shell() {
  const loc = useLocation();
  const [tema, setTema] = useState<'oscuro' | 'claro'>(() => (localStorage.getItem(CLAVE_TEMA) === 'claro' ? 'claro' : 'oscuro'));
  useEffect(() => {
    document.documentElement.dataset.tema = tema;
    localStorage.setItem(CLAVE_TEMA, tema);
  }, [tema]);
  useEffect(() => {
    if (!loc.hash) window.scrollTo({ top: 0 });
  }, [loc.pathname, loc.hash]);
  return (
    <div className="nx">
      <header className="nx-top">
        <div className="nx-top__in">
          <Link to="/" className="nx-marca">
            Semio <span>Final</span>
          </Link>
          <nav aria-label="Secciones">
            {SECCIONES.map((s) => (
              <NavLink key={s.to} to={s.to} end={s.end}>
                {s.label}
              </NavLink>
            ))}
          </nav>
          <button type="button" className="nx-tema" onClick={() => setTema(tema === 'oscuro' ? 'claro' : 'oscuro')} aria-label={tema === 'oscuro' ? 'Pasar a modo claro' : 'Pasar a modo oscuro'} title="Claro / oscuro">
            {tema === 'oscuro' ? '☀' : '☾'}
          </button>
        </div>
      </header>
      <ErrorBoundary key={loc.pathname} label="esta página">
        <Outlet />
      </ErrorBoundary>
      <footer className="nx-pie">
        <nav aria-label="Secciones">
          {SECCIONES.map((s) => (
            <NavLink key={s.to} to={s.to} end={s.end}>
              <Icon name={s.icon} size={22} />
              {s.label}
            </NavLink>
          ))}
        </nav>
      </footer>
    </div>
  );
}
