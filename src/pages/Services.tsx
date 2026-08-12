import { useState } from 'react';
import { Link } from 'react-router-dom';
import { companies, serviceCategories } from '../data/companies';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const allServices = companies.flatMap(company =>
    company.services.map(service => ({
      service,
      company: company.name,
      companyId: company.id,
      route: company.route,
      icon: company.icon,
      category: company.category,
      gradient: company.gradient,
    }))
  );

  const filtered = activeCategory === 'All'
    ? allServices
    : allServices.filter(s => s.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08)_0%,transparent_60%)]" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1.5 bg-electric-500/10 border border-electric-500/20 text-electric-400 text-xs font-[Orbitron] font-bold uppercase tracking-widest rounded-full mb-6">
            Services
          </span>
          <h1 className="font-[Orbitron] text-4xl sm:text-5xl md:text-6xl font-black text-storm-100 mb-6">
            Centralized <span className="text-gradient">Services</span>
          </h1>
          <p className="text-storm-300 text-lg max-w-2xl mx-auto">
            Browse all services across every RigStorm company. Filter by category, then click through to the relevant company.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="px-4 pb-4 sticky top-16 z-20 bg-storm-900/95 backdrop-blur-xl border-b border-storm-700/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-2 overflow-x-auto py-4">
            <button
              onClick={() => setActiveCategory('All')}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeCategory === 'All'
                  ? 'bg-electric-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                  : 'bg-storm-700/50 text-storm-400 hover:text-storm-200 border border-storm-600/30'
              }`}
            >
              All Services ({allServices.length})
            </button>
            {serviceCategories.map(cat => {
              const count = allServices.filter(s => s.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    activeCategory === cat
                      ? 'bg-electric-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                      : 'bg-storm-700/50 text-storm-400 hover:text-storm-200 border border-storm-600/30'
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((item, i) => (
              <Link
                key={`${item.companyId}-${i}`}
                to={item.route}
                className="group bg-storm-800/40 border border-storm-700/50 rounded-xl p-5 hover:border-electric-500/30 transition-all card-hover relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />

                <div className="flex items-start gap-3 mb-3">
                  <span className="text-xl">{item.icon}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-storm-100 group-hover:text-electric-400 transition-colors text-sm">
                      {item.service}
                    </h3>
                    <p className="text-storm-500 text-xs mt-0.5">{item.company}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs px-2 py-0.5 bg-storm-700/50 text-storm-400 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-electric-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    View →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
