import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/companies';

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const statuses = ['All', 'Completed', 'Ongoing', 'In Development'];

  const filtered = filter === 'All'
    ? projects
    : projects.filter(p => p.status === filter);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08)_0%,transparent_60%)]" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1.5 bg-electric-500/10 border border-electric-500/20 text-electric-400 text-xs font-[Orbitron] font-bold uppercase tracking-widest rounded-full mb-6">
            Projects
          </span>
          <h1 className="font-[Orbitron] text-4xl sm:text-5xl md:text-6xl font-black text-storm-100 mb-6">
            Our <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-storm-300 text-lg max-w-2xl mx-auto">
            Showcase of completed and ongoing projects across all RigStorm ventures. Click any project for a deep dive.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="px-4 pb-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-2 flex-wrap justify-center mb-8">
            {statuses.map(status => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === status
                    ? 'bg-electric-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                    : 'bg-storm-700/50 text-storm-400 hover:text-storm-200 border border-storm-600/30'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((project) => (
              <div
                key={project.id}
                className="group bg-storm-800/40 border border-storm-700/50 rounded-2xl overflow-hidden hover:border-electric-500/30 transition-all card-hover cursor-pointer"
                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-[Orbitron] text-lg font-bold text-storm-100 group-hover:text-electric-400 transition-colors mb-1">
                        {project.title}
                      </h3>
                      <Link
                        to={project.companyRoute}
                        onClick={(e) => e.stopPropagation()}
                        className="text-sm text-storm-400 hover:text-electric-400 transition-colors"
                      >
                        {project.company} →
                      </Link>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' :
                      project.status === 'Ongoing' ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' :
                      'bg-electric-500/10 text-electric-400 border border-electric-500/20'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <p className="text-storm-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="px-2.5 py-1 bg-storm-700/50 text-storm-300 text-xs rounded-full border border-storm-600/30">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="text-xs text-electric-400 hover:text-electric-300 transition-colors flex items-center gap-1">
                    {expandedProject === project.id ? '▲ Hide Details' : '▼ Deep Dive'}
                  </button>
                </div>

                {/* Deep Dive Section */}
                <div className={`overflow-hidden transition-all duration-500 ${
                  expandedProject === project.id ? 'max-h-96' : 'max-h-0'
                }`}>
                  <div className="px-6 pb-6 border-t border-storm-700/30 pt-4">
                    <div className="bg-storm-700/20 border border-storm-600/30 rounded-xl p-5">
                      <h4 className="font-[Orbitron] text-xs font-bold text-electric-400 uppercase tracking-widest mb-3">
                        🔍 Deep Dive
                      </h4>
                      <p className="text-storm-300 text-sm leading-relaxed">
                        {project.deepDive}
                      </p>
                      <Link
                        to={project.companyRoute}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-block mt-4 px-4 py-2 bg-electric-500/10 border border-electric-500/20 text-electric-400 text-xs rounded-lg hover:bg-electric-500/20 transition-all"
                      >
                        View at {project.company} →
                      </Link>
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
