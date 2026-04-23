import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { TESTIMONIALS } from '@/data/testimonials'
import { staggerContainer, fadeInUp } from '@/utils/animations'
import TestimonialCard from './TestimonialCard'

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1))
  }

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0, transition: { duration: 0.3 } }),
  }

  return (
    <section
      id="testimonios"
      className="py-20 bg-gradient-to-br from-brand-dark to-brand-primary"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block text-brand-accent font-semibold text-sm uppercase tracking-wider mb-3"
          >
            Lo que dicen mis clientes
          </motion.span>
          <motion.h2
            id="testimonials-heading"
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4"
          >
            Resultados reales para PyMEs reales
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-white/70 max-w-2xl mx-auto text-lg">
            Más de 80 empresas han transformado su negocio con mi ayuda.
          </motion.p>
        </motion.div>

        {/* Carrusel móvil */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <TestimonialCard testimonial={TESTIMONIALS[currentIndex]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controles de navegación */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              type="button"
              onClick={handlePrev}
              className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Indicadores */}
            <div className="flex gap-2" role="tablist" aria-label="Testimonios">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  role="tab"
                  aria-selected={index === currentIndex}
                  aria-label={`Testimonio ${index + 1}`}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentIndex ? 'bg-brand-accent w-6' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Grilla desktop */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.slice(0, 3).map((testimonial) => (
            <motion.div key={testimonial.id} variants={fadeInUp}>
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
