import React from 'react'
import { useParams, Link } from 'react-router-dom'
import posts from '../data/runningPosts'

export default function RunningPost() {
  const { id } = useParams()
  const post = posts.find((p) => p.id === id)

  if (!post) return <div>Post not found</div>

  return (
    <section className="running-post">
      <h2>{post.title}</h2>
      <div className="muted">{post.date}</div>
  {post.location && <div className="muted">{post.location}</div>}
      {post.photos && post.photos.length > 0 && (
        <div className="post-gallery">
          {post.photos.map((p: string) => (
            <img key={p} className="post-photo" src={`/src/assets/${p}`} alt={post.title} />
          ))}
        </div>
      )}
      <div style={{ marginTop: 12 }}>
        {post.body.split('\n').map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>

      <div style={{ marginTop: 18 }}>
        <Link to="/running" className="tab">← Back to running</Link>
        {post.id && (
          <Link to={`/training/${post.id}`} className="tab" style={{ marginLeft: 12 }}>
            View training →
          </Link>
        )}
      </div>
    </section>
  )
}
