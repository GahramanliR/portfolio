import { Link } from 'react-router-dom'

export default function BlogCard({ post }) {
  return (
    <Link to={`/blog/${post.slug}`} className="blog-card">
      <div className="blog-card__meta">
        <span>{post.date}</span>
        <span className="blog-card__dot" />
      </div>
      <h2 className="blog-card__title">{post.title}</h2>
      <p className="blog-card__excerpt">{post.excerpt}</p>
    </Link>
  )
}
