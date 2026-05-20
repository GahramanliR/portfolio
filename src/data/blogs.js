const modules = import.meta.glob('../content/blogs/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
})

function slugify(filePath) {
  const fileName = filePath.split('/').pop().replace(/\.md$/i, '')
  return fileName
    .toLowerCase()
    .replace(/['"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)

  if (!match) {
    return { data: {}, content: raw.trim() }
  }

  const frontmatterText = match[1]
  const content = match[2].trim()
  const data = {}

  for (const line of frontmatterText.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue

    const colonIndex = trimmed.indexOf(':')
    if (colonIndex === -1) continue

    const key = trimmed.slice(0, colonIndex).trim()
    let value = trimmed.slice(colonIndex + 1).trim()

    value = value.replace(/^(["'])/, '').replace(/(["'])$/, '')
    data[key] = value
  }

  return { data, content }
}

function parsePost(filePath, raw) {
  const { data, content } = parseFrontmatter(raw)
  const slug = slugify(filePath)

  return {
    slug,
    title: data.title || slug.replace(/-/g, ' '),
    date: data.date || '',
    excerpt: data.excerpt || '',
    cover: data.cover || '',
    content,
  }
}

const posts = Object.entries(modules)
  .map(([filePath, raw]) => parsePost(filePath, raw))
  .sort((a, b) => (a.date < b.date ? 1 : -1))

export function getAllPosts() {
  return posts
}

export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug)
}
