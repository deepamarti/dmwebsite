import React from 'react'

export default function ArtCrafts() {
  return (
    <section className="artcrafts">
      <h2>Art & Crafts</h2>
      <p className="muted">A small collection of projects, DIYs and experiments.</p>

      <div className="gallery">
        <article className="card">
          <div className="card-thumb" />
          <h3>Hand-stitched Bookmark</h3>
          <p className="muted">A quick embroidered bookmark made from recycled fabric.</p>
        </article>
        <article className="card">
          <div className="card-thumb" />
          <h3>Paper Quilling</h3>
          <p className="muted">Small decorative pieces made with quilled paper.</p>
        </article>
        <article className="card">
          <div className="card-thumb" />
          <h3>Mini Pottery</h3>
          <p className="muted">Hand-shaped ceramic pieces glazed in soft tones.</p>
        </article>
      </div>
    </section>
  )
}
