import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle, Clock } from 'lucide-react'
import type { Service } from '@/types'
import { SETMORE_LINK } from '@/data/setmore'

interface ServiceModalProps {
  service: Service | null
  isOpen: boolean
  onClose: () => void
}

export default function ServiceModal({ service, isOpen, onClose }: ServiceModalProps) {
  if (!service) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
                <h2 id="modal-title" className="text-2xl font-bold text-[#05121F]">
                  {service.title}
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  aria-label="Cerrar modal"
                >
                  <X size={24} className="text-gray-500" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Image */}
                <div className="w-full h-48 rounded-lg overflow-hidden bg-gray-50">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Descripción completa */}
                <p className="text-gray-600 leading-relaxed">
                  {service.fullDetails.description}
                </p>

                {/* Features con checkmarks */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-[#05121F]">Lo que incluye:</h4>
                  {service.fullDetails.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#C5A059] mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Entregables */}
                <div className="bg-[#05121F]/5 p-4 rounded-lg">
                  <h4 className="font-semibold text-[#05121F] mb-3">Entregables:</h4>
                  <ul className="space-y-2">
                    {service.fullDetails.deliverables.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#C5A059] rounded-full" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Timeline */}
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-5 h-5 text-[#C5A059]" aria-hidden="true" />
                  <span>Tiempo estimado: {service.fullDetails.timeline}</span>
                </div>

                {/* Precio destacado */}
                <div className="text-center py-4 border-t border-gray-100">
                  <span className="text-3xl font-bold text-[#C5A059]">{service.price}</span>
                  {service.priceNote && (
                    <p className="text-sm text-gray-500 mt-1">{service.priceNote}</p>
                  )}
                  <p className="text-sm text-gray-500 mt-2">Cotización personalizada según necesidades</p>
                </div>

                {/* Note if exists */}
                {service.note && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm text-yellow-800">
                    {service.note}
                  </div>
                )}

                {/* CTA Final */}
                <a
                  href={SETMORE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#C5A059] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#D4AF6A] transition-colors shadow-lg text-center"
                >
                  {service.fullDetails.ctaFinal}
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
