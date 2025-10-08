import Navigation from '@/app/components/Navigation'
import Hero from '@/app/components/Hero'
import About from '@/app/components/About'
import Projects from '@/app/components/Projects'
import Contact from '@/app/components/Contact'
import Footer from '@/app/components/Footer'
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation'
import { GradientBackground } from '@/app/ui/GradientBackground'

export default function Home() {
  return (
      <main className="min-h-screen bg-[#0b0b0f] overflow-hidden">
    <GradientBackground />
      {/* <div className="fixed inset-0 bg-[url('/assets/gradient-bg.jpg')] bg-cover bg-center bg-no-repeat opacity-50" /> */}
      {/* <div className="fixed inset-0 bg-[url('/assets/cosmic-symmetry-4000x4000-20464.jpg')] bg-cover bg-center bg-no-repeat opacity-40" /> */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}


