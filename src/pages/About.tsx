import { Link } from 'react-router-dom';
import { companies, timelineEvents } from '../data/companies';

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08)_0%,transparent_60%)]" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1.5 bg-electric-500/10 border border-electric-500/20 text-electric-400 text-xs font-[Orbitron] font-bold uppercase tracking-widest rounded-full mb-6">
            About Hub
          </span>
          <h1 className="font-[Orbitron] text-4xl sm:text-5xl md:text-6xl font-black text-storm-100 mb-6">
            Centralizing <span className="text-gradient">Innovation</span>
          </h1>
          <p className="text-storm-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            RigStorm Hub is the centralized command center for all RigStorm ventures. We unify hardware engineering, web development, branding, real estate, delivery logistics, and digital marketing under one powerful ecosystem.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4 bg-storm-800/30 border-y border-storm-700/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-[Orbitron] text-3xl font-bold text-storm-100 mb-6">
                Our <span className="text-gradient">Mission</span>
              </h2>
              <p className="text-storm-300 leading-relaxed mb-6">
                To centralize innovation across every digital and physical frontier. RigStorm Hub brings together six specialized companies, each a leader in their domain, creating synergies that multiply impact and accelerate growth.
              </p>
              <p className="text-storm-400 leading-relaxed mb-6">
                We believe that the future belongs to ecosystems — interconnected ventures that share resources, expertise, and vision. Every project benefits from the combined power of our entire network.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '⚡', label: 'Speed First' },
                  { icon: '🎯', label: 'Precision Driven' },
                  { icon: '🔗', label: 'Interconnected' },
                  { icon: '🚀', label: 'Future Ready' },
                ].map((value, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-storm-700/30 rounded-xl border border-storm-700/50">
                    <span className="text-xl">{value.icon}</span>
                    <span className="text-sm text-storm-200 font-medium">{value.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-storm-800/80 border border-storm-700/50 rounded-2xl p-8">
                <div className="text-center mb-8">
                  <div className="inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br from-electric-500 to-cyan-400 items-center justify-center mb-4 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                    <span className="font-[Orbitron] text-xl font-black text-white">RS</span>
                  </div>
                  <h3 className="font-[Orbitron] text-lg font-bold text-storm-100">RigStorm Hub</h3>
                  <p className="text-storm-400 text-sm">Central Command</p>
                </div>
                {/* Company web diagram */}
                <div className="grid grid-cols-3 gap-3">
                  {companies.map((c) => (
                    <Link
                      key={c.id}
                      to={c.route}
                      className={`flex flex-col items-center p-3 rounded-xl bg-storm-700/30 border border-storm-700/50 hover:border-electric-500/30 transition-all group`}
                    >
                      <span className="text-xl mb-1">{c.icon}</span>
                      <span className="text-[10px] text-storm-400 group-hover:text-electric-400 transition-colors text-center leading-tight">
                        {c.name.replace('RigStorm ', '')}
                      </span>
                    </Link>
                  ))}
                </div>
                {/* Connecting lines (visual) */}
                <div className="flex justify-center mt-4">
                  <div className="h-px w-3/4 bg-gradient-to-r from-transparent via-electric-500/30 to-transparent" />
                </div>
                <p className="text-center text-[10px] text-storm-500 mt-2 font-[JetBrains_Mono]">
                  interconnected · synergized · unified
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-electric-500/10 border border-electric-500/20 text-electric-400 text-xs font-[Orbitron] font-bold uppercase tracking-widest rounded-full mb-4">
              Our Journey
            </span>
            <h2 className="font-[Orbitron] text-3xl sm:text-4xl font-bold text-storm-100 mb-4">
              Growth <span className="text-gradient">Timeline</span>
            </h2>
            <p className="text-storm-400 max-w-xl mx-auto">
              From a single garage workshop to a multi-company innovation hub — trace our path of relentless growth.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-electric-500/50 via-cyan-400/30 to-electric-500/50" />

            <div className="space-y-12">
              {timelineEvents.map((event, i) => (
                <div key={i} className={`relative flex items-start gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-electric-500 border-4 border-storm-900 shadow-[0_0_10px_rgba(59,130,246,0.5)] z-10" />

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-storm-800/50 border border-storm-700/50 rounded-xl p-5 hover:border-electric-500/30 transition-all">
                      <span className="font-[Orbitron] text-electric-400 text-sm font-bold">{event.year}</span>
                      <h3 className="font-[Orbitron] text-lg font-bold text-storm-100 mt-1 mb-2">{event.title}</h3>
                      <p className="text-storm-400 text-sm">{event.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-storm-800/30 border-y border-storm-700/30">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-[Orbitron] text-3xl font-bold text-storm-100 mb-12">
            What Drives <span className="text-gradient">Us</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🔮', title: 'Innovation First', desc: 'Every venture pushes boundaries. We don\'t follow trends — we create them.' },
              { icon: '🤝', title: 'Ecosystem Synergy', desc: 'Our companies work together, creating multiplied value for every client.' },
              { icon: '💎', title: 'Premium Quality', desc: 'From code to campaigns, every deliverable meets the highest standards.' },
            ].map((val, i) => (
              <div key={i} className="bg-storm-800/50 border border-storm-700/50 rounded-2xl p-8 card-hover">
                <div className="text-4xl mb-4">{val.icon}</div>
                <h3 className="font-[Orbitron] text-lg font-bold text-storm-100 mb-3">{val.title}</h3>
                <p className="text-storm-400 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
