import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'
import { STATS, BIO } from '@/data/about'
import { staggerContainer, fadeInUp, slideInLeft } from '@/utils/animations'
import { SETMORE_LINK } from '@/data/setmore'

export default function AboutSection() {

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
              {/* Foto de perfil */}
              <img
                src="/Perfil.jpg"
                alt="Foto de Edilio Beas"
                className="w-72 h-72 sm:w-80 sm:h-80 rounded-3xl object-cover shadow-2xl"
              />

              {/* Badge flotante 1 - Experiencia */}
              <div className="absolute -top-4 -right-4 bg-[#C5A059] text-white px-6 py-3 rounded-xl shadow-xl">
                <div className="text-2xl font-bold">10+</div>
                <div className="text-xs">Años de experiencia</div>
              </div>

              {/* Badge flotante 2 - Proyectos */}
              <div className="absolute -bottom-4 -left-4 bg-[#05121F] text-white px-6 py-3 rounded-xl shadow-xl">
                <div className="text-2xl font-bold">150+</div>
                <div className="text-xs">Proyectos exitosos</div>
              </div>

              {/* Elemento decorativo - Líneas doradas */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%]">
                <div className="w-full h-full border-2 border-[#C5A059]/20 rounded-3xl rotate-3" />
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
                href={SETMORE_LINK}
                target="_blank"
                rel="noopener noreferrer"
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
