import { useState, useEffect } from 'react'

import { motion, AnimatePresence, PanInfo } from 'framer-motion'

import { ChevronLeft, ChevronRight } from 'lucide-react'

import { TESTIMONIALS } from '@/data/testimonials'

import { staggerContainer, fadeInUp } from '@/utils/animations'

import TestimonialCard from './TestimonialCard'



export default function TestimonialsSection() {

  const [currentIndex, setCurrentIndex] = useState(0)

  const [direction, setDirection] = useState(0)

  const [isPaused, setIsPaused] = useState(false)



  useEffect(() => {

    if (!isPaused) {

      const timer = setInterval(() => {

        setDirection(1)

        setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1))

      }, 5000)

      return () => clearInterval(timer)

    }

  }, [isPaused])



  const handlePrev = () => {

    setDirection(-1)

    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))

  }



  const handleNext = () => {

    setDirection(1)

    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1))

  }

  const handleDragEnd = (_e: any, { offset, velocity }: PanInfo) => {
    const swipe = swipePower(offset.x, velocity.x)
    if (swipe < -swipeConfidenceThreshold) {
      handleNext()
    } else if (swipe > swipeConfidenceThreshold) {
      handlePrev()
    }
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }



  const slideVariants = {

    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),

    center: { x: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },

    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0, transition: { duration: 0.3 } }),

  }



  // Get 3 testimonials for desktop view (current + next 2)

  const getDesktopTestimonials = () => {

    const result = []

    for (let i = 0; i < 3; i++) {

      result.push(TESTIMONIALS[(currentIndex + i) % TESTIMONIALS.length])

    }

    return result

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



        {/* Carrusel - Mobile (1 testimonio) */}

        <div className="md:hidden" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>

          <div className="relative overflow-hidden">

            <AnimatePresence custom={direction} mode="wait">

              <motion.div

                key={currentIndex}

                custom={direction}

                variants={slideVariants}

                initial="enter"

                animate="center"

                exit="exit"

                drag="x"

                dragConstraints={{ left: 0, right: 0 }}

                dragElastic={1}

                onDragEnd={handleDragEnd}

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



        {/* Carrusel - Desktop (3 testimonios) */}

        <div 

          className="hidden md:block"

          onMouseEnter={() => setIsPaused(true)}

          onMouseLeave={() => setIsPaused(false)}

        >

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {getDesktopTestimonials().map((testimonial) => (

              <TestimonialCard key={`${testimonial.id}-${currentIndex}`} testimonial={testimonial} />

            ))}

          </div>



          {/* Controles de navegación desktop */}

          <div className="flex items-center justify-center gap-4 mt-8">

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

      </div>

    </section>

  )

}

