import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'
import { SERVICES } from '@/data/services'
import { staggerContainer, fadeInUp } from '@/utils/animations'
import ServiceCard from './ServiceCard'
import ServiceModal from './ServiceModal'
import type { Service } from '@/types'
import { SETMORE_LINK } from '@/data/setmore'

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)

  const handleOpenModal = (service: Service) => {
    setSelectedService(service)
  }

  const handleCloseModal = () => {
    setSelectedService(null)
  }

  return (
    <section
      id="servicios"
      className="py-20 bg-brand-light"
      aria-labelledby="services-heading"
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
            className="inline-block text-brand-primary font-semibold text-sm uppercase tracking-wider mb-3"
          >
            Lo que puedo hacer por ti
          </motion.span>
          <motion.h2
            id="services-heading"
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-heading font-bold text-brand-dark mb-4"
          >
            Servicios para hacer crecer tu PyME
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Soluciones prácticas y personalizadas en marketing digital, tecnología y liderazgo
            para que tu negocio sea más competitivo.
          </motion.p>
        </motion.div>

        {/* Grilla de servicios */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service) => (
            <motion.div key={service.id} variants={fadeInUp}>
              <ServiceCard service={service} onOpenModal={handleOpenModal} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA final */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href={SETMORE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-primary text-white font-semibold rounded-xl hover:bg-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
          >
            <Calendar size={20} aria-hidden="true" />
            Agenda tu 1ª Consultoría Gratuita
          </a>
        </motion.div>

        {/* Price disclaimer */}
        <div className="text-center text-sm text-gray-500 mt-8">
          * Todos los precios están en pesos chilenos (CLP) y no incluyen IVA.
          Los valores finales pueden variar según necesidades específicas del proyecto.
        </div>
      </div>

      {/* Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={!!selectedService}
        onClose={handleCloseModal}
      />
    </section>
  )
}
