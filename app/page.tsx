export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Discord-Native Productivity
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          AI Meeting Notes from<br />
          <span className="text-[#58a6ff]">Discord Voice Channels</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your Discord bot, record any voice channel, and get structured meeting notes with action items and decisions — automatically.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started for $19/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required to connect. Cancel anytime.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "🎙️", title: "Auto-Record", desc: "Bot joins voice channels on demand or on schedule." },
            { icon: "📝", title: "Whisper Transcription", desc: "OpenAI Whisper converts audio to accurate text instantly." },
            { icon: "✅", title: "Action Items", desc: "AI extracts decisions and tasks so nothing gets lost." }
          ].map(f => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-sm text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-sm font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-extrabold text-white mb-1">$19</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited voice channel recordings",
              "AI-generated structured notes",
              "Action items & decision tracking",
              "Discord OAuth login",
              "Configure monitored channels",
              "Email delivery of summaries"
            ].map(item => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Start for $19/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the Discord bot connect to my server?",
              a: "After subscribing, you authenticate with Discord OAuth and invite the bot to your server with a single click. You then choose which voice channels to monitor."
            },
            {
              q: "Is my audio stored permanently?",
              a: "Audio is processed in real-time and deleted after transcription. Only the text transcript and generated notes are retained."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. Cancel from your billing portal at any time. Your bot access continues until the end of the billing period."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e]">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Discord Voice Note Taker. All rights reserved.
      </footer>
    </main>
  )
}
