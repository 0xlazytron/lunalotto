import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

const VideoComponent = ({ poster, card2 }) => {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const videoRef = useRef(null)

  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

  useEffect(() => {
    if (isSafari && videoRef.current) {
      const handleScroll = () => {
        const videoPosition = videoRef.current.getBoundingClientRect().top
        if (videoPosition < window.innerHeight) {
          videoRef.current.play()
          window.removeEventListener('scroll', handleScroll)
        }
      }

      window.addEventListener('scroll', handleScroll)

      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [isSafari])

  return (
    <div className="rounded-lg overflow-hidden">
      {!videoLoaded && <img src={poster} alt="Loading..." />}
      <video
        ref={videoRef}
        src={card2}
        playsInline
        autoPlay={!isSafari} // AutoPlay only for non-Safari browsers
        loop
        muted
        preload="auto"
        className={`w-full ${videoLoaded ? 'block' : 'hidden'}`}
        type="video/webm"
        onCanPlay={() => setVideoLoaded(true)}
      />
    </div>
  )
}

// Define propTypes for validation
VideoComponent.propTypes = {
  poster: PropTypes.string.isRequired, // assuming poster is a URL string
  card2: PropTypes.string.isRequired, // assuming card2 is a URL string
}

export default VideoComponent
