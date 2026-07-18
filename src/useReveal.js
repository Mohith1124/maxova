import { useEffect } from 'react'

// Adds the "in" class to every .reveal element as it scrolls into view.
// Respects the visitor's "reduce motion" setting.
export function useReveal() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const items = document.querySelectorAll('.reveal')

    if (reduce) {
      items.forEach((el) => el.classList.add('in'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    items.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
