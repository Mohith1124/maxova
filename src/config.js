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

// Client testimonials shown on the site.
// IMPORTANT: only put REAL quotes from real clients here. Never publish
// invented reviews. The section auto-hides if this array is empty.
export const TESTIMONIALS = [
  {
    quote: 'They built our website in under a week and it looks fantastic. Easy to work with and quick to make changes.',
    name: 'Client name',
    business: 'Business name, City',
    rating: 5,
  },
]
