import Link from "next/link";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import Logo from "@/components/Branding";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-midnight text-white selection:bg-primary/30 overflow-hidden">
      {/* Abstract Background Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-600/10 blur-[100px] rounded-full" />
      </div>

      <main className="relative z-10">
        {/* --- Hero Section --- */}
        <section className="relative px-6 pt-20 pb-32 md:pt-32 md:pb-48 max-w-7xl mx-auto text-center overflow-hidden">
          <div className="flex flex-col items-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-primary uppercase border border-primary/20 rounded-full bg-primary/5">
              Premium Communication Suite
            </span>
            <div className="space-y-2">
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9]">
                TALK , SHARE ,
              </h1>
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9]">
                <span className="text-primary italic">CONNECT.</span>
              </h1>
            </div>
            <p className="text-lg md:text-2xl text-slate-400 mt-12 mb-12 max-w-2xl leading-relaxed">
              Experience the next generation of communication. Zero-compromise encryption, high-fidelity status sharing, and crystal clear voice & video calls.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <Link
                href="#download"
                className="px-10 py-5 bg-primary text-white rounded-2xl font-bold text-xl shadow-2xl shadow-primary/30 transition-transform hover:scale-105 active:scale-95 text-center"
              >
                Start Chatting
              </Link>
              <Link
                href="#features"
                className="px-10 py-5 glass text-white rounded-2xl font-bold text-xl transition-all hover:bg-white/10 text-center"
              >
                Explore Features
              </Link>
            </div>
          </div>
        </section>

        {/* --- Features Section --- */}
        <Features />

        {/* --- Showcase Section --- */}
        <section id="about" className="px-6 pt-32 max-w-7xl mx-auto overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight uppercase tracking-tighter">
                UNMATCHED <br /><span className="text-primary italic">EXPERIENCE.</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 glass rounded-full flex items-center justify-center text-primary font-bold group-hover:bg-primary/20 transition-colors">1</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">High-Def Communication</h4>
                    <p className="text-slate-400">Crystal clear voice and 4K video calls regardless of your location.</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 glass rounded-full flex items-center justify-center text-primary font-bold group-hover:bg-primary/20 transition-colors">2</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Instant Global Sync</h4>
                    <p className="text-slate-400">Your messages and status updates reach the world in milliseconds.</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 glass rounded-full flex items-center justify-center text-primary font-bold group-hover:bg-primary/20 transition-colors">3</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Total Control</h4>
                    <p className="text-slate-400">Sophisticated privacy tools that put you in charge of your digital life.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full scale-75 group-hover:scale-100 transition-transform duration-1000" />
              <div className="relative glass border-white/10 rounded-[3rem] p-6 aspect-[9/16] max-w-[340px] mx-auto shadow-2xl transform hover:rotate-3 transition-transform duration-500">
                <div className="bg-midnight/50 rounded-[2.5rem] h-full overflow-hidden flex flex-col items-center justify-center text-center p-8 border border-white/5 relative">
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-white/10 rounded-full" />
                  <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mb-8 shadow-2xl shadow-primary/20 group-hover:scale-110 transition-transform">
                    <span className="text-5xl">📱</span>
                  </div>
                  <h5 className="text-white text-xl font-bold mb-2">Elite UI</h5>
                  <p className="text-slate-400 text-sm italic">Minimalist. Fast. Royal.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Contact Section --- */}
        <Contact />

        {/* --- Download / CTA Section --- */}
        <section id="download" className="px-6 py-40 relative overflow-hidden">
          <div className="absolute inset-0 bg-midnight" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
          
          <div className="max-w-6xl mx-auto relative z-10 text-center">
            <h2 className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter uppercase italic">
              GET <span className="text-primary">TALKENLY.</span>
            </h2>
            <p className="text-slate-400 text-xl md:text-2xl mb-16 max-w-2xl mx-auto leading-relaxed">
              Available on all your devices. End-to-end encrypted communication, zero compromises.
            </p>

            <div className="flex flex-col items-center gap-12">
              {/* Main Store Buttons */}
              <div className="flex flex-wrap justify-center gap-6">
                <Link href="#" className="flex items-center gap-4 px-8 py-4 glass border-white/10 rounded-2xl hover:bg-white/10 transition-all hover:scale-105 group">
                  <div className="text-3xl grayscale group-hover:grayscale-0 transition-all">🍎</div>
                  <div className="text-left">
                    <div className="text-[10px] uppercase font-bold text-slate-500 leading-none">Download on the</div>
                    <div className="text-xl font-bold text-white leading-tight">App Store</div>
                  </div>
                </Link>

                <Link href="#" className="flex items-center gap-4 px-8 py-4 glass border-white/10 rounded-2xl hover:bg-white/10 transition-all hover:scale-105 group">
                  <div className="text-3xl grayscale group-hover:grayscale-0 transition-all">🤖</div>
                  <div className="text-left">
                    <div className="text-[10px] uppercase font-bold text-slate-500 leading-none">Get it on</div>
                    <div className="text-xl font-bold text-white leading-tight">Google Play</div>
                  </div>
                </Link>
              </div>

              {/* Secondary Options */}
              <div className="flex flex-wrap justify-center gap-10">
                <Link href="#" className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-8 h-8 rounded-lg glass flex items-center justify-center text-xs group-hover:bg-primary/20 transition-all">💻</span>
                  <span className="font-bold border-b border-white/10 group-hover:border-primary transition-all">Windows / macOS</span>
                </Link>
                <Link href="#" className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-8 h-8 rounded-lg glass flex items-center justify-center text-xs group-hover:bg-primary/20 transition-all">🌐</span>
                  <span className="font-bold border-b border-white/10 group-hover:border-primary transition-all">Talkenly for Web</span>
                </Link>
                <Link href="#" className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-8 h-8 rounded-lg glass flex items-center justify-center text-xs group-hover:bg-primary/20 transition-all">📦</span>
                  <span className="font-bold border-b border-white/10 group-hover:border-primary transition-all">Direct APK</span>
                </Link>
              </div>
            </div>

            {/* QR Code Teaser */}
            <div className="mt-24 pt-20 border-t border-white/5 flex flex-col items-center">
              <div className="w-48 h-48 p-4 glass rounded-3xl border-primary/20 mb-6 group relative">
                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-full h-full bg-white/5 rounded-2xl flex items-center justify-center relative z-10 overflow-hidden">
                  {/* Decorative QR Pattern */}
                  <div className="grid grid-cols-4 gap-2 opacity-20">
                    <div className="w-4 h-4 rounded-sm bg-primary" />
                    <div className="w-4 h-4 rounded-sm bg-white" />
                    <div className="w-4 h-4 rounded-sm bg-white" />
                    <div className="w-4 h-4 rounded-sm bg-primary" />
                    <div className="w-4 h-4 rounded-sm bg-white" />
                    <div className="w-4 h-4 rounded-sm bg-primary" />
                    <div className="w-4 h-4 rounded-sm bg-primary" />
                    <div className="w-4 h-4 rounded-sm bg-white" />
                    <div className="w-4 h-4 rounded-sm bg-white" />
                    <div className="w-4 h-4 rounded-sm bg-primary" />
                    <div className="w-4 h-4 rounded-sm bg-primary" />
                    <div className="w-4 h-4 rounded-sm bg-white" />
                    <div className="w-4 h-4 rounded-sm bg-primary" />
                    <div className="w-4 h-4 rounded-sm bg-white" />
                    <div className="w-4 h-4 rounded-sm bg-white" />
                    <div className="w-4 h-4 rounded-sm bg-primary" />
                  </div>
                </div>
              </div>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Scan to Download on Mobile</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-6 py-12 border-t border-white/5 text-center text-slate-500 font-medium relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <Logo />
          <p className="text-sm">© 2026 Talkenly App Inc. Designed for the Elite.</p>
          <div className="flex gap-8 text-sm">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
            <Link href="/cookies" className="hover:text-primary transition-colors">Cookies</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
