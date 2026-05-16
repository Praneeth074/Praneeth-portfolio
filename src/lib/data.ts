export const SITE = {
  name: 'PERLA VENKATA SAI PRANEETH REDDY',
  role: 'Full Stack Developer',
  tagline: 'I build things for the web.',
  description:
    'A full-stack developer with 1+ years of experience crafting performant, elegant digital experiences. I specialise in Angular, Next.js, and Node.js.',
  email: 'saipraneethreddy2004@gmail.com',
  location: 'Pune, India',
  github: 'https://github.com/praneeth074',
  linkedin: 'https://linkedin.com/in/praneeth-dev',
  twitter: '#',
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
  { value: 1, suffix: '+', label: 'Years Experience' },
  { value: 3, suffix: '+', label: 'Projects Shipped' },
  { value: 12, suffix: '+', label: 'Technologies' },
  { value: 99, suffix: '%', label: 'Client Satisfaction' },
]

export const SKILLS = {
  Languages: [
    { name: 'TypeScript', level: 95 },
    { name: 'JavaScript', level: 93 },
    { name: 'HTML / CSS', level: 98 },
    { name: 'PHP', level: 82 },
    { name: 'JAVA', level: 80 },
  ],
  Frontend: [
    { name: 'React.js', level: 95 },
    { name: 'Next.js', level: 93 },
    { name: 'Tailwind CSS', level: 88 },
    { name: 'Jquery', level: 90 },
    { name: 'AngularJS', level: 89 },
    { name: 'WordPress', level: 88 },
  ],
  Backend: [
    { name: 'Node.js', level: 88 },
    { name: 'Express', level: 86 },
    { name: 'REST APIs', level: 92 },
    { name: 'Socket.io', level: 74 },
    { name: 'PHP', level: 82 },
    
  ],
  Database: [
    { name: 'PostgreSQL', level: 84 },
    { name: 'MySQL', level: 88 },
  ],
  'Tools & Cloud': [
    { name: 'Git / BitBucket', level: 95 },
    { name: 'Docker', level: 74 },
    { name: 'Postman', level: 80 },
    { name: 'AWS ', level: 80 },
    { name: 'DBeaver', level: 82 },
  ],
}

export const PROJECTS = [
  {
    id: 'Bravo Store',
    title: 'Bravo Store',
    subtitle: 'Local merchandise managing software',
    description:
      'A high-performance merchandise software with real-time inventory, Invoice Generation, and analytics dashboard. Built with PHP, MySQL (maria DB) with RBAC ACCESS control and secure access.',
    tech: ['PHP, MYSQL', 'HTML/CSS', 'JavaScript', 'AJAX'],
    color: '#f0f4ff',
    accentColor: '#0052CC',
    github: 'https://github.com/praneeth074/bravostore',
    // live: 'https://bravostore.demo',
    featured: true,
  },
  {
    id: 'CNA Innovative',
    title: 'CNA Innovative',
    subtitle: 'AI-Powered Legal Case Management & Document Intelligence case study',
    description:
      'An AI-driven legal case management system that automates document analysis, case tracking, and legal research. Built with Next.js, Node.js, and integrated with OpenAI for natural language processing.',
    tech: ['PHP', 'WORDPRESS'],
    color: '#f0fff4',
    accentColor: '#059669',
    github: 'https://github.com/praneeth074',
    live: 'https://cnainnovative.com',
    featured: true,
  },
  
]

export const EXPERIENCE = [
  {
    period: 'Feb 2026 – Present',
    role: 'Full Stack Developer',
    company: 'ITT Star Global Services pvt ltd',
    location: 'Pune, India',
    description:
      'Leading development of 2+ client projects, delivering scalable web applications with Next.js, Angular and Node.js.',
    tech: ['Angular JS', 'Node.js', 'Express JS','Next.js', 'TypeScript', 'PostgreSQL', 'AWS'],
  },
  {
    period: 'Jul 2025 – Jan 2026',
    role: 'Full Stack Developer Trainee',
    company: 'ITT Star Global Services pvt ltd',
    location: 'Pune, India',
    description:
      'During trianing period, I developed a local merchandise managing software using PHP and MySQL, gaining hands-on experience in full-stack development and database management.',
    tech: ['HTML', 'CSS', 'JavaScript','jQuery','AJAX', 'PHP', 'MySQL', 'WordPress'],
  },

]

export const TESTIMONIALS = [
  
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
