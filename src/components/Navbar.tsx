import { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StormModeContext } from '../App';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/companies', label: 'Companies' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { stormMode, toggleStormMode } = useContext(StormModeContext);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-storm-900/80 backdrop-blur-xl border-b border-storm-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-electric-500 to-cyan-400 flex items-center justify-center text-white font-bold text-sm font-[Orbitron] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-shadow duration-300">
              RS
            </div>
            <span className="font-[Orbitron] font-bold text-lg text-storm-100 hidden sm:block">
              Rig<span className="text-electric-400">Storm</span> Hub
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.to
                    ? 'text-electric-400 bg-electric-500/10'
                    : 'text-storm-300 hover:text-storm-100 hover:bg-storm-700/50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            {/* Storm Mode Toggle */}
            <button
              onClick={toggleStormMode}
              className={`ml-3 p-2 rounded-lg text-sm transition-all duration-300 ${
                stormMode
                  ? 'bg-electric-500/20 text-electric-400 shadow-[0_0_10px_rgba(59,130,246,0.3)]'
                  : 'text-storm-400 hover:text-storm-200 hover:bg-storm-700/50'
              }`}
              title="Toggle Storm Mode (or press S three times)"
            >
              ⚡
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-storm-300 hover:text-storm-100"
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${open ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-4 pb-4 space-y-1 bg-storm-900/95 backdrop-blur-xl border-b border-storm-700/50">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`block px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                location.pathname === link.to
                  ? 'text-electric-400 bg-electric-500/10'
                  : 'text-storm-300 hover:text-storm-100 hover:bg-storm-700/50'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => { toggleStormMode(); setOpen(false); }}
            className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-storm-300 hover:text-storm-100 hover:bg-storm-700/50 transition-all"
          >
            ⚡ {stormMode ? 'Disable' : 'Enable'} Storm Mode
          </button>
        </div>
      </div>
    </nav>
  );
}
