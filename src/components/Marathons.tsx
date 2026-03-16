import React from 'react'
import { Link } from 'react-router-dom'
import posts from '../data/runningPosts'

export default function Marathons() {
  return (
    <section className="marathons">
      <h2>Running</h2>
      <p className="muted">Some of the races I've run</p>

      <div className="posts">
        {posts.map((p) => (
          <article className="post" key={p.id}>
            <h3 className="post-title">
              <Link to={`/running/${p.id}`} className="tab">{p.title}</Link>
            </h3>
            <div className="post-meta muted">{p.date}</div>
          </article>
        ))}
      </div>
    </section>
  )
}
