'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Github, Linkedin, Twitter, CheckCircle, Mail, MapPin, ExternalLink } from 'lucide-react'
import { SITE } from '@/lib/data'

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

const socials = [
  { icon: Github, label: 'GitHub', href: SITE.github, handle: '@praneeth074' },
  { icon: Linkedin, label: 'LinkedIn', href: SITE.linkedin, handle: 'praneeth-dev' },
]

export function ContactSection() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="py-32 bg-[#fafafa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-20"
        >
          <span className="text-xs tracking-[0.25em] uppercase text-gray-400 font-medium">06</span>
          <div className="w-12 h-px bg-gray-200" />
          <span className="text-xs tracking-[0.25em] uppercase text-gray-400 font-medium">Contact</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold tracking-tight mb-6 text-black"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            >
              Let&apos;s build something remarkable.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="text-gray-500 leading-relaxed mb-10 text-[1.05rem]"
            >
              Whether you have a project in mind, a role to fill, or just want to say hello —
              my inbox is always open.
            </motion.p>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="space-y-4 mb-12"
            >
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3 text-sm text-gray-600 hover:text-accent transition-colors group"
              >
                <div className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all">
                  <Mail size={14} />
                </div>
                {SITE.email}
              </a>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <div className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center">
                  <MapPin size={14} />
                </div>
                {SITE.location}
              </div>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="space-y-3"
            >
              {socials.map(({ icon: Icon, label, href, handle }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-white hover:border-accent/30 hover:shadow-md transition-all duration-300 group"
                >
                  <Icon size={18} className="text-gray-400 group-hover:text-accent transition-colors duration-200" />
                  <div>
                    <p className="text-xs font-medium text-black">{label}</p>
                    <p className="text-xs text-gray-400">{handle}</p>
                  </div>
                  <motion.div className="ml-auto" whileHover={{ x: 3 }}>
                    <Send size={12} className="text-gray-300 group-hover:text-accent transition-colors" />
                  </motion.div>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
>
  {/* Contact Card */}
  <div className="bg-white p-8 lg:p-10 rounded-3xl border border-gray-100 shadow-sm text-center">
    
    <div className="w-16 h-16 mx-auto rounded-full bg-black text-white flex items-center justify-center mb-6">
      <Send size={24} />
    </div>

    <h3 className="font-display font-bold text-2xl text-black mb-4">
      Let&apos;s Connect
    </h3>

    <p className="text-gray-500 text-sm leading-relaxed max-w-md mx-auto mb-8">
      I&apos;m currently available for freelance work, collaborations, and full-time opportunities.
      Feel free to reach out via email or connect with me on LinkedIn.
    </p>

    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      
      <a
                        href="mailto:saipraneethreddy2004@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex items-center gap-2 px-6 py-3 rounded-full text-xs font-medium"
                      >
                        <span>Mail me</span>
                        <ExternalLink size={12} className="relative z-10" />
                      </a>

      <a
        href="https://www.linkedin.com/in/praneeth-dev"
        target="_blank"
        rel="noopener noreferrer"
        className="border border-gray-200 hover:border-black transition-colors px-6 py-3 rounded-full text-sm font-medium tracking-wide"
      >
        Message on LinkedIn
      </a>
    </div>
  </div>
</motion.div>
        </div>
      </div>
    </section>
  )
}

function FormField({
  label, name, type, value, onChange, required,
}: {
  label: string
  name: string
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
}) {
  return (
    <div className={`form-group relative ${value ? 'has-value' : ''}`}>
      <label className="form-label" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="form-input"
        aria-label={label}
      />
    </div>
  )
}
