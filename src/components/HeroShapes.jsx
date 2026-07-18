import { useEffect, useRef } from 'react'

// Colourful shapes that float and drift toward the cursor (parallax).
const SHAPES = [
  { color: '#FF5C39', size: 46, top: '16%', left: '12%', depth: 34 },
  { color: '#6C3BFF', size: 34, top: '26%', left: '82%', depth: 54 },
  { color: '#2E9BFF', size: 40, top: '66%', left: '16%', depth: 42 },
  { color: '#FFCA28', size: 26, top: '18%', left: '66%', depth: 64 },
  { color: '#FF7AC6', size: 34, top: '72%', left: '84%', depth: 38 },
  { color: '#7EE0AA', size: 28, top: '50%', left: '6%',  depth: 48 },
]

export default function HeroShapes() {
  const ref = useRef(null)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const coarse = window.matchMedia('(pointer: coarse)').matches
    if (reduce || coarse || !ref.current) return

    const shapes = Array.from(ref.current.querySelectorAll('.hshape'))
    let tx = 0, ty = 0, raf
    const onMove = (e) => {
      tx = e.clientX / window.innerWidth - 0.5
      ty = e.clientY / window.innerHeight - 0.5
    }
    window.addEventListener('mousemove', onMove)
    const loop = () => {
      shapes.forEach((s) => {
        const d = Number(s.dataset.depth)
        s.style.transform = `translate(${tx * d}px, ${ty * d}px)`
      })
      raf = requestAnimationFrame(loop)
    }
    loop()
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf) }
  }, [])

  return (
    <div className="hshapes" ref={ref} aria-hidden="true">
      {SHAPES.map((s, i) => (
        <span
          key={i}
          className="hshape"
          data-depth={s.depth}
          style={{ '--c': s.color, width: s.size, height: s.size, top: s.top, left: s.left, animationDelay: i * 0.7 + 's' }}
        />
      ))}
    </div>
  )
}