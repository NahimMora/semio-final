import { useEffect, useState, type FormEvent } from 'react';
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { InstalarApp } from './InstalarApp';
import { SYSTEMS, isAvailable } from '@content/curriculum';
import { useProgress } from '@/lib/progress';
import { useFinal, setTema, diasEntre, hoyISO } from '@/final/store';
import { FECHA_FINAL } from '@content/final/cronograma';
import { Icon } from './Icon';
import { ErrorBoundary } from './ErrorBoundary';

const NAV = [
  { to: '/', label: 'Hoy', icon: 'home', end: true },
  { to: '/bolillero', label: 'Bolillero', icon: 'dice' },
  { to: '/oral', label: 'Oral', icon: 'mic' },
  { to: '/maniobras', label: 'Maniobras', icon: 'hand' },
  { to: '/repasos', label: 'Repasos', icon: 'refresh' },
  { to: '/progreso', label: 'Progreso', icon: 'chart' },
];

const HERRAMIENTAS = [
  { to: '/cronograma', label: 'Cronograma' },
  { to: '/bolillero/sorteo', label: 'Sorteo de bolilla' },
  { to: '/memoria', label: 'Memoria rápida' },
  { to: '/errores', label: 'Banco de errores' },
  { to: '/apuntes', label: 'Apuntes PDF' },
  { to: '/matriz', label: 'Matriz de cobertura' },
  { to: '/preguntas', label: 'Preguntas de Ortega' },
];

/** Material del parcial del 16/11: se conserva (no se borra), al final de la columna. */
const PARCIAL = [
  { to: '/parcial', label: 'Temario del parcial' },
  { to: '/parcial/preguntas?s=digestivo', label: 'Preguntas del parcial' },
  { to: '/parcial/choice?s=digestivo', label: 'Choice del parcial' },
  { to: '/parcial/maniobras', label: 'Maniobras y puntos dolorosos' },
];

export function Layout() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  const f = useFinal();
  useEffect(() => {
    document.documentElement.dataset.tema = f.tema;
  }, [f.tema]);
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [loc.pathname]);
  useEffect(() => {
    setOpen(false);
  }, [loc.pathname, loc.search]);
  return (
    <div className={`shell ${open ? 'is-menu-open' : ''}`}>
      <a className="skip" href="#main">
        Saltar al contenido
      </a>
      <TopBar onMenu={() => setOpen((o) => !o)} menuOpen={open} />
      <div className="shell__body">
        <Sidebar />
        <div className="shell__scrim" onClick={() => setOpen(false)} aria-hidden="true" />
        <main id="main" className="shell__main">
          <ErrorBoundary key={loc.pathname} label="esta página">
            <Outlet />
          </ErrorBoundary>
          <footer className="foot">
            <p>
              <strong>Semio Final</strong> · Material de estudio original para el final de Semiología (Fundación Barceló, La Rioja), elaborado a partir de Argente-Álvarez, Baré-Califano, el apunte y las clases del Dr. Ortega y el Instituto Merlín. No reemplaza la bibliografía. Los libros, las grabaciones, las transcripciones y los PDF de terceros no se publican acá.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}

function TopBar({ onMenu, menuOpen }: { onMenu: () => void; menuOpen: boolean }) {
  const nav = useNavigate();
  const f = useFinal();
  const [q, setQ] = useState('');
  const faltan = diasEntre(hoyISO(), FECHA_FINAL);
  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (q.trim()) nav(`/buscar?q=${encodeURIComponent(q.trim())}`);
  };
  return (
    <header className="topbar">
      <button className="topbar__menu" onClick={onMenu} aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen}>
        <Icon name={menuOpen ? 'close' : 'menu'} />
      </button>
      <Link to="/" className="brand" aria-label="Semio Final — inicio">
        <span className="brand__mark" aria-hidden="true">
          <Icon name="stethoscope" size={20} />
        </span>
        <span className="brand__text">
          <span className="brand__name">Semio Final</span>
          <span className="brand__sub">{faltan > 0 ? `Faltan ${faltan} días · 14/12` : 'Bolillero y oral'}</span>
        </span>
      </Link>
      <nav className="topnav" aria-label="Secciones">
        {NAV.slice(1).map((n) => (
          <NavLink key={n.to} to={n.to} className="topnav__link">
            <Icon name={n.icon} size={16} />
            <span>{n.label}</span>
          </NavLink>
        ))}
      </nav>
      <form className="search" role="search" onSubmit={submit}>
        <Icon name="search" size={17} />
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar en todo…" aria-label="Buscar contenido" />
      </form>
      <button className="topbar__menu" type="button" onClick={() => setTema(f.tema === 'oscuro' ? 'claro' : 'oscuro')} aria-label={f.tema === 'oscuro' ? 'Usar tema claro' : 'Usar tema oscuro'} title="Cambiar tema claro / oscuro">
        <Icon name={f.tema === 'oscuro' ? 'sparkle' : 'eye'} size={18} />
      </button>
    </header>
  );
}

function SistemaBloque({ s }: { s: (typeof SYSTEMS)[number] }) {
  const progress = useProgress();
  return (
    <div className={`sidebar__sys tone-${s.tone}`}>
      <NavLink to={`/sistema/${s.id}`} className="sidebar__sys-title">
        <span className="sidebar__sys-icon">
          <Icon name={s.icon} size={17} />
        </span>
        {s.title}
      </NavLink>
      <ul>
        {s.chapters.map((c) => {
          const avail = isAvailable(c);
          const pc = progress.chapters[c.id];
          return (
            <li key={c.id}>
              {c.link ? (
                <NavLink to={c.link} className="sidebar__ch">
                  <span className="dot" aria-hidden="true" />
                  <span>{c.title}</span>
                </NavLink>
              ) : avail ? (
                <NavLink to={`/capitulo/${c.id}`} className="sidebar__ch">
                  <span className={`dot ${pc?.completed ? 'dot--done' : pc ? 'dot--started' : ''}`} aria-hidden="true" />
                  <span>{c.title}</span>
                </NavLink>
              ) : (
                <span className="sidebar__ch is-soon" title="En preparación">
                  <span className="dot dot--soon" aria-hidden="true" />
                  <span>{c.title}</span>
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Sidebar() {
  const [verParcial, setVerParcial] = useState(false);
  return (
    <aside className="sidebar" aria-label="Programa">
      <InstalarApp />
      <nav className="sidebar__nav sidebar__nav--mobile">
        {NAV.map((n) => (
          <NavLink key={n.to} to={n.to} end={n.end} className="sidebar__link">
            <Icon name={n.icon} size={17} /> {n.label}
          </NavLink>
        ))}
      </nav>
      <div className="sidebar__sys tone-rose">
        <NavLink to="/bolillero" end className="sidebar__sys-title">
          <span className="sidebar__sys-icon">
            <Icon name="dice" size={17} />
          </span>
          Bolillero oficial
        </NavLink>
        <ul>
          {HERRAMIENTAS.map((h) => (
            <li key={h.to}>
              <NavLink to={h.to} className="sidebar__ch">
                <span className="dot" aria-hidden="true" />
                <span>{h.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebar__subtit" style={{ padding: '10px 14px 2px' }}>
        <NavLink to="/era/1">PRIMERA ERA</NavLink>
      </div>
      {SYSTEMS.filter((s) => s.era === 1).map((s) => (
        <SistemaBloque key={s.id} s={s} />
      ))}
      <div className="sidebar__subtit" style={{ padding: '10px 14px 2px' }}>
        <NavLink to="/era/2">SEGUNDA ERA</NavLink>
      </div>
      {SYSTEMS.filter((s) => s.era !== 1).map((s) => (
        <SistemaBloque key={s.id} s={s} />
      ))}
      <div className="sidebar__sys tone-gold">
        <button type="button" className="sidebar__sys-title" onClick={() => setVerParcial((v) => !v)} aria-expanded={verParcial} style={{ background: 'none', border: 0, width: '100%', textAlign: 'left', cursor: 'pointer' }}>
          <span className="sidebar__sys-icon">
            <Icon name="flag" size={17} />
          </span>
          Archivo: parcial del 16/11
        </button>
        {verParcial && (
          <ul>
            {PARCIAL.map((p) => (
              <li key={p.to}>
                <Link to={p.to} className="sidebar__ch">
                  <span className="dot" aria-hidden="true" />
                  <span>{p.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
}
