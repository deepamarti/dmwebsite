import React from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'
import About from './components/About'
import ArtCrafts from './components/ArtCrafts'
import Marathons from './components/Marathons'
import Work from './components/Work'
import RunningPost from './components/RunningPost'
import TrainingPost from './components/TrainingPost'

export default function App() {
  return (
    <div className="app">
      <header className="site-header">
        <NavLink to="/" className="site-title" style={{ textDecoration: 'none' }}>
          Deepa Marti
        </NavLink>
      </header>

      <nav className="tabs" role="tablist" aria-label="Sections">
        {/* About is the home page at '/' */}
        <NavLink to="/" end className={(props: { isActive: boolean }) => 'tab' + (props.isActive ? ' active' : '')}>
          About
        </NavLink>
        <NavLink to="/running" className={(props: { isActive: boolean }) => 'tab' + (props.isActive ? ' active' : '')}>
          Running
        </NavLink>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/art" element={<ArtCrafts />} />
          <Route path="/running" element={<Marathons />} />
          <Route path="/running/:id" element={<RunningPost />} />
          <Route path="/training/:id" element={<TrainingPost />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </main>

      <footer className="footer">© {new Date().getFullYear()} Deepa Marti</footer>
    </div>
  )
}
