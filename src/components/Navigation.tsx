import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/data/navigation'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Navegación principal"
      >
        <div className="flex items-center justify-between h-16">
          {/* Logo / Marca */}
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="flex items-center space-x-2"
            aria-label="Edilio Beas - Ir al inicio"
          >
            <span className="text-xl font-heading font-bold text-brand-primary">
              Edilio Beas
            </span>
          </a>

          {/* Links desktop */}
          <ul className="hidden md:flex items-center space-x-8" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-brand-dark hover:text-brand-primary font-medium transition-colors duration-200 text-sm"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA desktop */}
          <a
            href="#contacto"
            onClick={(e) => handleNavClick(e, '#contacto')}
            className="hidden md:inline-flex items-center px-4 py-2 bg-brand-accent text-white text-sm font-semibold rounded-lg hover:bg-amber-600 transition-colors duration-200"
          >
            Agenda tu consultoría
          </a>

          {/* Botón hamburguesa */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-brand-dark hover:text-brand-primary hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menú móvil */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden bg-white border-t border-gray-100"
            >
              <ul className="py-2 space-y-1" role="list">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="block px-4 py-3 text-brand-dark hover:text-brand-primary hover:bg-gray-50 font-medium transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="px-4 py-2">
                  <a
                    href="#contacto"
                    onClick={(e) => handleNavClick(e, '#contacto')}
                    className="block w-full text-center px-4 py-2 bg-brand-accent text-white text-sm font-semibold rounded-lg hover:bg-amber-600 transition-colors duration-200"
                  >
                    Agenda tu consultoría
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
