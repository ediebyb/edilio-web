import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import type { FormData, FormErrors, FormStatus } from '@/types'
import { encode, validateForm } from '@/utils/formUtils'
import { fadeInUp } from '@/utils/animations'

const INITIAL_DATA: FormData = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

export default function ContactForm() {
  const [data, setData] = useState<FormData>(INITIAL_DATA)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setData((prev) => ({ ...prev, [name]: value }))
    // Limpiar error del campo al escribir
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const validationErrors = validateForm(data)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      // Foco al primer campo con error
      const firstErrorField = Object.keys(validationErrors)[0] as keyof FormData
      const el = document.querySelector<HTMLInputElement | HTMLTextAreaElement>(
        `[name="${firstErrorField}"]`
      )
      el?.focus()
      return
    }

    setStatus('submitting')
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contacto', ...data }),
      })
      setStatus('success')
      setData(INITIAL_DATA)
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="text-center py-12 px-6"
        role="alert"
        aria-live="polite"
      >
        <CheckCircle size={64} className="text-green-500 mx-auto mb-4" aria-hidden="true" />
        <h3 className="text-2xl font-heading font-bold text-brand-dark mb-2">
          ¡Mensaje enviado!
        </h3>
        <p className="text-gray-600 mb-6">
          Gracias por contactarme. Te responderé a la brevedad posible.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="text-brand-primary font-medium hover:underline"
        >
          Enviar otro mensaje
        </button>
      </motion.div>
    )
  }

  return (
    <form
      name="contacto"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      noValidate
      className="space-y-6"
      aria-label="Formulario de contacto"
    >
      {/* Campos ocultos para Netlify */}
      <input type="hidden" name="form-name" value="contacto" />
      <div hidden aria-hidden="true">
        <label>
          No llenar si eres humano:
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {/* Banner de error de red */}
      {status === 'error' && (
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700"
          role="alert"
          aria-live="assertive"
        >
          <AlertCircle size={20} aria-hidden="true" />
          <p className="text-sm">
            Hubo un problema al enviar el mensaje. Por favor intenta nuevamente.
          </p>
        </motion.div>
      )}

      {/* Nombre */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-brand-dark mb-1.5">
          Nombre completo <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          required
          autoComplete="name"
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className={`w-full px-4 py-3 rounded-xl border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/30 ${
            errors.name
              ? 'border-red-400 bg-red-50 focus:border-red-400'
              : 'border-gray-200 bg-white focus:border-brand-primary'
          }`}
          placeholder="Tu nombre completo"
        />
        {errors.name && (
          <p id="name-error" className="mt-1.5 text-sm text-red-600 flex items-center gap-1" role="alert">
            <AlertCircle size={14} aria-hidden="true" />
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-brand-dark mb-1.5">
          Correo electrónico <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          required
          autoComplete="email"
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={`w-full px-4 py-3 rounded-xl border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/30 ${
            errors.email
              ? 'border-red-400 bg-red-50 focus:border-red-400'
              : 'border-gray-200 bg-white focus:border-brand-primary'
          }`}
          placeholder="tu@email.com"
        />
        {errors.email && (
          <p id="email-error" className="mt-1.5 text-sm text-red-600 flex items-center gap-1" role="alert">
            <AlertCircle size={14} aria-hidden="true" />
            {errors.email}
          </p>
        )}
      </div>

      {/* Teléfono (opcional) */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-brand-dark mb-1.5">
          Teléfono{' '}
          <span className="text-gray-400 font-normal text-xs">(opcional)</span>
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          value={data.phone}
          onChange={handleChange}
          autoComplete="tel"
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
          className={`w-full px-4 py-3 rounded-xl border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/30 ${
            errors.phone
              ? 'border-red-400 bg-red-50 focus:border-red-400'
              : 'border-gray-200 bg-white focus:border-brand-primary'
          }`}
          placeholder="+56 9 1234 5678"
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1.5 text-sm text-red-600 flex items-center gap-1" role="alert">
            <AlertCircle size={14} aria-hidden="true" />
            {errors.phone}
          </p>
        )}
      </div>

      {/* Mensaje */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brand-dark mb-1.5">
          Mensaje <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={data.message}
          onChange={handleChange}
          required
          rows={5}
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`w-full px-4 py-3 rounded-xl border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/30 resize-none ${
            errors.message
              ? 'border-red-400 bg-red-50 focus:border-red-400'
              : 'border-gray-200 bg-white focus:border-brand-primary'
          }`}
          placeholder="Cuéntame sobre tu negocio y en qué puedo ayudarte..."
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-sm text-red-600 flex items-center gap-1" role="alert">
            <AlertCircle size={14} aria-hidden="true" />
            {errors.message}
          </p>
        )}
      </div>

      {/* Botón de envío */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-primary text-white font-semibold rounded-xl hover:bg-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-brand-primary disabled:hover:shadow-lg"
        aria-busy={status === 'submitting'}
      >
        {status === 'submitting' ? (
          <>
            <Loader2 size={20} className="animate-spin" aria-hidden="true" />
            Enviando...
          </>
        ) : (
          <>
            <Send size={20} aria-hidden="true" />
            Enviar mensaje
          </>
        )}
      </button>

      <p className="text-xs text-gray-400 text-center">
        <span aria-hidden="true">*</span> Campos requeridos. Tu información es confidencial.
      </p>
    </form>
  )
}
