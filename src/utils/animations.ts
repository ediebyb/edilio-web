import type { Variants } from 'framer-motion'

export const fadeInUp: Variants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

export const staggerContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.15 } },
}

export const cardHover: Variants = {
  rest:  { y: 0,  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',   transition: { duration: 0.2 } },
  hover: { y: -4, boxShadow: '0 10px 25px rgba(0,0,0,0.15)', transition: { duration: 0.2 } },
}

export const slideInLeft: Variants = {
  hidden:  { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0,  transition: { duration: 0.6, ease: 'easeOut' } },
}

export const slideInRight: Variants = {
  hidden:  { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0,  transition: { duration: 0.6, ease: 'easeOut' } },
}
