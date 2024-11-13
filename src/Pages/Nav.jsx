import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom' // For navigation to other pages
import { Link as ScrollLink, scroller } from 'react-scroll' // For scrolling to sections within the same page
import { FaBars, FaTimes, FaInstagram, FaDiscord } from 'react-icons/fa' // Social icons
import logo from '../assets/logo.svg'
import { FaTwitter, FaTelegramPlane } from 'react-icons/fa'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrollTarget, setScrollTarget] = useState(null)
  const navigate = useNavigate()
  const location = useLocation()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // Scroll to section if we set a target (after navigation)
  useEffect(() => {
    if (scrollTarget) {
      scroller.scrollTo(scrollTarget, {
        smooth: true,
        duration: 500,
      })
      setScrollTarget(null) // Clear scroll target after scrolling
    }
  }, [location.pathname, scrollTarget])

  const handleScrollToSection = (section) => {
    if (location.pathname === '/') {
      // If already on the home page, just scroll to the section
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
      })
    } else {
      // Set scroll target and navigate to home page, then scroll after navigation
      setScrollTarget(section)
      navigate('/')
    }
  }

  const navItems = [
    { name: 'HOME', type: 'router', to: '/' }, // Navigates to index page
    { name: 'COLLECTION', type: 'scroll', to: 'collection' }, // Scrolls to collection section
    { name: 'SERVICES', type: 'router', to: '/services' }, // Navigates to services page
    { name: 'ABOUT US', type: 'router', to: '/about' }, // Navigates to about page
    { name: 'ROAD MAP', type: 'scroll', to: 'roadmap' }, // Scrolls to roadmap section
  ]

  return (
    <nav className="w-full absolute top-0 left-0 right-0 z-50 text-[16px] py-4 text-white transition-all duration-300 bg-transparent  bg-[#052035]  md:bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex items-center justify-between">
          <div className="cursor-pointer">
            <img
              src={logo}
              className="lg:w-30 w-[100px]"
              alt="Ultrachand Crypto"
            />
          </div>
          <div className="hidden jack text-[16px] md:block">
            <div className="ml-10 flex space-x-4">
              {navItems.map((item) =>
                item.type === 'router' ? (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="text-white hover:text-white px-3 py-2 rounded-md text-[20px] cursor-pointer"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <div
                    key={item.name}
                    onClick={() => handleScrollToSection(item.to)}
                    className="text-white hover:text-white px-3 py-2 rounded-md text-[20px] font-light cursor-pointer"
                  >
                    {item.name}
                  </div>
                ),
              )}
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-[#86C248] hover:bg-red-600 transition-all hover:scale-105 duration-300 text-white font-bold py-2 px-4 rounded-full">
              Connect Wallet
            </button>
            <a
              href="https://www.instagram.com/lunalotto.io/profilecard/?igsh=Z240NHlydnc1aTRv"
              target="_blank"
              className="p-1 rounded-lg shadow-lg border border-gray-600 bg-white/5"
            >
              {' '}
              <FaInstagram className="w-6 h-6 hover:scale-110 transition-transform duration-300 cursor-pointer" />
            </a>
            <a
              href="https://discord.gg/ZDX7wR29"
              target="_blank"
              className="p-1 rounded-lg shadow-lg border border-gray-600 bg-white/5"
            >
              {' '}
              <FaDiscord className="w-6 h-6 hover:scale-110 transition-transform duration-300 cursor-pointer" />
            </a>
            <a
              href="https://x.com/lotto_luna?s=21&t=LLImIrUCTHvvTKb0c2vcUg"
              target="_blank"
              className="p-1 rounded-lg shadow-lg border border-gray-600 bg-white/5"
            >
              {' '}
              <FaTwitter className="w-6 h-6 hover:scale-110 transition-transform duration-300 cursor-pointer" />
            </a>
            <a
              href="https://t.me/LLottoCasino"
              target="_blank"
              className="p-1 rounded-lg shadow-lg border border-gray-600 bg-white/5"
            >
              <FaTelegramPlane className="w-6 h-6 hover:scale-110 transition-transform duration-300 cursor-pointer" />
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden py-5  bg-[#052035] rounded-lg ">
          <div className="px-2 pt-2 pb-3 jack flex flex-col items-center justify-center space-y-1 sm:px-3">
            {navItems.map((item) =>
              item.type === 'router' ? (
                <Link
                  key={item.name}
                  to={item.to}
                  className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              ) : (
                <div
                  key={item.name}
                  onClick={() => {
                    handleScrollToSection(item.to)
                    toggleMenu()
                  }}
                  className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                >
                  {item.name}
                </div>
              ),
            )}
            <button className="mt-4 bg-[#86C248] transition-all font-sans hover:scale-105 duration-300 hover:bg-red-600 text-white  py-2 px-4 rounded-full">
              Connect Wallet
            </button>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.instagram.com/lunalotto.io/profilecard/?igsh=Z240NHlydnc1aTRv"
                target="_blank"
                className="p-1 rounded-lg shadow-lg border border-gray-600 bg-white/5"
              >
                {' '}
                <FaInstagram className="w-6 h-6 hover:scale-110 transition-transform duration-300 cursor-pointer" />
              </a>
              <a
                href="https://discord.gg/ZDX7wR29"
                target="_blank"
                className="p-1 rounded-lg shadow-lg border border-gray-600 bg-white/5"
              >
                {' '}
                <FaDiscord className="w-6 h-6 hover:scale-110 transition-transform duration-300 cursor-pointer" />
              </a>
              <a
                href="https://x.com/lotto_luna?s=21&t=LLImIrUCTHvvTKb0c2vcUg"
                target="_blank"
                className="p-1 rounded-lg shadow-lg border border-gray-600 bg-white/5"
              >
                {' '}
                <FaTwitter className="w-6 h-6 hover:scale-110 transition-transform duration-300 cursor-pointer" />
              </a>
              <a
                href="https://t.me/LLottoCasino"
                target="_blank"
                className="p-1 rounded-lg shadow-lg border border-gray-600 bg-white/5"
              >
                <FaTelegramPlane className="w-6 h-6 hover:scale-110 transition-transform duration-300 cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
