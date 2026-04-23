import { useReducedMotion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import AboutSection from '@/components/AboutSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function App() {
  // Respeta la preferencia del sistema operativo para reducir movimiento
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className={shouldReduceMotion ? 'motion-safe:transition-none' : ''}>
      <Navigation />
      <main id="main-content">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
