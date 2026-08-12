import { useState, useRef } from 'react';
import { companies } from '../data/companies';

export default function Contact() {
  const [selectedCompany, setSelectedCompany] = useState('hub');
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const getRoutedLabel = () => {
    if (selectedCompany === 'hub') return 'RigStorm Hub (General)';
    return companies.find(c => c.id === selectedCompany)?.name || 'RigStorm Hub';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setSending(true);

    const formData = new FormData(formRef.current);
    formData.append('_routed_to', getRoutedLabel());

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
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08)_0%,transparent_60%)]" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1.5 bg-electric-500/10 border border-electric-500/20 text-electric-400 text-xs font-[Orbitron] font-bold uppercase tracking-widest rounded-full mb-6">
            Contact
          </span>
          <h1 className="font-[Orbitron] text-4xl sm:text-5xl md:text-6xl font-black text-storm-100 mb-6">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-storm-300 text-lg max-w-2xl mx-auto">
            Centralized contact hub with smart routing. Select a company and your inquiry will be directed to the right team.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 px-4 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-storm-800/40 border border-storm-700/50 rounded-2xl p-8">
                <h2 className="font-[Orbitron] text-xl font-bold text-storm-100 mb-6">Send a Message</h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="text-5xl mb-4">⚡</div>
                    <h3 className="font-[Orbitron] text-xl font-bold text-electric-400 mb-2">Message Sent!</h3>
                    <p className="text-storm-400">Your inquiry has been routed to <span className="text-storm-200 font-medium">{getRoutedLabel()}</span>.</p>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                    {/* Company Selector */}
                    <div>
                      <label className="block text-sm text-storm-400 mb-2 font-medium">Route to Company</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        <button
                          type="button"
                          onClick={() => setSelectedCompany('hub')}
                          className={`p-3 rounded-xl text-xs text-center transition-all border ${
                            selectedCompany === 'hub'
                              ? 'bg-electric-500/10 border-electric-500/30 text-electric-400'
                              : 'bg-storm-700/30 border-storm-600/30 text-storm-400 hover:border-storm-500'
                          }`}
                        >
                          🌐 General Hub
                        </button>
                        {companies.map(c => (
                          <button
                            key={c.id}
                            type="button"
                            onClick={() => setSelectedCompany(c.id)}
                            className={`p-3 rounded-xl text-xs text-center transition-all border ${
                              selectedCompany === c.id
                                ? 'bg-electric-500/10 border-electric-500/30 text-electric-400'
                                : 'bg-storm-700/30 border-storm-600/30 text-storm-400 hover:border-storm-500'
                            }`}
                          >
                            {c.icon} {c.name.replace('RigStorm ', '')}
                          </button>
                        ))}
                      </div>
                      {/* Hidden field so Formspree receives the routed company */}
                      <input type="hidden" name="Routed To" value={getRoutedLabel()} />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-storm-400 mb-1.5">Full Name</label>
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
                        rows={5}
                        name="message"
                        required
                        className="w-full bg-storm-700/50 border border-storm-600/50 rounded-xl px-4 py-3 text-storm-100 text-sm focus:outline-none focus:border-electric-500/50 transition-colors placeholder:text-storm-600 resize-none"
                        placeholder="Tell us about your project, goals, and timeline..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full py-3.5 bg-gradient-to-r from-electric-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all hover:scale-[1.02] text-sm disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {sending ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                          Sending...
                        </span>
                      ) : (
                        <>Send Message to {getRoutedLabel()}</>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-storm-800/40 border border-storm-700/50 rounded-2xl p-6">
                <h3 className="font-[Orbitron] text-sm font-bold text-storm-200 mb-4 uppercase tracking-wider">
                  Contact Info
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">📧</span>
                    <div>
                      <p className="text-sm font-medium text-storm-200">Gmail</p>
                      <a href="mailto:rigstormlabs@gmail.com" className="text-sm text-storm-400 hover:text-electric-400 transition-colors">rigstormlabs@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">🛟</span>
                    <div>
                      <p className="text-sm font-medium text-storm-200">Support</p>
                      <a href="mailto:support.rigstorm@gmail.com" className="text-sm text-storm-400 hover:text-electric-400 transition-colors">support.rigstorm@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">📞</span>
                    <div>
                      <p className="text-sm font-medium text-storm-200">Phone</p>
                      <a href="tel:9865323502" className="text-sm text-storm-400 hover:text-electric-400 transition-colors">9865323502</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">📍</span>
                    <div>
                      <p className="text-sm font-medium text-storm-200">Location</p>
                      <p className="text-sm text-storm-400">Thondi, Tamil Nadu</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-storm-800/40 border border-storm-700/50 rounded-2xl p-6">
                <h3 className="font-[Orbitron] text-sm font-bold text-storm-200 mb-4 uppercase tracking-wider">
                  Social & Business
                </h3>
                <div className="space-y-3">
                  {[
                    { icon: '📸', label: 'Instagram', handle: '@rigstorm_labs', url: 'https://instagram.com/rigstorm_labs' },
                    { icon: '💼', label: 'LinkedIn', handle: 'Abdul Shihab Ansari', url: 'https://linkedin.com/in/abdul-shihab-ansari' },
                    { icon: '💻', label: 'GitHub', handle: 'RigStorm-Labs', url: 'https://github.com/RigStorm-Labs' },
                    { icon: '🎬', label: 'YouTube', handle: '@RigStormLabs', url: 'https://youtube.com/@RigStormLabs' },
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-storm-700/30 transition-all"
                    >
                      <span className="text-lg">{social.icon}</span>
                      <div>
                        <p className="text-xs text-storm-500">{social.label}</p>
                        <p className="text-sm text-storm-300 hover:text-electric-400 transition-colors">{social.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-electric-500/10 to-cyan-500/10 border border-electric-500/20 rounded-2xl p-6">
                <h3 className="font-[Orbitron] text-sm font-bold text-electric-400 mb-2">Smart Routing</h3>
                <p className="text-storm-400 text-sm leading-relaxed">
                  Select a company above to auto-route your inquiry. Messages are tagged and forwarded to the relevant team for fastest response.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
