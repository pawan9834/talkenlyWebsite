"use client";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-32 bg-midnight relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-primary font-bold tracking-widest uppercase mb-4 block underline decoration-primary/30 decoration-2 underline-offset-8">Get In Touch</span>
            <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight tracking-tighter uppercase italic">
              WE'RE ALL <br /><span className="text-primary not-italic">EARS.</span>
            </h2>
            <p className="text-slate-400 text-xl mb-12 max-w-xl leading-relaxed">
              Have a question about Talkenly? Our elite support team is ready to assist you 24/7. Whether it's technical help or business inquiries, we've got you covered.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-2xl group-hover:bg-primary/20 transition-all duration-300">📧</div>
                <div>
                  <h4 className="text-white font-bold text-lg">Email Us</h4>
                  <p className="text-slate-500">support@talkenly.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-2xl group-hover:bg-primary/20 transition-all duration-300">📍</div>
                <div>
                  <h4 className="text-white font-bold text-lg">Headquarters</h4>
                  <p className="text-slate-500">Elite Tech Hub, San Francisco, CA</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-2xl group-hover:bg-primary/20 transition-all duration-300">💬</div>
                <div>
                  <h4 className="text-white font-bold text-lg">Live Chat</h4>
                  <p className="text-slate-500">Available in-app for premium users.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-8 md:p-12 rounded-[3.5rem] border-white/5 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <form className="relative z-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 ml-2 uppercase tracking-widest">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-colors placeholder:text-slate-600" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 ml-2 uppercase tracking-widest">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-colors placeholder:text-slate-600" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-2 uppercase tracking-widest">Subject</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-colors appearance-none">
                   <option className="bg-midnight">General Inquiry</option>
                   <option className="bg-midnight">Technical Support</option>
                   <option className="bg-midnight">Business Partnership</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-2 uppercase tracking-widest">Your Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-colors placeholder:text-slate-600 resize-none" 
                />
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-primary text-white rounded-3xl font-black text-xl shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
