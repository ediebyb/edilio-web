import { motion } from 'framer-motion'
import type { Service } from '@/types'
import { cardHover } from '@/utils/animations'
import { Check } from 'lucide-react'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon

  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const target = document.querySelector('#contacto')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.div
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      className="bg-white rounded-2xl p-6 border border-gray-100 cursor-default flex flex-col h-full"
    >
      {/* Ícono */}
      <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-primary/10 rounded-xl mb-4">
        <Icon size={24} className="text-brand-primary" aria-hidden="true" />
      </div>

      {/* Título */}
      <h3 className="text-lg font-heading font-semibold text-brand-dark mb-2">
        {service.title}
      </h3>

      {/* Descripción */}
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {service.description}
      </p>

      {/* Features */}
      <ul className="space-y-2 mb-4 flex-1">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
            <Check size={16} className="text-brand-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Note */}
      {service.note && (
        <p className="text-xs text-gray-500 mb-3 italic">
          {service.note}
        </p>
      )}

      {/* Price */}
      <div className="mb-4">
        <span className="text-lg font-bold text-brand-primary">{service.price}</span>
      </div>

      {/* CTA */}
      <button
        onClick={handleScrollToContact}
        className="w-full inline-flex items-center justify-center px-4 py-3 bg-brand-accent text-white text-sm font-semibold rounded-lg hover:bg-amber-600 transition-colors duration-200"
        aria-label={service.cta}
      >
        {service.cta}
      </button>
    </motion.div>
  )
}
