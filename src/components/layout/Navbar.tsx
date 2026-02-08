import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import smjLogo from '../../assets/brand/smjLogo.png'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Mining', path: '/mining-supply' },
  { label: 'General Supply', path: '/general-supply' },
  { label: 'Travel', path: '/travel-logistics' },
  { label: 'Equipment Hire', path: '/equipment-hire' },
  { label: 'About', path: '/about' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()

  const handleNav = (path: string) => {
    navigate(path)
    setMobileOpen(false)
  }

  return (
    <>
      {/* NAVBAR */}
      <header className="
        fixed top-0 z-50 w-full
        backdrop-blur bg-dark-900/70
        border-b border-dark-700
      ">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-16 items-center justify-between">

            {/* Logo */}
            <div className="flex items-center">
              <div
                className="
                  flex items-center justify-center
                  h-12 px-3
                  rounded-xl
                  bg-white/90
                  backdrop-blur
                  shadow-md
                  ring-1 ring-black/10
                  cursor-pointer
                "
                onClick={() => navigate('/')}
              >
                <img
                  src={smjLogo}
                  alt="SMJ Logo"
                  className="h-8 w-auto object-contain"
                />
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map(item => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm transition ${
                      isActive
                        ? 'text-white'
                        : 'text-text-secondary hover:text-white'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-dark-950 flex flex-col">
          <div className="flex items-center justify-between h-16 px-4 border-b border-dark-700">
            <span className="text-lg font-semibold">Menu</span>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-white text-xl"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          <nav className="flex flex-col px-6 py-8 space-y-6">
            {navItems.map(item => (
              <button
                key={item.path}
                onClick={() => handleNav(item.path)}
                className="text-left text-lg text-text-secondary hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
