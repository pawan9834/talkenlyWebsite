import Link from "next/link";
import Logo from "@/components/Branding";

export default function TermsPage() {
  const sections = [
    {
      title: "1. Account Registration & Eligibility",
      points: [
        "Minimum Age: You must be at least 13 years old to create a Talkenly account.",
        "Accurate info: You are responsible for ensuring your phone number remains active.",
        "Single identity: Creating automated or fake identities is strictly prohibited.",
        "Geographic restrictions: You must comply with all local laws and export controls.",
        "Sanctioned regions: Talkenly may be unavailable in regions under international trade sanctions."
      ]
    },
    {
      title: "2. Security & Sovereignty",
      points: [
        "Encryption responsibility: You are solely responsible for managing your device's security.",
        "Lost access: We cannot restore your account if you lose access to your primary phone number.",
        "Credential theft: You must notify us immediately if you suspect account compromise.",
        "Device linking: You may only link authorized devices to your encrypted session.",
        "Automated access: Scraping or automated account creation is a violation of these terms.",
        "Key rotation: We reserve the right to force security key rotation for system integrity."
      ]
    },
    {
      title: "3. Prohibited Conduct & Media",
      points: [
        "Illegal acts: Using Talkenly for any transaction involving illegal goods is banned.",
        "Harassment: Repeated unwanted contact or stalking is cause for immediate termination.",
        "Hate speech: Distributing content that promotes violence or systemic discrimination.",
        "Bot networks: Deploying bots to mimic human interaction or spread misinformation.",
        "Reverse engineering: Attempting to decompile or copy the encrypted protocol.",
        "IP Infringement: Sharing copyrighted material without the owner's explicit permission.",
        "Malware: Distributing malicious code or links via the messaging platform.",
        "Phishing: Attempting to solicit credentials or financial info via messaging.",
        "System stress: Intentional DDoS attacks or stress-testing our infrastructure.",
        "False identity: Impersonating public figures or our official support team."
      ]
    },
    {
      title: "4. Zero-Spam Policy",
      points: [
        "No mass-marketing: Using Talkenly for bulk promotional messaging is strictly forbidden.",
        "Contact abuse: Repeatedly adding users who have not consented to contact.",
        "Status spam: Flooding the status network with repetitive or automated commercial content.",
        "API misuse: Using unofficial clients to send large volumes of automated messages.",
        "Reporting system: High rates of user blocks/reports will trigger automated account suspension."
      ]
    },
    {
      title: "5. Intellectual Property Rights",
      points: [
        "Branding: Talkenly is a registered trademark; you may not use it without permission.",
        "Your content: You retain full ownership of the media and messages you share.",
        "License to us: You grant us a minimal, encrypted license solely to deliver your content.",
        "Protocol rights: Our proprietary end-to-end encryption architecture is our IP.",
        "Feedback: Any suggestions you provide become our property for service improvement.",
        "Reverse engineering: Strictly prohibited in both binary and obfuscated forms."
      ]
    },
    {
      title: "6. Premium Services & Billing",
      points: [
        "Subscription terms: Premium features are billed on a recurring monthly/yearly basis.",
        "Non-refundable: All payments for digital status features are final and non-refundable.",
        "Price changes: We reserve the right to adjust pricing with 30 days' notice.",
        "Tax compliance: You are responsible for all applicable local taxes on subscriptions.",
        "Tiered access: Different feature sets may be available depending on your region.",
        "Billing disputes: Must be raised within 60 days of the transaction date."
      ]
    },
    {
      title: "7. Availability & Limitations",
      points: [
        "Uptime: We strive for 99.9% uptime but do not guarantee it.",
        "Emergency maintenance: We may pause services for urgent security patching.",
        "Feature removal: We reserve the right to deprecate legacy features as we evolve.",
        "Internet quality: Service quality depends heavily on your local network provider.",
        "Encrypted delays: High-security protocols may occasionally cause decryption latency."
      ]
    },
    {
      title: "8. Limitation of Liability",
      points: [
        "As-Is Basis: Talkenly is provided 'as-is' without any implied warrant of fitness.",
        "Data loss: We are not liable for content loss caused by device hardware failure.",
        "Indirect damages: We are not liable for lost profits or consequential damages.",
        "Encryption flaws: We are not liable for zero-day vulnerabilities in third-party libraries.",
        "User conduct: We are not responsible for the actions or content of other members."
      ]
    },
    {
      title: "9. Indemnification",
      points: [
        "Legal defense: You agree to defend us against claims arising from your breach of terms.",
        "Violation costs: You will cover costs associated with legal actions caused by your abuse.",
        "Third-party claims: You are liable for any IP infringement claims born from your uploads.",
        "Loss mitigation: You agree to work with us to mitigate any damage caused by your bot usage."
      ]
    },
    {
      title: "10. Disputes & Termination",
      points: [
        "Account closure: You may terminate your account at any time via the app.",
        "Our termination: We may ban accounts instantly for high-severity safety violations.",
        "Governing law: These terms are governed by the laws of our primary jurisdiction.",
        "Arbitration: All disputes will be resolved via binding arbitration, not in court.",
        "Class action waiver: You agree to resolve disputes on an individual basis only.",
        "Survival: Sections on liability, IP, and indemnity survive account termination."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-midnight text-white selection:bg-primary/30 pb-20">
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-600/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-6 py-24">
        <Link href="/" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-12 font-bold group">
          <span className="text-xl">←</span> Back to Home
        </Link>
        
        <div className="glass p-8 md:p-16 rounded-[4rem] border-white/5 shadow-2xl relative overflow-hidden mb-16">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
          
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase italic leading-none">
            Terms of <span className="text-primary italic">Service</span>
          </h1>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl leading-relaxed italic border-l-4 border-primary pl-6">
            The rules of engagement for the Talkenly Elite. 
            Below are 58 detailed clauses governing your use of our premium network.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-slate-400">
            {sections.map((section, idx) => (
              <div key={idx} className="space-y-6">
                <h2 className="text-2xl font-black text-white uppercase tracking-tighter border-b border-white/10 pb-4 flex items-center gap-3">
                  <span className="text-primary opacity-50">§</span> {section.title}
                </h2>
                <ul className="space-y-4">
                  {section.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex gap-4 group">
                      <span className="text-primary font-bold text-sm shrink-0 mt-1.5 opacity-40 group-hover:opacity-100 transition-opacity">→</span>
                      <span className="text-base leading-relaxed group-hover:text-white transition-colors">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-8">
          <Logo />
          <p className="text-slate-500 text-sm font-bold uppercase tracking-[0.2em]">End of Comprehensive Terms</p>
        </div>
      </div>
    </div>
  );
}
