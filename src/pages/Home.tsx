import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { companies } from '../data/companies';
import ParticleField from '../components/ParticleField';

export default function Home() {
  const [revealed, setRevealed] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setRevealed(true), 300);
    const t2 = setTimeout(() => setShowSubtitle(true), 900);
    const t3 = setTimeout(() => setShowCards(true), 1400);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleField />

        {/* Storm gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-storm-900 via-storm-800 to-storm-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.06)_0%,transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(168,85,247,0.06)_0%,transparent_40%)]" />

        {/* Lightning flash overlay */}
        <div
          className="absolute inset-0 bg-white/5 pointer-events-none"
          style={{ animation: 'lightning 8s infinite' }}
        />

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid opacity-30" />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* Logo reveal */}
          <div className={`transition-all duration-1000 ${revealed ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-electric-500 to-cyan-400 mb-8 shadow-[0_0_60px_rgba(59,130,246,0.4)] animate-float">
              <span className="font-[Orbitron] text-3xl font-black text-white">RS</span>
            </div>
          </div>

          <h1 className={`font-[Orbitron] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 transition-all duration-1000 delay-200 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-storm-100">Rig</span>
            <span className="text-gradient">Storm</span>
            <span className="text-storm-300 block text-3xl sm:text-4xl md:text-5xl mt-2">Hub</span>
          </h1>

          <p className={`text-xl sm:text-2xl md:text-3xl text-storm-300 font-light mb-4 transition-all duration-800 ${showSubtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            One hub. <span className="text-electric-400 font-medium">Infinite</span> ventures.
          </p>

          <p className={`text-storm-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 transition-all duration-800 delay-200 ${showSubtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            Centralized Innovation Center powering hardware, web development, branding, real estate, delivery, and digital marketing — all under one storm.
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-800 ${showSubtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <Link
              to="/companies"
              className="px-8 py-4 bg-gradient-to-r from-electric-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 hover:scale-105"
            >
              Explore Companies →
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 bg-storm-700/50 border border-storm-600 text-storm-200 font-semibold rounded-xl hover:bg-storm-700 hover:border-storm-500 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-storm-500 animate-bounce">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Ecosystem Overview */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.05)_0%,transparent_50%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-electric-500/10 border border-electric-500/20 text-electric-400 text-xs font-[Orbitron] font-bold uppercase tracking-widest rounded-full mb-4">
              Ecosystem
            </span>
            <h2 className="font-[Orbitron] text-3xl sm:text-4xl md:text-5xl font-bold text-storm-100 mb-4">
              The RigStorm <span className="text-gradient">Ecosystem</span>
            </h2>
            <p className="text-storm-400 text-lg max-w-2xl mx-auto">
              Six specialized companies, one unified vision. From hardware to marketing, we've got every angle covered.
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 ${showCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {companies.map((company, i) => (
              <Link
                key={company.id}
                to={company.route}
                className="group card-hover relative bg-storm-800/50 border border-storm-700/50 rounded-2xl p-6 overflow-hidden"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Gradient top border */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${company.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${company.gradient} flex items-center justify-center text-2xl shadow-lg`}>
                    {company.icon}
                  </div>
                  <div>
                    <h3 className="font-[Orbitron] font-bold text-storm-100 group-hover:text-electric-400 transition-colors">
                      {company.name}
                    </h3>
                    <p className="text-sm text-storm-400">{company.tagline}</p>
                  </div>
                </div>

                <p className="text-storm-400 text-sm leading-relaxed mb-4">
                  {company.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className={`text-xs px-2.5 py-1 rounded-full bg-storm-700/50 text-storm-300`}>
                    {company.category}
                  </span>
                  <span className="text-electric-400 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 translate-x-2">
                    Explore →
                  </span>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-electric-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 bg-storm-800/30 border-y border-storm-700/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '6', label: 'Companies', suffix: '' },
              { value: '50', label: 'Services', suffix: '+' },
              { value: '100', label: 'Projects', suffix: '+' },
              { value: '24/7', label: 'Support', suffix: '' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-[Orbitron] text-4xl md:text-5xl font-black text-gradient mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-storm-400 text-sm uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.1)_0%,transparent_60%)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-[Orbitron] text-3xl sm:text-4xl font-bold text-storm-100 mb-6">
            Ready to <span className="text-gradient">Storm</span> the Future?
          </h2>
          <p className="text-storm-400 text-lg mb-8 max-w-2xl mx-auto">
            Whether you need a custom PC, a stunning website, a bold brand, or a powerful marketing campaign — RigStorm Hub has you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-electric-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 hover:scale-105"
            >
              Start a Project
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 bg-storm-700/50 border border-storm-600 text-storm-200 font-semibold rounded-xl hover:bg-storm-700 hover:border-storm-500 transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
