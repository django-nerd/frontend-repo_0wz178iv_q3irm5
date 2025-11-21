export default function CTA() {
  return (
    <section id="cta" className="relative bg-black py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">Ready to start?</h2>
        <p className="mt-3 text-white/70">Get instant access and start implementing today.</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#" className="inline-flex items-center rounded-md bg-white text-black px-6 py-3 font-medium shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:bg-white/90 transition">Buy now</a>
          <a href="#" className="inline-flex items-center rounded-md border border-white/10 px-6 py-3 font-medium text-white hover:border-white/30 transition">Learn more</a>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_45%_at_50%_0%,rgba(59,130,246,0.08),transparent)]" />
    </section>
  )
}
