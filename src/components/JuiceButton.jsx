import { useRef, useState } from 'react'
import './JuiceButton.css'

function JuiceButton({ isPlaying, setIsPlaying }) {
  const videoRef = useRef(null)
  const [showMessage, setShowMessage] = useState(false)

  const handleClick = () => {
    if (!isPlaying) {
      videoRef.current.play()
      setIsPlaying(true)
      setShowMessage(false)
    } else {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
      setIsPlaying(false)
      setShowMessage(false)
    }
  }

  const handleVideoEnd = () => {
    setIsPlaying(false)
    setShowMessage(true)
  }

  return (
    <div className="juice-container">
      <button 
        className={`juice-button ${isPlaying ? 'playing' : ''}`} 
        onClick={handleClick}
      >
        {isPlaying ? 'Reset' : 'Juice Peena Hai?'}
      </button>
      <video 
        ref={videoRef}
        className={`juice-video ${isPlaying ? 'visible' : ''}`}
        onEnded={handleVideoEnd}
      >
        <source src="/juice-pilado.mp4" type="video/mp4" />
      </video>
      {showMessage && (
        <div className="funny-message">
          Lo pee liya juice? 😋
        </div>
      )}
    </div>
  )
}

export default JuiceButton 