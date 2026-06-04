import React from 'react'
import { Link } from 'react-router-dom'
import posts, { GardenPost } from '../data/gardeningPosts'

export default function Gardening() {
  return (
    <section className="gardening">
      <h2>Gardening</h2>
      <p className="muted">Notes and observations from the garden.</p>

      <div className="posts">
        {posts.map((p: GardenPost) => (
          <article className="post" key={p.id}>
            <h3 className="post-title">
              <Link to={`/gardening/${p.id}`} className="tab">{p.title}</Link>
            </h3>
            <div className="post-meta muted">{p.date}</div>
          </article>
        ))}
      </div>
    </section>
  )
}
