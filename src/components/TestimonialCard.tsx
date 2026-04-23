import type { Testimonial } from '@/types'
import { Quote } from 'lucide-react'

interface TestimonialCardProps {
  testimonial: Testimonial
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase()
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article
      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col h-full"
      aria-label={`Testimonio de ${testimonial.name}`}
    >
      {/* Ícono de cita */}
      <Quote size={32} className="text-brand-primary/20 mb-4 flex-shrink-0" aria-hidden="true" />

      {/* Texto de la opinión */}
      <blockquote className="text-gray-700 leading-relaxed flex-1 mb-6 italic">
        "{testimonial.quote}"
      </blockquote>

      {/* Autor */}
      <footer className="flex items-center gap-3">
        {/* Avatar */}
        {testimonial.avatar ? (
          <img
            src={testimonial.avatar}
            alt={`Foto de ${testimonial.name}`}
            className="w-10 h-10 rounded-full object-cover flex-shrink-0"
          />
        ) : (
          <div
            className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center flex-shrink-0"
            aria-hidden="true"
          >
            <span className="text-white text-sm font-semibold">
              {getInitials(testimonial.name)}
            </span>
          </div>
        )}

        <div>
          <cite className="not-italic font-semibold text-brand-dark text-sm">
            {testimonial.name}
          </cite>
          <p className="text-gray-500 text-xs">{testimonial.role}</p>
        </div>
      </footer>
    </article>
  )
}
