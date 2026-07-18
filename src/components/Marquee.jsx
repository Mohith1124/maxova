import {
  SiReact, SiVite, SiJavascript, SiNodedotjs, SiPython,
  SiFirebase, SiMysql, SiRazorpay, SiCloudinary, SiVercel, SiNetlify, SiGit,
} from 'react-icons/si'

const TECH = [
  { Icon: SiReact, label: 'React', color: '#61DAFB' },
  { Icon: SiVite, label: 'Vite', color: '#646CFF' },
  { Icon: SiJavascript, label: 'JavaScript', color: '#E8B800' },
  { Icon: SiNodedotjs, label: 'Node.js', color: '#5FA04E' },
  { Icon: SiPython, label: 'Python', color: '#3776AB' },
  { Icon: SiFirebase, label: 'Firebase', color: '#FFCA28' },
  { Icon: SiMysql, label: 'MySQL', color: '#4479A1' },
  { Icon: SiRazorpay, label: 'Razorpay', color: '#0C68E9' },
  { Icon: SiCloudinary, label: 'Cloudinary', color: '#3448C5' },
  { Icon: SiVercel, label: 'Vercel', color: 'var(--text)' },
  { Icon: SiNetlify, label: 'Netlify', color: '#00C7B7' },
  { Icon: SiGit, label: 'Git', color: '#F05032' },
]

export default function Marquee() {
  const items = [...TECH, ...TECH]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map(({ Icon, label, color }, i) => (
          <span className="mitem" key={i}>
            <Icon className="mitem-logo" style={{ color }} /> {label}
          </span>
        ))}
      </div>
    </div>
  )
}