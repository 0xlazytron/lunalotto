import { useRef, useState, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import card from '../assets/webm/100.webm'
import card2 from '../assets/webm/500.webm'
import card3 from '../assets/webm/1000.webm'
import card4 from '../assets/webm/5000.webm'
import card5 from '../assets/webm/10000.webm'
import card6 from '../assets/webm/25000.webm'
import card7 from '../assets/webm/50000.webm'

import placeholder1 from '../assets/posters/100.png'
import placeholder2 from '../assets/posters/500.png'
import placeholder3 from '../assets/posters/1000.png'
import placeholder4 from '../assets/posters/5000.png'
import placeholder5 from '../assets/posters/10000.png'
import placeholder6 from '../assets/posters/25000.png'
import placeholder7 from '../assets/posters/50000.png'

const collections = [
  {
    number: '100',
    video: card,
    placeholder: placeholder1,
    tailwindClass: 'w-full lg:h-[300px]',
  },
  {
    number: '500',
    video: card2,
    placeholder: placeholder2,
    tailwindClass: 'w-full lg:h-[300px] rounded-lg',
  },
  {
    number: '1000',
    video: card3,
    placeholder: placeholder3,
    tailwindClass: 'w-full lg:h-[300px] shadow-lg',
  },
  {
    number: '5000',
    video: card4,
    placeholder: placeholder4,
    tailwindClass: 'w-full lg:h-[300px]',
  },
  {
    number: '10000',
    video: card5,
    placeholder: placeholder5,
    tailwindClass: 'w-full lg:h-[300px] rounded-xl',
  },
  {
    number: '25000',
    video: card6,
    placeholder: placeholder6,
    tailwindClass: 'w-full lg:h-[300px] shadow-2xl',
  },
  {
    number: '500000',
    video: card7,
    placeholder: placeholder7,
    tailwindClass: 'w-full lg:h-[300px]',
  },
]

const Collections = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1, dots: true },
      },
    ],
  }

  return (
    <section
      id="collection"
      className="text-white relative py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 z-[-5] bg-[#052035]"></div>
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
        <header className="text-center">
          <h2 className="text-6xl jack lg:text-6xl mb-4">
            LUNA <span className="text-[#85CD4F]">COLLECTIONS</span>
          </h2>
          <p className="text-gray-400 mb-6">
            Multiple Chains, One Home. Stack up all your NFTs from across
            blockchains.
          </p>
        </header>

        {/* Slick Slider */}
        <Slider {...settings} className="w-full">
          {collections.map((collection, index) => (
            <VideoCard key={index} collection={collection} />
          ))}
        </Slider>
      </div>
    </section>
  )
}

// VideoCard Component for each slide
// eslint-disable-next-line react/prop-types
const VideoCard = ({ collection }) => {
  const videoRef = useRef(null)
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current.load()
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 },
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="p-2">
      <div className="flex flex-col gap-2">
        <div className="flex justify-center items-center">
          {!videoLoaded && (
            <img
              // eslint-disable-next-line react/prop-types
              src={collection.placeholder}
              // eslint-disable-next-line react/prop-types
              alt={`Placeholder for ${collection.number}`}
              // eslint-disable-next-line react/prop-types
              className={collection.tailwindClass}
            />
          )}
          <video
            ref={videoRef}
            // eslint-disable-next-line react/prop-types
            src={collection.video}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            // eslint-disable-next-line react/prop-types
            className={`${collection.tailwindClass} ${
              videoLoaded ? 'block' : 'hidden'
            }`}
            // eslint-disable-next-line react/prop-types
            alt={`Luna Collection ${collection.number}`}
            type="video/webm"
            onCanPlay={() => setVideoLoaded(true)}
          />
        </div>
        <button className="bg-[#85CD4F] mx-auto px-3 py-2 rounded-full max-w-fit font-semibold hover:bg-red-600 duration-300 transition-colors">
          Coming Soon!
        </button>
      </div>
    </div>
  )
}

export default Collections
