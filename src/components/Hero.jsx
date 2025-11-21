import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[78vh] w-full bg-black" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="pt-24 pb-16 md:pt-32 md:pb-24 grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                New release
              </div>
              <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight text-white">
                Training Starting Guide
              </h1>
              <p className="mt-4 text-lg text-white/70 max-w-xl">
                A premium blueprint to launch your training journey with clarity, confidence, and momentum. Minimal fluff. Maximum results.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#cta" className="inline-flex items-center rounded-md bg-white text-black px-5 py-3 font-medium shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:bg-white/90 transition">
                  Get the Guide
                </a>
                <a href="#products" className="inline-flex items-center rounded-md border border-white/10 px-5 py-3 font-medium text-white hover:border-white/30 transition">
                  Explore Products
                </a>
              </div>
            </div>
            <div className="md:col-span-5" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_30%,rgba(59,130,246,0.12),transparent)]" />
    </section>
  )
}
