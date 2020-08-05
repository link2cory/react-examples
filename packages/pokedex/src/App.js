import React from 'react'
import logo from './logo.svg'
import './App.css'
import Pokemon from './components/Pokemon'

function App() {
  return (
    <div>
      <Pokemon id={1} />
      <Pokemon id={2} />
      <Pokemon id={3} />
    </div>
  )
}

export default App
