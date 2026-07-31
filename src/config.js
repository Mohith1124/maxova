// ==========================================================
//  FLUXEL — edit everything about your brand here.
//  Change these values and the whole site updates.
// ==========================================================

export const BRAND = {
  name: 'Maxova',
  whatsapp: '918247894749',
  email: 'mohithmorees1124@gmail.com',
}

// Tech shown in the "about" panel and the scrolling marquee.
export const SKILLS = {
  build: ['React', 'Vite', 'JavaScript', 'Node.js', 'Python'],
  tools: ['Firebase', 'Razorpay', 'Cloudinary', 'Vercel', 'Git'],
  outcomes: ['Mobile-friendly', 'Fast loading', 'Online payments', 'Easy to update'],
}

export const MARQUEE = [
  'React', 'Firebase', 'Node.js', 'Vite', 'Python', 'Razorpay', 'Responsive', 'SEO-ready',
]

// Your portfolio. Add a new object here for every site you deliver.
export const PROJECTS = [
  {
    num: '01',
    title: 'Regalvows',
    desc: 'A full wedding-services marketplace where couples discover vendors and book services. User accounts, online payments and image galleries - built and deployed end to end.',
    tags: ['React 19', 'Vite', 'Firebase', 'Razorpay', 'Cloudinary'],
    link: 'https://regalvows.vercel.app',
  },
  {
    num: '02',
    title: 'Your next project',
    desc: 'Deliver a client site you are proud of, then replace this with a screenshot, the result, and a live link.',
    tags: ['Coming soon'],
    link: '',
  },
]

export const STEPS = [
  { n: '1', title: 'Share your details', desc: 'Fill the form with your business and what you need. Two minutes.', linkText: 'form', linkHref: '#start' },,
  { n: '2', title: 'Pick a plan', desc: 'We talk it through and choose the plan that fits - Basic, Standard or Pro.', linkText: 'plan', linkHref: '#pricing' },
  { n: '3', title: 'Agreement & timeline', desc: 'You get a simple written agreement with scope, price and delivery date.' },
  { n: '4', title: 'Build & launch', desc: 'I build it, you review, we go live. Support after launch included.' },
]

// Set your own prices. These are starting points, not fixed quotes.
export const PLANS = [
  {
    name: 'Basic',
    price: '₹5,999',
    desc: 'A clean one-page website to get you online.',
    features: ['Single-page website', 'Mobile responsive', 'Contact + WhatsApp buttons', 'Deployed & live'],
    featured: false,
  },
  {
    name: 'Standard',
    price: '₹10,999',
    desc: 'A multi-page site with everything a small business needs.',
    features: ['Up to 5 pages', 'Contact form (to email)', 'Basic SEO setup', 'Google Maps + gallery', '2 rounds of revisions'],
    featured: true,
  },
  {
    name: 'Pro',
    price: '₹16,999+',
    desc: 'A custom-built site with advanced features.',
    features: ['Everything in Standard', 'Online payments / booking', 'Admin panel to edit content', 'Custom features on request', 'Priority support'],
    featured: false,
  },
]

export const FAQS = [
  {
    q: 'How long does it take to build my website?',
    a: 'Most single-page sites are delivered within 5 working days once I have your content and the advance. Larger multi-page sites take a bit longer — I always confirm the exact timeline in your agreement before we start.',
  },
  {
    q: 'Do I own the website once it is done?',
    a: 'Yes. On final payment, the website is fully handed over to you. The domain (like yourbusiness.com) is purchased in your name and owned by you.',
  },
  {
    q: 'What do you need from me to get started?',
    a: 'Your logo (if you have one), a few good photos, your list of services, business timings, address, and contact details. Missing content is the main thing that delays projects, so having it ready helps us launch faster.',
  },
  {
    q: 'How does payment work?',
    a: 'A 30–50% advance to begin, and the balance before the site goes live. Prices are one-time for the build. Hosting and small updates are covered by an optional yearly care plan.',
  },
  {
    q: 'What if I want changes after seeing it?',
    a: 'Every project includes 2 rounds of revisions so we get it right. Bigger changes or new features after that are quoted separately.',
  },
  {
    q: 'Will my website work on mobile?',
    a: 'Always. Every site I build is fully responsive and tested on phones, tablets, and desktops — most of your customers will visit on their phone, so mobile is a priority.',
  },
]

// Client testimonials. IMPORTANT: only real quotes from real clients.
// Get googleUrl by opening the review on Google Maps → Share → copy link.
// Section auto-hides if this array is empty.
export const TESTIMONIALS = [
  // {
  //   quote: 'Their real words here.',
  //   name: 'Client Full Name',
  //   business: 'Business Name, City',
  //   rating: 5,
  //   googleUrl: 'https://g.co/kgs/xxxxxxx',
  // },
]
