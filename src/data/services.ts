import { MapPin, Globe, Table2, Database, Smartphone, TrendingUp, Brain } from 'lucide-react'
import type { Service } from '@/types'

export const SERVICES: Service[] = [
  {
    id: 'google-negocio',
    icon: MapPin,
    title: 'Perfil de Google Mi Negocio',
    description:
      'Optimiza tu presencia en Google Maps y búsquedas locales. Atrae más clientes a tu negocio con un perfil completo y actualizado.',
  },
  {
    id: 'paginas-web',
    icon: Globe,
    title: 'Páginas Web',
    description:
      'Diseño y desarrollo de sitios web profesionales, rápidos y responsivos que convierten visitantes en clientes.',
  },
  {
    id: 'excel-sheets',
    icon: Table2,
    title: 'Automatizaciones Excel/Sheets',
    description:
      'Automatiza tareas repetitivas y crea reportes inteligentes con macros y scripts personalizados para tu negocio.',
  },
  {
    id: 'erp',
    icon: Database,
    title: 'Sistemas ERP',
    description:
      'Implementación y personalización de sistemas de gestión empresarial para optimizar tus procesos operativos.',
  },
  {
    id: 'apps',
    icon: Smartphone,
    title: 'Desarrollo de Apps',
    description:
      'Aplicaciones móviles y web a medida que resuelven los desafíos específicos de tu PyME.',
  },
  {
    id: 'bolsa',
    icon: TrendingUp,
    title: 'Consultoría Inversión en Bolsa',
    description:
      'Aprende a invertir de forma inteligente y segura. Estrategias personalizadas para hacer crecer tu patrimonio.',
  },
  {
    id: 'liderazgo',
    icon: Brain,
    title: 'Liderar sin Estrés',
    description:
      'Consultoría de liderazgo y gestión del estrés para dueños de PyMEs. Lidera con claridad, energía y propósito.',
  },
]
