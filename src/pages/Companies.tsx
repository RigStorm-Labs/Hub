import { Link } from 'react-router-dom';
import { companies } from '../data/companies';

export default function Companies() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08)_0%,transparent_60%)]" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1.5 bg-electric-500/10 border border-electric-500/20 text-electric-400 text-xs font-[Orbitron] font-bold uppercase tracking-widest rounded-full mb-6">
            Directory
          </span>
          <h1 className="font-[Orbitron] text-4xl sm:text-5xl md:text-6xl font-black text-storm-100 mb-6">
            Our <span className="text-gradient">Companies</span>
          </h1>
          <p className="text-storm-300 text-lg max-w-2xl mx-auto">
            Six specialized ventures under one roof. Each company is a leader in its domain, interconnected for maximum impact.
          </p>
        </div>
      </section>

      {/* Companies Grid */}
      <section className="py-12 px-4 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8">
            {companies.map((company) => (
              <div
                key={company.id}
                className="group bg-storm-800/40 border border-storm-700/50 rounded-2xl overflow-hidden hover:border-electric-500/30 transition-all duration-500"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Left: Company Info */}
                  <div className="flex-1 p-8 lg:p-10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${company.gradient} flex items-center justify-center text-3xl shadow-lg shrink-0`}>
                        {company.icon}
                      </div>
                      <div>
                        <h2 className="font-[Orbitron] text-2xl font-bold text-storm-100 group-hover:text-electric-400 transition-colors">
                          {company.name}
                        </h2>
                        <p className="text-electric-400 text-sm font-medium">{company.tagline}</p>
                      </div>
                    </div>

                    <p className="text-storm-300 leading-relaxed mb-6">
                      {company.about}
                    </p>

                    {/* Services preview */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {company.services.slice(0, 4).map((service, j) => (
                        <span key={j} className="px-3 py-1 bg-storm-700/50 border border-storm-600/30 rounded-full text-xs text-storm-300">
                          {service}
                        </span>
                      ))}
                      {company.services.length > 4 && (
                        <span className="px-3 py-1 bg-electric-500/10 border border-electric-500/20 rounded-full text-xs text-electric-400">
                          +{company.services.length - 4} more
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <Link
                        to={company.route}
                        className="px-5 py-2.5 bg-gradient-to-r from-electric-500 to-cyan-500 text-white text-sm font-semibold rounded-xl hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all hover:scale-105"
                      >
                        Explore {company.name.replace('RigStorm ', '')} →
                      </Link>
                      <a
                        href={company.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-storm-700/50 border border-storm-600 text-storm-300 text-sm font-medium rounded-xl hover:text-electric-400 hover:border-electric-500/30 transition-all"
                      >
                        Visit Website ↗
                      </a>
                    </div>
                  </div>

                  {/* Right: Portfolio Preview */}
                  <div className="lg:w-80 bg-storm-800/60 p-6 lg:p-8 border-t lg:border-t-0 lg:border-l border-storm-700/30">
                    <h3 className="font-[Orbitron] text-xs font-bold text-storm-400 uppercase tracking-widest mb-4">
                      Featured Work
                    </h3>
                    <div className="space-y-3">
                      {company.portfolio.slice(0, 3).map((item, j) => (
                        <div key={j} className="p-3 bg-storm-700/30 rounded-xl border border-storm-700/50 hover:border-storm-600 transition-all">
                          <h4 className="text-sm font-semibold text-storm-200 mb-1">{item.title}</h4>
                          <div className="flex gap-1.5 flex-wrap">
                            {item.tags.map((tag, k) => (
                              <span key={k} className="text-[10px] text-storm-500 bg-storm-800/50 px-1.5 py-0.5 rounded">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
