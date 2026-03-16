import React from 'react'

export default function Work() {
  return (
    <section className="work">
      <h2>Work</h2>
      <p className="muted">Selected projects and professional work.</p>

      <ul className="projects" style={{ marginTop: 12 }}>
        <li>
          <strong>Project A</strong> — Brief description of a web app or product.
        </li>
        <li>
          <strong>Project B</strong> — Short note about tooling or role.
        </li>
        <li>
          <strong>Open Source</strong> — Libraries and contributions.
        </li>
      </ul>
    </section>
  )
}
