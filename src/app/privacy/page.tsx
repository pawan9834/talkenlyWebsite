import Link from "next/link";
import Logo from "@/components/Branding";

export default function PrivacyPage() {
  const sections = [
    {
      title: "1. Information Collection",
      points: [
        "Primary identity: We use your phone number as a unique identifier for account creation.",
        "Profile metadata: You may optionally provide a display name, profile picture, and bio.",
        "Device diagnostics: We collect basic hardware info (model, OS version) for bug fixing.",
        "Connection status: We track 'online' status only to facilitate real-time messaging.",
        "IP Address: Temporarily processed for regional routing and security (DDoS prevention)."
      ]
    },
    {
      title: "2. Messaging & End-to-End Encryption",
      points: [
        "Unreadable content: All message bodies are encrypted before leaving your device.",
        "Zero-storage: Encrypted messages are deleted from our servers immediately after delivery.",
        "Key management: Encryption keys are stored solely on your local device.",
        "Message metadata: Timestamps are kept temporarily for delivery status (Sent/Delivered).",
        "Backup data: If enabled, cloud backups use your own password-derived encryption keys.",
        "Direct delivery: We utilize Peer-to-Peer protocols whenever possible to minimize server transit."
      ]
    },
    {
      title: "3. Audio & Video Communication",
      points: [
        "Signal processing: Call signaling is encrypted to prevent intercept of call metadata.",
        "Direct media: Call audio and video streams use P2P SRTP encryption by default.",
        "Relay nodes: If P2P fails, encrypted streams pass through relay nodes without decryption.",
        "No recording: We never record, process, or listen to any audio or video content.",
        "Call logs: Basic logs (duration, success rate) are kept for 30 days for quality metrics."
      ]
    },
    {
      title: "4. Status Sharing & Media",
      points: [
        "Status visibility: Updates are only visible to your chosen contacts or groups.",
        "Automated expiry: Status updates are permanently purged after 24 hours.",
        "Media compression: Images are optimized locally before encrypted transmission.",
        "Storage location: Temporary status media is held in encrypted cloud buffers.",
        "Cache control: You can purge local media caches at any time from app settings.",
        "Preview data: Link previews are generated client-side to protect your browsing intent."
      ]
    },
    {
      title: "5. Contact Synchronization",
      points: [
        "Local scanning: Contact lists are scanned locally on your device.",
        "Hashing: Phone numbers are hashed (SHA-256) before uploading for matching.",
        "No storage: We do not store unhashed contact names or details on our servers.",
        "Privacy-first discovery: You can disable contact sync and add users via direct ID.",
        "Invite logic: Invites to non-users are handled via your device's native SMS app."
      ]
    },
    {
      title: "6. Cookies & Technical Infrastructure",
      points: [
        "Essential only: We use zero tracking cookies for marketing or advertising.",
        "Session tokens: Secure tokens are stored locally to keep you logged in.",
        "Theme settings: Local storage preserves your 'Midnight' or custom theme UI.",
        "CDN assets: Images are served via secure, audited Content Delivery Networks.",
        "Rate limiting: Technical identifiers prevent automated scraping of your profile info."
      ]
    },
    {
      title: "7. Data Retention & Purging",
      points: [
        "Identity data: Kept until you request account deletion from within the app.",
        "Inactive accounts: Accounts with zero activity for 12 months may be purged.",
        "Log lifecycle: Technical logs are overwritten every 14-30 days.",
        "Legal holds: Only metadata (not content) is kept longer if required by valid court order.",
        "De-identification: After deletion, logs are completely randomized to prevent re-identification."
      ]
    },
    {
      title: "8. User Rights & Controls",
      points: [
        "Right to access: Download a machine-readable copy of your profile data instantly.",
        "Right to correct: Update your profile name and media at any time.",
        "Right to erase: Fully delete your account and all associated keys with one click.",
        "Right to restrict: Mute or block individual users to stop data processing for them.",
        "Data portability: Export your contact list (if synced) in industry-standard formats.",
        "Opt-out: Disable read receipts and 'last seen' markers whenever you choose."
      ]
    },
    {
      title: "9. Security Infrastructure",
      points: [
        "Server hardening: Our nodes run in audited, high-security Tier-4 data centers.",
        "Vulnerability bounty: We run proactive programs to find and patch security gaps.",
        "SOC2 Compliance: Our internal processes follow strict security auditing standards.",
        "Personnel access: No employee can access unencrypted user communication data.",
        "Physical security: Biometric access controls at all physical server locations."
      ]
    },
    {
      title: "10. Global Legal Compliance",
      points: [
        "GDPR alignment: Full transparency for all European Union citizens.",
        "CCPA/CPRA: Comprehensive disclosure of data handling for California residents.",
        "COPPA: Talkenly is strictly for users aged 13 and above.",
        "International Law: We only comply with valid, international legal requests.",
        "Transparency reports: Periodic audits of our privacy claims are available to members."
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
            Privacy <span className="text-primary italic">Policy</span>
          </h1>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl leading-relaxed italic border-l-4 border-primary pl-6">
            Everything you need to know about how we protect your digital sovereignty. 
            Below are 53 detailed points defining our commitment to your privacy.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-slate-400">
            {sections.map((section, idx) => (
              <div key={idx} className="space-y-6">
                <h2 className="text-2xl font-black text-white uppercase tracking-tighter border-b border-white/10 pb-4 flex items-center gap-3">
                  <span className="text-primary opacity-50">#</span> {section.title}
                </h2>
                <ul className="space-y-4">
                  {section.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex gap-4 group">
                      <span className="text-primary font-bold text-sm shrink-0 mt-1.5 opacity-40 group-hover:opacity-100 transition-opacity">•</span>
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
          <p className="text-slate-500 text-sm font-bold uppercase tracking-[0.2em]">End of Comprehensive Policy</p>
        </div>
      </div>
    </div>
  );
}
