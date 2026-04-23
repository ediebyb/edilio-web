import { motion } from 'framer-motion'
import { ArrowDown, Calendar } from 'lucide-react'
import { staggerContainer, fadeInUp } from '@/utils/animations'

export default function HeroSection() {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const target = document.querySelector('#contacto')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleScrollDown = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const target = document.querySelector('#servicios')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-dark via-brand-primary to-brand-secondary overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-accent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-medium border border-white/20 backdrop-blur-sm">
              Consultor para PyMEs en LATAM
            </span>
          </motion.div>

          {/* Titular principal */}
          <motion.h1
            id="hero-heading"
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight"
          >
            Haz crecer tu PyME con{' '}
            <span className="text-brand-accent">tecnología y estrategia</span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            Especialista en marketing digital, transformación digital y tecnología.
            Ayudo a pequeñas y medianas empresas a ser más visibles, eficientes y rentables.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <a
              href="#contacto"
              onClick={handleScrollToContact}
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-accent text-white font-semibold rounded-xl hover:bg-amber-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
            >
              <Calendar size={20} aria-hidden="true" />
              Agenda tu 1ª Consultoría Gratuita
            </a>
            <a
              href="#servicios"
              onClick={handleScrollDown}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-200 border border-white/30 backdrop-blur-sm text-base"
            >
              Ver servicios
              <ArrowDown size={20} aria-hidden="true" />
            </a>
          </motion.div>

          {/* Indicadores de credibilidad rápidos */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-white/20"
          >
            {[
              { value: '10+', label: 'Años de experiencia' },
              { value: '80+', label: 'Clientes atendidos' },
              { value: '150+', label: 'Proyectos completados' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-heading font-bold text-brand-accent">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#servicios"
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white/80 transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        aria-label="Desplazarse hacia abajo"
      >
        <ArrowDown size={24} />
      </motion.a>
    </section>
  )
}
