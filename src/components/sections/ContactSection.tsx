'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Github, Linkedin, Twitter, CheckCircle, Mail, MapPin } from 'lucide-react'
import { SITE } from '@/lib/data'

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

const socials = [
  { icon: Github, label: 'GitHub', href: SITE.github, handle: '@alexmorgan' },
  { icon: Linkedin, label: 'LinkedIn', href: SITE.linkedin, handle: 'Alex Morgan' },
  { icon: Twitter, label: 'Twitter', href: SITE.twitter, handle: '@alexmorgan' },
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
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center justify-center h-full py-24 text-center"
                >
                  <div className="success-icon w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-6">
                    <CheckCircle size={32} className="text-green-500" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-black mb-3">Message sent!</h3>
                  <p className="text-gray-400 text-sm max-w-xs">
                    Thank you for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                    className="mt-8 text-xs text-gray-400 hover:text-black transition-colors animated-link"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-8 bg-white p-8 lg:p-10 rounded-3xl border border-gray-100 shadow-sm"
                >
                  <div className="grid grid-cols-2 gap-6">
                    <FormField
                      label="Name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                    <FormField
                      label="Email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <FormField
                    label="Subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                  <div className={`form-group relative ${form.message ? 'has-value' : ''}`}>
                    <label className="form-label">Message</label>
                    <textarea
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      required
                      className="form-input resize-none pt-4"
                      aria-label="Message"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary w-full flex items-center justify-center gap-3 py-4 rounded-full text-sm font-medium tracking-wide disabled:opacity-60"
                  >
                    <span>{loading ? 'Sending...' : 'Send Message'}</span>
                    <motion.div
                      animate={loading ? { rotate: 360 } : { rotate: 0 }}
                      transition={loading ? { repeat: Infinity, duration: 1, ease: 'linear' } : {}}
                      className="relative z-10"
                    >
                      <Send size={14} />
                    </motion.div>
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
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
