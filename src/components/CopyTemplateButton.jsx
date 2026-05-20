import { useState } from 'react'
import { blogTemplate } from '../data/site'

export default function CopyTemplateButton() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(blogTemplate)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1400)
  }

  return (
    <button className="ghost-button" type="button" onClick={copy}>
      {copied ? 'Copied template' : 'Copy blog template'}
    </button>
  )
}
