import { NavLink, type NavLinkProps } from 'react-router-dom'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Mining', path: '/mining-supply' },
  { label: 'General Supply', path: '/general-supply' },
  { label: 'Travel', path: '/travel-logistics' },
  { label: 'Equipment Hire', path: '/equipment-hire' },
  { label: 'About', path: '/about' }
]

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur bg-dark-900/80 border-b border-dark-700">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <div className="text-lg font-semibold tracking-wide">
            <span className="text-white">SMJ</span>
            <span className="text-brand-red">.</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }: {isActive: boolean}) =>
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

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="btn-primary"
            >
              Contact
            </a>
          </div>

        </div>
      </div>
    </header>
  )
}
