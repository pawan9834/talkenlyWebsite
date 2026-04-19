export default function Security() {
  const securityFeatures = [
    {
      title: "Biometric Protection",
      description: "Instantly secure your messages and calls with elite-level FaceID or Fingerprint authentication.",
      icon: "🔐",
    },
    {
      title: "Privacy Clusters",
      description: "Precisely define who sees your world. Organize contacts into specialized privacy groups for ultimate control.",
      icon: "👥",
    },
    {
      title: "Account Shield",
      description: "Multi-layered PIN verification ensures your account remains yours, even if your device is compromised.",
      icon: "🛡️",
    },
  ];

  return (
    <section id="security" className="px-6 pt-32 bg-midnight relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-primary font-bold tracking-widest uppercase mb-4 block">Unmatched Privacy</span>
          <h2 className="text-4xl md:text-7xl font-black mb-6 leading-tight tracking-tighter uppercase italic">
            SECURE. PRIVATE. <span className="text-primary not-italic">POWERFUL.</span>
          </h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
            We focus on giving you absolute control over your digital footprint. Every feature is designed with your autonomy in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="glass p-10 rounded-[3rem] text-center group hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 shadow-2xl shadow-black/20">
              <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-4xl mb-8 mx-auto group-hover:scale-110 transition-transform shadow-inner shadow-white/5">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">{feature.title}</h3>
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 relative px-8 py-12 glass rounded-[4rem] border-primary/10 overflow-hidden group">
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <h4 className="text-3xl font-black mb-2">ADVANCED AUDIT TRAIL</h4>
              <p className="text-slate-400 text-lg">Monitor every login attempt and device access in real-time.</p>
            </div>
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-midnight bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-500">
                  DEV{i}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
