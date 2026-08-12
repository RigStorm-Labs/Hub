import { Link } from 'react-router-dom';
import { companies } from '../data/companies';

const socials = [
  { icon: '📸', label: 'Instagram', url: 'https://instagram.com/rigstorm_labs' },
  { icon: '💼', label: 'LinkedIn', url: 'https://linkedin.com/in/abdul-shihab-ansari' },
  { icon: '💻', label: 'GitHub', url: 'https://github.com/RigStorm-Labs' },
  { icon: '🎬', label: 'YouTube', url: 'https://youtube.com/@RigStormLabs' },
];

export default function Footer() {
  return (
    <footer className="bg-storm-900 border-t border-storm-700/50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-electric-500 to-cyan-400 flex items-center justify-center text-white font-bold text-sm font-[Orbitron]">
                RS
              </div>
              <span className="font-[Orbitron] font-bold text-lg text-storm-100">
                Rig<span className="text-electric-400">Storm</span> Hub
              </span>
            </div>
            <p className="text-storm-400 text-sm leading-relaxed mb-4">
              One hub. Infinite ventures. Centralizing innovation across hardware, web, branding, real estate, delivery, and marketing.
            </p>
            <div className="flex gap-2">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  className="w-9 h-9 rounded-lg bg-storm-700/50 flex items-center justify-center text-storm-400 hover:text-electric-400 hover:bg-storm-700 transition-all text-sm"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-[Orbitron] text-sm font-bold text-storm-200 mb-4 uppercase tracking-wider">Navigation</h4>
            <div className="space-y-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Hub' },
                { to: '/companies', label: 'Companies' },
                { to: '/services', label: 'Services' },
                { to: '/projects', label: 'Projects' },
                { to: '/contact', label: 'Contact' },
              ].map(link => (
                <Link key={link.to} to={link.to} className="block text-sm text-storm-400 hover:text-electric-400 transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Companies */}
          <div>
            <h4 className="font-[Orbitron] text-sm font-bold text-storm-200 mb-4 uppercase tracking-wider">Companies</h4>
            <div className="space-y-2">
              {companies.map(company => (
                <Link key={company.id} to={company.route} className="block text-sm text-storm-400 hover:text-electric-400 transition-colors">
                  {company.icon} {company.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-[Orbitron] text-sm font-bold text-storm-200 mb-4 uppercase tracking-wider">Get in Touch</h4>
            <div className="space-y-3 text-sm text-storm-400">
              <a href="mailto:rigstormlabs@gmail.com" className="flex items-center gap-2 hover:text-electric-400 transition-colors">
                📧 rigstormlabs@gmail.com
              </a>
              <a href="mailto:support.rigstorm@gmail.com" className="flex items-center gap-2 hover:text-electric-400 transition-colors">
                🛟 support.rigstorm@gmail.com
              </a>
              <a href="tel:9865323502" className="flex items-center gap-2 hover:text-electric-400 transition-colors">
                📞 9865323502
              </a>
              <p className="flex items-center gap-2">📍 Thondi, Tamil Nadu</p>
            </div>
            <Link
              to="/contact"
              className="inline-block mt-4 px-4 py-2 bg-electric-500/10 border border-electric-500/30 text-electric-400 rounded-lg text-sm hover:bg-electric-500/20 transition-all"
            >
              Contact Us →
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-storm-700/50 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-storm-500 text-sm">
            © 2025 RigStorm Hub. All rights reserved.
          </p>
          <p className="text-storm-600 text-xs font-[JetBrains_Mono]">
            Press <kbd className="px-1.5 py-0.5 bg-storm-700 rounded text-storm-400 text-[10px]">S</kbd> × 3 for Storm Mode ⚡
          </p>
        </div>
      </div>
    </footer>
  );
}
