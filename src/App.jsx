import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Products from './components/Products'
import CTA from './components/CTA'

const demoProducts = [
  {
    id: 'training-guide',
    title: 'Training Starting Guide',
    subtitle: 'Digital Product',
    description: 'A concise, premium playbook to kickstart your training journey with confidence. Includes frameworks, checklists, and templates.',
    price: '$39',
    badge: 'Instant download'
  },
  {
    id: 'planner',
    title: 'Weekly Training Planner',
    subtitle: 'Template',
    description: 'Plan, track, and optimize your sessions with a minimalist, high-contrast planner designed for focus.',
    price: '$19',
    badge: 'Best companion'
  },
  {
    id: 'email-pack',
    title: 'Welcome Email Pack',
    subtitle: 'Copy Pack',
    description: 'Pre-written onboarding emails to delight new clients and set expectations from day one.',
    price: '$29',
    badge: 'Copy & paste'
  }
]

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Features />
      <Products items={demoProducts} />
      <CTA />
      <footer className="border-t border-white/5 bg-black/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Training Studio. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
