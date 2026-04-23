import type { FormData, FormErrors } from '@/types'

/**
 * Serializa un objeto a formato application/x-www-form-urlencoded
 */
export function encode(data: Record<string, string>): string {
  return Object.entries(data)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&')
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_REGEX = /^[\d\s\-+()]*$/

/**
 * Valida los campos del formulario de contacto.
 * Retorna un objeto con los errores encontrados (vacío si todo es válido).
 */
export function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {}

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'El nombre debe tener al menos 2 caracteres.'
  }

  if (!data.email || !EMAIL_REGEX.test(data.email.trim())) {
    errors.email = 'Ingresa un correo electrónico válido.'
  }

  if (data.phone && data.phone.trim() !== '' && !PHONE_REGEX.test(data.phone)) {
    errors.phone = 'Solo se permiten números, espacios, guiones y +.'
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'El mensaje debe tener al menos 10 caracteres.'
  }

  return errors
}
