import { motion } from 'framer-motion'
import { Mail, Linkedin, Twitter, Instagram, ExternalLink } from 'lucide-react'
import { NAV_LINKS } from '@/data/navigation'
import { fadeIn } from '@/utils/animations'

const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
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
      className="bg-brand-dark text-white"
      aria-label="Pie de página"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Columna 1: Marca */}
          <div className="space-y-4">
            <h2 className="text-xl font-heading font-bold text-white">Edilio Beas</h2>
            <p className="text-white/60 text-sm leading-relaxed">
              Consultor especialista en marketing digital, transformación digital y tecnología
              para PyMEs en LATAM.
            </p>
            {/* Redes sociales */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="LinkedIn de Edilio Beas"
                rel="noopener noreferrer"
              >
                <Linkedin size={18} aria-hidden="true" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Twitter/X de Edilio Beas"
                rel="noopener noreferrer"
              >
                <Twitter size={18} aria-hidden="true" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram de Edilio Beas"
                rel="noopener noreferrer"
              >
                <Instagram size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
              Navegación
            </h3>
            <nav aria-label="Navegación del pie de página">
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-white/60 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:edilio@ediliobeas.com"
                  className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors duration-200"
                >
                  <Mail size={16} aria-hidden="true" />
                  edilio@ediliobeas.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/56941522980"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors duration-200"
                >
                  <ExternalLink size={16} aria-hidden="true" />
                  WhatsApp: +56 9 4152 2980
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria y copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {CURRENT_YEAR} Edilio Beas. Todos los derechos reservados.
          </p>
          <p className="text-white/40 text-sm">
            Consultoría para PyMEs en LATAM
          </p>
        </div>
      </div>
    </motion.footer>
  )
}
