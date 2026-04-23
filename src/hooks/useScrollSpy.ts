import { useState, useEffect } from 'react'

/**
 * Hook que detecta qué sección está actualmente visible en el viewport
 * usando IntersectionObserver. Retorna el id de la sección activa.
 */
export function useScrollSpy(sectionIds: string[], offset = 0): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? '')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (!element) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id)
          }
        },
        {
          rootMargin: `${-offset}px 0px -50% 0px`,
          threshold: 0,
        }
      )

      observer.observe(element)
      observers.push(observer)
    })

    return () => {
      observers.forEach((obs) => obs.disconnect())
    }
  }, [sectionIds, offset])

  return activeId
}
