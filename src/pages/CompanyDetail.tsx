import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { companies } from '../data/companies';

interface Props {
  companyId: string;
}

const tabs = ['About', 'Services', 'Portfolio', 'Contact'] as const;
type Tab = typeof tabs[number];

export default function CompanyDetail({ companyId }: Props) {
  const company = companies.find(c => c.id === companyId);
  const [activeTab, setActiveTab] = useState<Tab>('About');
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  if (!company) return <div className="pt-32 text-center text-storm-400">Company not found.</div>;

  // Cross-link suggestions
  const crossLinks: Record<string, { text: string; companyId: string }[]> = {
    adstorm: [{ text: 'Creative assets by SkyED branding →', companyId: 'skyed' }],
    skyed: [{ text: 'Campaigns executed by AdStorm →', companyId: 'adstorm' }],
    landaura: [{ text: 'Marketing powered by AdStorm →', companyId: 'adstorm' }],
    zeyora: [{ text: 'UI/UX by SiteMarket →', companyId: 'sitemarket' }, { text: 'Branding by SkyED →', companyId: 'skyed' }],
    sitemarket: [{ text: 'Brand assets from SkyED →', companyId: 'skyed' }],
    labs: [{ text: 'Online store by SiteMarket →', companyId: 'sitemarket' }],
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setSending(true);

    const formData = new FormData(formRef.current);
    formData.append('Routed To', company.name);

    try {
      await fetch('https://formspree.io/f/mrpzkqlz', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      setSubmitted(true);
      formRef.current.reset();
      setTimeout(() => setSubmitted(false), 4000);
    } catch {
      alert('Something went wrong. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${company.gradient} opacity-5`} />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="max-w-5xl mx-auto relative z-10">
          <Link to="/companies" className="inline-flex items-center gap-2 text-storm-400 hover:text-electric-400 text-sm mb-8 transition-colors">
            ← Back to Companies
          </Link>
          <div className="flex items-start gap-6 mb-6">
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${company.gradient} flex items-center justify-center text-4xl shadow-[0_0_40px_rgba(59,130,246,0.2)] shrink-0`}>
              {company.icon}
            </div>
            <div>
              <h1 className="font-[Orbitron] text-4xl sm:text-5xl font-black text-storm-100 mb-2">
                {company.name}
              </h1>
              <p className="text-electric-400 text-lg font-medium mb-3">{company.tagline}</p>
              <a
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-storm-400 hover:text-electric-400 transition-colors font-[JetBrains_Mono]"
              >
                {company.url.replace('http://', '')} ↗
              </a>
            </div>
          </div>

          {/* Cross-links */}
          {crossLinks[companyId] && (
            <div className="flex flex-wrap gap-3 mb-8">
              {crossLinks[companyId].map((link, i) => {
                const linkedCompany = companies.find(c => c.id === link.companyId);
                return linkedCompany ? (
                  <Link
                    key={i}
                    to={linkedCompany.route}
                    className="px-3 py-1.5 bg-storm-700/30 border border-storm-600/30 rounded-full text-xs text-storm-400 hover:text-electric-400 hover:border-electric-500/30 transition-all"
                  >
                    {linkedCompany.icon} {link.text}
                  </Link>
                ) : null;
              })}
            </div>
          )}
        </div>
      </section>

      {/* Tabs */}
      <section className="border-b border-storm-700/50 sticky top-16 z-20 bg-storm-900/95 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-all duration-300 ${
                  activeTab === tab
                    ? 'text-electric-400 border-electric-400'
                    : 'text-storm-400 border-transparent hover:text-storm-200 hover:border-storm-500'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <div className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          {activeTab === 'About' && (
            <div className="animate-fade-in-up">
              <h2 className="font-[Orbitron] text-2xl font-bold text-storm-100 mb-6">
                About <span className="text-gradient">{company.name}</span>
              </h2>
              <div className="bg-storm-800/40 border border-storm-700/50 rounded-2xl p-8 mb-8">
                <p className="text-storm-300 leading-relaxed text-lg">{company.about}</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-storm-800/40 border border-storm-700/50 rounded-xl p-6 text-center">
                  <div className="text-3xl mb-3">🎯</div>
                  <h3 className="font-[Orbitron] text-sm font-bold text-storm-200 mb-2">Focus Area</h3>
                  <p className="text-storm-400 text-sm">{company.category}</p>
                </div>
                <div className="bg-storm-800/40 border border-storm-700/50 rounded-xl p-6 text-center">
                  <div className="text-3xl mb-3">📦</div>
                  <h3 className="font-[Orbitron] text-sm font-bold text-storm-200 mb-2">Services</h3>
                  <p className="text-storm-400 text-sm">{company.services.length} Specialized Services</p>
                </div>
                <div className="bg-storm-800/40 border border-storm-700/50 rounded-xl p-6 text-center">
                  <div className="text-3xl mb-3">🏆</div>
                  <h3 className="font-[Orbitron] text-sm font-bold text-storm-200 mb-2">Projects</h3>
                  <p className="text-storm-400 text-sm">{company.portfolio.length}+ Completed</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'Services' && (
            <div className="animate-fade-in-up">
              <h2 className="font-[Orbitron] text-2xl font-bold text-storm-100 mb-8">
                Our <span className="text-gradient">Services</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-5">
                {company.services.map((service, i) => (
                  <div key={i} className="group bg-storm-800/40 border border-storm-700/50 rounded-xl p-6 hover:border-electric-500/30 transition-all card-hover">
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${company.gradient} flex items-center justify-center text-white font-bold text-sm shrink-0 opacity-80`}>
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <div>
                        <h3 className="font-semibold text-storm-100 group-hover:text-electric-400 transition-colors mb-1">
                          {service}
                        </h3>
                        <p className="text-storm-500 text-sm">Professional {company.category.toLowerCase()} solution</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'Portfolio' && (
            <div className="animate-fade-in-up">
              <h2 className="font-[Orbitron] text-2xl font-bold text-storm-100 mb-8">
                Featured <span className="text-gradient">Portfolio</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {company.portfolio.map((item, i) => (
                  <div key={i} className="group bg-storm-800/40 border border-storm-700/50 rounded-2xl p-6 hover:border-electric-500/30 transition-all card-hover overflow-hidden relative">
                    {/* Top gradient accent */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${company.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />

                    <h3 className="font-[Orbitron] text-lg font-bold text-storm-100 group-hover:text-electric-400 transition-colors mb-3">
                      {item.title}
                    </h3>
                    <p className="text-storm-400 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, j) => (
                        <span key={j} className="px-2.5 py-1 bg-storm-700/50 text-storm-300 text-xs rounded-full border border-storm-600/30">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'Contact' && (
            <div className="animate-fade-in-up">
              <h2 className="font-[Orbitron] text-2xl font-bold text-storm-100 mb-8">
                Contact <span className="text-gradient">{company.name}</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-storm-800/40 border border-storm-700/50 rounded-2xl p-8">
                  <h3 className="font-[Orbitron] text-lg font-bold text-storm-100 mb-6">Send a Message</h3>

                  {submitted ? (
                    <div className="text-center py-10">
                      <div className="text-5xl mb-4">⚡</div>
                      <h4 className="font-[Orbitron] text-lg font-bold text-electric-400 mb-2">Message Sent!</h4>
                      <p className="text-storm-400 text-sm">Your inquiry has been sent to <span className="text-storm-200 font-medium">{company.name}</span>.</p>
                    </div>
                  ) : (
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                      <input type="hidden" name="Routed To" value={company.name} />
                      <div>
                        <label className="block text-sm text-storm-400 mb-1.5">Your Name</label>
                        <input
                          type="text"
                          name="name"
                          required
                          className="w-full bg-storm-700/50 border border-storm-600/50 rounded-xl px-4 py-3 text-storm-100 text-sm focus:outline-none focus:border-electric-500/50 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-storm-400 mb-1.5">Email</label>
                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full bg-storm-700/50 border border-storm-600/50 rounded-xl px-4 py-3 text-storm-100 text-sm focus:outline-none focus:border-electric-500/50 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-storm-400 mb-1.5">Subject</label>
                        <input
                          type="text"
                          name="subject"
                          required
                          className="w-full bg-storm-700/50 border border-storm-600/50 rounded-xl px-4 py-3 text-storm-100 text-sm focus:outline-none focus:border-electric-500/50 transition-colors placeholder:text-storm-600"
                          placeholder="Project Inquiry"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-storm-400 mb-1.5">Message</label>
                        <textarea
                          rows={4}
                          name="message"
                          required
                          className="w-full bg-storm-700/50 border border-storm-600/50 rounded-xl px-4 py-3 text-storm-100 text-sm focus:outline-none focus:border-electric-500/50 transition-colors placeholder:text-storm-600 resize-none"
                          placeholder="Tell us about your project..."
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={sending}
                        className={`w-full py-3 bg-gradient-to-r ${company.gradient} text-white font-semibold rounded-xl hover:shadow-lg transition-all hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100`}
                      >
                        {sending ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                            Sending...
                          </span>
                        ) : (
                          <>Send to {company.name}</>
                        )}
                      </button>
                    </form>
                  )}
                </div>
                <div className="space-y-6">
                  <div className="bg-storm-800/40 border border-storm-700/50 rounded-2xl p-8">
                    <h3 className="font-[Orbitron] text-lg font-bold text-storm-100 mb-4">Direct Contact</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm">
                        <span>📧</span>
                        <a href={`mailto:${company.contactEmail}`} className="text-storm-300 hover:text-electric-400 transition-colors">{company.contactEmail}</a>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <span>🛟</span>
                        <a href="mailto:support.rigstorm@gmail.com" className="text-storm-300 hover:text-electric-400 transition-colors">support.rigstorm@gmail.com</a>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <span>📞</span>
                        <a href="tel:9865323502" className="text-storm-300 hover:text-electric-400 transition-colors">9865323502</a>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <span>🌐</span>
                        <a href={company.url} target="_blank" rel="noopener noreferrer" className="text-storm-300 hover:text-electric-400 transition-colors">
                          {company.url.replace('http://', '')}
                        </a>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <span>📍</span>
                        <span className="text-storm-300">Thondi, Tamil Nadu</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-storm-800/40 border border-storm-700/50 rounded-2xl p-8">
                    <h3 className="font-[Orbitron] text-lg font-bold text-storm-100 mb-4">Quick Links</h3>
                    <div className="space-y-2">
                      <a href={company.url} target="_blank" rel="noopener noreferrer" className="block text-sm text-storm-400 hover:text-electric-400 transition-colors">
                        🔗 Visit {company.name} Website →
                      </a>
                      <Link to="/contact" className="block text-sm text-storm-400 hover:text-electric-400 transition-colors">
                        📋 Central Hub Contact Form →
                      </Link>
                      <Link to="/companies" className="block text-sm text-storm-400 hover:text-electric-400 transition-colors">
                        📁 View All Companies →
                      </Link>
                      <a href="https://instagram.com/rigstorm_labs" target="_blank" rel="noopener noreferrer" className="block text-sm text-storm-400 hover:text-electric-400 transition-colors">
                        📸 Instagram →
                      </a>
                      <a href="https://youtube.com/@RigStormLabs" target="_blank" rel="noopener noreferrer" className="block text-sm text-storm-400 hover:text-electric-400 transition-colors">
                        🎬 YouTube →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
