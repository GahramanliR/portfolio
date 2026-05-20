import { useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import { profile } from '../data/site'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const update = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }))
  }

  const send = () => {
    if (!form.name || !form.email || !form.message) return
    const subject = encodeURIComponent(`Message from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.email}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section className="page page--narrow">
      <SectionHeader index="07" title="Contact" />
      <div className="form">
        <label className="field">
          <span>Name</span>
          <input value={form.name} onChange={update('name')} placeholder="Your name" />
        </label>
        <label className="field">
          <span>Email</span>
          <input value={form.email} onChange={update('email')} placeholder="you@email.com" type="email" />
        </label>
        <label className="field">
          <span>Message</span>
          <textarea value={form.message} onChange={update('message')} placeholder="Write your message..." />
        </label>
        <button className="button button--accent" type="button" onClick={send}>
          Send email
        </button>
      </div>
    </section>
  )
}
