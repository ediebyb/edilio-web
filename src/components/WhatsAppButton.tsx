import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const WA_NUMBER = '56941522980'
const WA_MESSAGE = encodeURIComponent('Hola Edilio, me interesa agendar una consultoría gratuita')
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="bg-brand-dark text-white text-sm font-medium px-3 py-2 rounded-lg shadow-lg whitespace-nowrap pointer-events-none"
            role="tooltip"
            id="whatsapp-tooltip"
          >
            Escríbeme por WhatsApp
            {/* Flecha del tooltip */}
            <span
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 border-4 border-transparent border-l-brand-dark"
              aria-hidden="true"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón */}
      <motion.a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        style={{ backgroundColor: '#25D366' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Escríbeme por WhatsApp"
        aria-describedby={isHovered ? 'whatsapp-tooltip' : undefined}
      >
        <MessageCircle size={28} className="text-white" aria-hidden="true" />
      </motion.a>
    </div>
  )
}
