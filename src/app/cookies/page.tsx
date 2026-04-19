import Link from "next/link";
import Logo from "@/components/Branding";

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-midnight text-white selection:bg-primary/30">
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-600/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-24">
        <Link href="/" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-12 font-bold group">
          <span className="text-xl">←</span> Back to Home
        </Link>
        
        <div className="glass p-8 md:p-16 rounded-[3rem] border-white/5 shadow-2xl relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
          
          <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase italic">
            Cookie <span className="text-primary italic">Policy</span>
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none space-y-8 text-slate-400">
            <p className="text-xl text-white font-medium leading-relaxed">
              Talkenly uses minimal cookies to ensure your communication experience is fast, reliable, and secure.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">1. Essential Cookies</h2>
              <p>
                We use strictly necessary cookies to handle login sessions and authentication. 
                Without these, the secure messaging experience would not be possible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">2. Performance Cookies</h2>
              <p>
                These tiny snippets of data help us store your UI preferences (like Dark Mode settings) 
                so you don't have to reset them every time you return.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">3. No Third-Party Tracking</h2>
              <p>
                Unlike other platforms, we do NOT use third-party tracking cookies or marketing cookies. 
                Your digital footprint remains yours alone.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">4. Managing Cookies</h2>
              <p>
                You can choose to disable cookies in your browser settings, though some security and login 
                features may cease to function correctly.
              </p>
            </section>
          </div>
        </div>

        <div className="flex justify-center">
          <Logo />
        </div>
      </div>
    </div>
  );
}
