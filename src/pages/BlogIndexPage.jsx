import SectionHeader from '../components/SectionHeader'
import BlogCard from '../components/BlogCard'
import CopyTemplateButton from '../components/CopyTemplateButton'
import { getAllPosts } from '../data/blogs'

export default function BlogIndexPage() {
  const posts = getAllPosts()

  return (
    <section className="page">
      <SectionHeader index="06" title="Blogs" />
      <div className="cards cards--blog">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  )
}
