import type { ComponentType } from 'react'

export interface Service {
  id: string
  icon: ComponentType<{ size?: number | string; className?: string }>
  title: string
  shortDescription: string
  price: string
  priceNote?: string
  cta: string
  image: string
  fullDetails: {
    description: string
    features: string[]
    deliverables: string[]
    timeline: string
    ctaFinal: string
  }
  note?: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  quote: string
  avatar?: string
}

export interface CredentialStat {
  value: string
  label: string
}

export interface NavLink {
  label: string
  href: string
}

export interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

export type FormErrors = Partial<Record<keyof FormData, string>>

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error'
