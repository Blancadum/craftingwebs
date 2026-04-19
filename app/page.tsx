import Navbar from '@/src/components/layout/Navbar'
import Hero from '@/src/components/sections/Hero'
import Services from '@/src/components/sections/Services'
import Footer from '@/src/components/layout/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Footer />
    </main>
  )
}