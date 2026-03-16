import React from 'react'
import { useParams, Link } from 'react-router-dom'
import training from '../data/trainingPosts'

export default function TrainingPost() {
  const { id } = useParams()
  const t = training.find((x) => x.id === id)
  if (!t) return <div>Training not found</div>

  return (
    <section className="training-post">
      <h2>{t.title}</h2>
      <p>{t.summary}</p>
      <pre style={{ whiteSpace: 'pre-wrap', color: 'var(--muted)' }}>{t.details}</pre>
      <div style={{ marginTop: 18 }}>
        <Link to={`/running/${id}`} className="tab">← Back to post</Link>
      </div>
    </section>
  )
}
