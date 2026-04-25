export const SITE = {
  name: 'Alex Morgan',
  role: 'Full Stack Developer',
  tagline: 'I build things for the web.',
  description:
    'A full-stack developer with 5+ years of experience crafting performant, elegant digital experiences. I specialise in React, Next.js, and scalable backend systems.',
  email: 'hello@alexmorgan.dev',
  location: 'Pune, India',
  github: 'https://github.com/alexmorgan',
  linkedin: 'https://linkedin.com/in/alexmorgan',
  twitter: 'https://twitter.com/alexmorgan',
  availableForWork: true,
}

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const STATS = [
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 40, suffix: '+', label: 'Projects Shipped' },
  { value: 12, suffix: '+', label: 'Technologies' },
  { value: 99, suffix: '%', label: 'Client Satisfaction' },
]

export const SKILLS = {
  Languages: [
    { name: 'TypeScript', level: 95 },
    { name: 'JavaScript', level: 93 },
    { name: 'HTML / CSS', level: 98 },
    { name: 'PHP', level: 82 },
    { name: 'Python', level: 70 },
  ],
  Frontend: [
    { name: 'React.js', level: 95 },
    { name: 'Next.js', level: 93 },
    { name: 'Tailwind CSS', level: 92 },
    { name: 'Framer Motion', level: 85 },
    { name: 'AngularJS', level: 72 },
  ],
  Backend: [
    { name: 'Node.js', level: 88 },
    { name: 'Express', level: 86 },
    { name: 'REST APIs', level: 92 },
    { name: 'GraphQL', level: 74 },
    { name: 'WordPress', level: 88 },
  ],
  Database: [
    { name: 'PostgreSQL', level: 84 },
    { name: 'MySQL', level: 88 },
    { name: 'MongoDB', level: 76 },
    { name: 'Redis', level: 68 },
    { name: 'Prisma ORM', level: 80 },
  ],
  'Tools & Cloud': [
    { name: 'Git / GitHub', level: 95 },
    { name: 'Docker', level: 74 },
    { name: 'Vercel / Netlify', level: 90 },
    { name: 'AWS (basics)', level: 65 },
    { name: 'GSAP', level: 82 },
  ],
}

export const PROJECTS = [
  {
    id: 'shopflow',
    title: 'ShopFlow',
    subtitle: 'E-Commerce Platform',
    description:
      'A high-performance e-commerce platform with real-time inventory, Stripe payments, and analytics dashboard. Handles 10k+ monthly transactions with 99.9% uptime.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Redis'],
    color: '#f0f4ff',
    accentColor: '#0052CC',
    github: 'https://github.com/alexmorgan/shopflow',
    live: 'https://shopflow.demo',
    featured: true,
  },
  {
    id: 'datapulse',
    title: 'DataPulse',
    subtitle: 'Analytics SaaS',
    description:
      'Real-time analytics SaaS with customizable dashboards, multi-tenant architecture, and exportable reports. White-label ready for enterprise clients.',
    tech: ['React', 'Node.js', 'MySQL', 'Chart.js', 'Docker'],
    color: '#f0fff4',
    accentColor: '#059669',
    github: 'https://github.com/alexmorgan/datapulse',
    live: 'https://datapulse.demo',
    featured: true,
  },
  {
    id: 'medrecord',
    title: 'MedRecord',
    subtitle: 'Healthcare Portal',
    description:
      'HIPAA-compliant patient records system with role-based access control, end-to-end encryption, and seamless data migration tooling.',
    tech: ['PHP', 'MySQL', 'React', 'XAMPP', 'REST API'],
    color: '#fff0f4',
    accentColor: '#dc2626',
    github: 'https://github.com/alexmorgan/medrecord',
    live: 'https://medrecord.demo',
    featured: false,
  },
  {
    id: 'nexthire',
    title: 'NextHire',
    subtitle: 'Recruitment Platform',
    description:
      'AI-assisted recruitment platform with candidate scoring, automated email flows, and interview scheduling. Built with Next.js App Router and OpenAI.',
    tech: ['Next.js', 'TypeScript', 'OpenAI', 'Prisma', 'PostgreSQL'],
    color: '#fafaf0',
    accentColor: '#ca8a04',
    github: 'https://github.com/alexmorgan/nexthire',
    live: 'https://nexthire.demo',
    featured: false,
  },
]

export const EXPERIENCE = [
  {
    period: '2023 – Present',
    role: 'Senior Full Stack Developer',
    company: 'TechVentures SaaS',
    location: 'Remote',
    description:
      'Leading product engineering for a B2B SaaS platform. Architected a Next.js 14 App Router migration, reducing TTFB by 60%. Mentoring a team of 4 junior developers.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'AWS'],
  },
  {
    period: '2021 – 2023',
    role: 'Full Stack Developer',
    company: 'PixelLabs Agency',
    location: 'Pune, India',
    description:
      'Delivered 18+ client projects spanning e-commerce, dashboards, and CMS platforms. Introduced TypeScript and code review processes that reduced production bugs by 40%.',
    tech: ['React', 'Node.js', 'MySQL', 'WordPress'],
  },
  {
    period: '2020 – 2021',
    role: 'Frontend Developer',
    company: 'Startup Studio',
    location: 'Pune, India',
    description:
      'Built responsive React UIs and WordPress themes for early-stage startups. Implemented Storybook component library adopted by 3 product teams.',
    tech: ['React', 'JavaScript', 'CSS', 'WordPress'],
  },
  {
    period: '2019 – 2020',
    role: 'Junior Web Developer',
    company: 'Freelance',
    location: 'Remote',
    description:
      'Delivered custom websites and PHP backends for small businesses. Developed data migration scripts for legacy system modernization projects.',
    tech: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript'],
  },
]

export const TESTIMONIALS = [
  {
    name: 'Sarah Chen',
    role: 'CTO, TechVentures',
    avatar: 'SC',
    quote:
      "Alex completely transformed our platform's architecture. The Next.js migration was flawless, and the performance improvements were beyond our expectations. A truly exceptional engineer.",
  },
  {
    name: 'Marcus Rivera',
    role: 'Founder, ShopFlow',
    avatar: 'MR',
    quote:
      "Working with Alex was a game-changer. He didn't just write code — he thought strategically about the product and delivered solutions that scaled beautifully from day one.",
  },
  {
    name: 'Priya Sharma',
    role: 'Product Manager, DataPulse',
    avatar: 'PS',
    quote:
      'The attention to detail in both the code quality and the UI is remarkable. Alex brings a rare combination of technical depth and design sensibility to every project.',
  },
  {
    name: 'James O\'Brien',
    role: 'Lead Dev, PixelLabs',
    avatar: 'JO',
    quote:
      'Alex elevated our entire engineering culture. His TypeScript standards and code review processes reduced bugs dramatically and made onboarding new devs so much smoother.',
  },
]
