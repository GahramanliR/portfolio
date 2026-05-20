import { Link, useParams, Navigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import SectionHeader from '../components/SectionHeader'
import { getPostBySlug } from '../data/blogs'

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) return <Navigate to="/blog" replace />

  return (
    <article className="page blog-post">
      <SectionHeader index="06" title={post.title} kicker={post.date || 'Blog post'} />
      <div className="blog-post__content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </div>
      <Link to="/blog" className="ghost-link">
        ← Back to blogs
      </Link>
    </article>
  )
}
