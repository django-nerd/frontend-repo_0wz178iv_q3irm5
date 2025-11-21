import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-blue-500 to-cyan-400 ring-1 ring-white/20 shadow-[0_0_30px_rgba(59,130,246,0.65)]" />
            <span className="text-white/90 font-semibold tracking-tight">Training Studio</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="text-white/70 hover:text-white transition">Features</a>
            <a href="#products" className="text-white/70 hover:text-white transition">Products</a>
            <a href="#cta" className="text-white/70 hover:text-white transition">Get Started</a>
          </nav>
          <button className="md:hidden inline-flex items-center justify-center p-2 text-white/70 hover:text-white">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  )
}
