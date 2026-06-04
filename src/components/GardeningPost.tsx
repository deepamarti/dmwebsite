import React from 'react'
import { useParams, Link } from 'react-router-dom'
import posts, { GardenPost } from '../data/gardeningPosts'

export default function GardeningPost() {
  const { id } = useParams()
  const post = posts.find((p: GardenPost) => p.id === id)

  if (!post) return <div>Post not found</div>

  return (
    <section className="gardening-post">
      <h2>{post.title}</h2>
      <div className="muted">{post.date}</div>
      {post.photos && post.photos.length > 0 && (
        <div className="post-gallery">
          {post.photos.map((p: string) => {
            const src = new URL(`../assets/${p}`, import.meta.url).href
            return <img key={p} className="post-photo" src={src} alt={post.title} />
          })}
        </div>
      )}

      <div style={{ marginTop: 12 }}>
        {post.body.split('\n').map((line: string, i: number) => (
          <p key={i}>{line}</p>
        ))}
      </div>

      <div style={{ marginTop: 18 }}>
        <Link to="/gardening" className="tab">← Back to gardening</Link>
      </div>
    </section>
  )
}
