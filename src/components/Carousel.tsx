import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, TrendingUp, Award } from 'lucide-react'
import { SETMORE_LINK } from '@/data/setmore'

interface Slide {
  title: string
  subtitle: string
  stats?: { value: string; label: string }[]
  bullets?: string[]
  cta: string
  icon: React.ComponentType<{ size?: number | string; className?: string }>
}

const slides: Slide[] = [
  {
    title: 'Transforma tu PyME con estrategias digitales probadas',
    subtitle: 'Más ventas, menos estrés, operación automatizada',
    cta: 'Comenzar diagnóstico gratis',
    icon: TrendingUp,
  },
  {
    title: 'Más de 150 proyectos exitosos en LATAM',
    subtitle: 'Empresas en Chile, México, Colombia y Argentina ya transformaron su operación',
    stats: [
      { value: '+150%', label: 'aumento en ventas' },
      { value: '70%', label: 'reducción de tareas' },
      { value: '30+', label: 'PyMEs acompañadas' },
    ],
    cta: 'Ver casos de éxito',
    icon: Award,
  },
  {
    title: 'Primera consultoría gratuita sin compromiso',
    subtitle: '30 minutos para identificar oportunidades de crecimiento en tu negocio',
    bullets: [
      'Auditoría digital completa',
      'Plan de acción personalizado',
      'Sin obligación de contratar',
    ],
    cta: 'Agendar mi consultoría gratis',
    icon: Calendar,
  },
]

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, 20000)
    return () => clearInterval(timer)
  }, [])


  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-full mb-6">
            {(() => {
              const Icon = slides[currentIndex].icon
              return <Icon size={32} className="text-brand-accent" />
            })()}
          </div>

          <h2 className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight tracking-tight mb-6">
            {slides[currentIndex].title}
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            {slides[currentIndex].subtitle}
          </p>

          {slides[currentIndex].stats && (
            <div className="flex flex-wrap items-center justify-center gap-8 mb-8">
              {slides[currentIndex].stats?.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-heading font-bold text-brand-accent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          )}

          {slides[currentIndex].bullets && (
            <ul className="text-left max-w-md mx-auto mb-8 space-y-2">
              {slides[currentIndex].bullets?.map((bullet, index) => (
                <li key={index} className="flex items-center gap-2 text-white/80">
                  <span className="text-brand-accent">→</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}

          <a
            href={SETMORE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-accent text-white font-semibold rounded-xl hover:bg-amber-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
          >
            <Calendar size={20} />
            {slides[currentIndex].cta}
          </a>
        </motion.div>
      </AnimatePresence>

      {/* Navigation dots */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex ? 'bg-brand-accent w-8' : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrow navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Slide anterior"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Slide siguiente"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  )
}
