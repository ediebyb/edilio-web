import { motion } from 'framer-motion'
import type { Service } from '@/types'
import { cardHover } from '@/utils/animations'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  service: Service
  onOpenModal: (service: Service) => void
}

export default function ServiceCard({ service, onOpenModal }: ServiceCardProps) {
  const Icon = service.icon

  return (
    <motion.div
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      className="p-6 hover:shadow-xl transition-shadow duration-300 bg-white rounded-xl border border-gray-100 flex flex-col h-full"
    >
      {/* Image */}
      <div className="w-full h-32 mb-4 rounded-lg overflow-hidden bg-gray-50">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Icono más pequeño */}
      <div className="w-10 h-10 bg-gradient-to-br from-[#05121F] to-[#0F2436] rounded-lg flex items-center justify-center mb-3 shadow-lg">
        <Icon className="w-5 h-5 text-[#C5A059]" aria-hidden="true" />
      </div>

      {/* Título corto y directo */}
      <h3 className="text-xl font-bold text-[#05121F] mb-2">
        {service.title}
      </h3>

      {/* Descripción ultra-corta (máx 2 líneas) */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
        {service.shortDescription}
      </p>

      {/* Precio destacado */}
      <div className="mb-4 mt-auto">
        <span className="text-2xl font-bold text-[#C5A059]">
          {service.price}
        </span>
        {service.priceNote && (
          <p className="text-xs text-gray-500 mt-1">{service.priceNote}</p>
        )}
      </div>

      {/* Botón "Ver más" */}
      <button
        onClick={() => onOpenModal(service)}
        className="w-full bg-[#05121F] text-white py-3 rounded-lg font-semibold hover:bg-[#0F2436] transition-colors flex items-center justify-center gap-2"
        aria-label={`Ver más detalles de ${service.title}`}
      >
        Ver más
        <ArrowRight className="w-4 h-4" aria-hidden="true" />
      </button>
    </motion.div>
  )
}
