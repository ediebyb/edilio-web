import { motion } from 'framer-motion'
import { Calendar, User } from 'lucide-react'
import { STATS, BIO } from '@/data/about'
import { staggerContainer, fadeInUp, slideInLeft } from '@/utils/animations'

export default function AboutSection() {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const target = document.querySelector('#contacto')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="sobre-mi"
      className="py-20 bg-white"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Imagen / Avatar */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Avatar placeholder */}
              <div
                className="w-72 h-72 sm:w-80 sm:h-80 rounded-3xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center shadow-2xl"
                role="img"
                aria-label="Foto de Edilio Beas"
              >
                <User size={120} className="text-white/60" aria-hidden="true" />
                <span className="sr-only">Edilio Beas</span>
              </div>

              {/* Badge flotante */}
              <div className="absolute -bottom-4 -right-4 bg-brand-accent text-white px-4 py-2 rounded-xl shadow-lg font-semibold text-sm">
                10+ años de experiencia
              </div>
            </div>
          </motion.div>

          {/* Contenido */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-6"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block text-brand-primary font-semibold text-sm uppercase tracking-wider"
            >
              Sobre mí
            </motion.span>

            <motion.h2
              id="about-heading"
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-heading font-bold text-brand-dark leading-tight"
            >
              Consultor especialista en{' '}
              <span className="text-brand-primary">PyMEs de LATAM</span>
            </motion.h2>

            <motion.div variants={fadeInUp} className="space-y-4">
              {BIO.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-3 gap-4 py-6 border-t border-b border-gray-100"
            >
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl sm:text-3xl font-heading font-bold text-brand-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeInUp}>
              <a
                href="#contacto"
                onClick={handleScrollToContact}
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-primary text-white font-semibold rounded-xl hover:bg-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <Calendar size={20} aria-hidden="true" />
                Agenda tu 1ª Consultoría Gratuita
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
