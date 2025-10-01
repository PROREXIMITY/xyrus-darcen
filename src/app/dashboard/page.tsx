import React from 'react'
import Home from '@/app/components/Home'
import Navigation from '@/app/components/Navigation'
import Hero from '@/app/components/Hero'
import About from '@/app/components/About'
import Projects from '@/app/components/Projects'


function Dashboard() {
  return (
    <main className='min-h-screen'>
      <Navigation />
      <Hero />
      <About />
      <Projects />
    </main>
  )
}

export default Dashboard