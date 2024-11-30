import { useState } from 'react'
import JuiceButton from './components/JuiceButton'
import './App.css'

function App() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="app-container">
      {/* Add bubble elements */}
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      
      <div className="content">
        <img 
          src="/indian-boy.png" 
          alt="Juice" 
          className="juice-image"
        />
        <h1 className="title">🧃 Juice Time! 🧃</h1>
        <JuiceButton isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      </div>
    </div>
  )
}

export default App
