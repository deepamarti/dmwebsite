import React from 'react'
import About from './components/About'

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Hi </h1>
        <p className="subtitle"> engineer, runner, crafter</p>
      </header>
      {/* About component */}
      <footer className="footer">© {new Date().getFullYear()} Deepa Marti</footer>
    </div>
  )
}
