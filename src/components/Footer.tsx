import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'
import { fadeIn } from '@/utils/animations'

const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  const handleScrollToContact = () => {
    const target = document.querySelector('#contacto')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.footer
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-[#05121F] border-t border-white/10"
      aria-label="Pie de página"
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* GRID DE 3 COLUMNAS */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* COLUMNA 1: Propuesta de Valor */}
          <div>
            <h3 className="text-white font-bold text-xl mb-4">
              ¿Listo para transformar tu PyME?
            </h3>
            <p className="text-gray-400 mb-6">
              Únete a las 30+ empresas en LATAM que ya aumentaron sus ventas y recuperaron su tiempo con mis estrategias.
            </p>
            <button 
              onClick={handleScrollToContact}
              className="bg-[#C5A059] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#D4AF6A] transition-colors"
            >
              Agenda tu consultoría gratis →
            </button>
          </div>

          {/* COLUMNA 2: Stats de Autoridad */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="text-3xl font-bold text-[#C5A059] mb-2">150+</div>
              <div className="text-gray-400 text-sm">Proyectos Exitosos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#C5A059] mb-2">30+</div>
              <div className="text-gray-400 text-sm">PyMEs Transformadas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#C5A059] mb-2">4 países</div>
              <div className="text-gray-400 text-sm">En LATAM</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#C5A059] mb-2">100%</div>
              <div className="text-gray-400 text-sm">Clientes Satisfechos</div>
            </div>
          </div>

          {/* COLUMNA 3: Links Rápidos + Garantía */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#servicios" className="hover:text-[#C5A059] transition-colors">Servicios</a></li>
              <li><a href="#testimonios" className="hover:text-[#C5A059] transition-colors">Casos de Éxito</a></li>
              <li><a href="#sobre-mi" className="hover:text-[#C5A059] transition-colors">Sobre Mí</a></li>
              <li><a href="#contacto" className="hover:text-[#C5A059] transition-colors">Contacto</a></li>
            </ul>
            <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
              <Shield className="w-4 h-4 text-[#C5A059]" />
              <span>Confidencialidad 100% garantizada</span>
            </div>
          </div>
        </div>

        {/* LÍNEA DIVISORIA */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm">
            © {CURRENT_YEAR} Edilio Beas - Consultor PyME. Todos los derechos reservados.
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="/terminos" className="hover:text-white transition-colors">Términos y Condiciones</a>
            <a href="/privacidad" className="hover:text-white transition-colors">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
