import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import useCartStore from '../../store/cartStore'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const items = useCartStore((s) => s.items)
  const totalItems = items.reduce((n, i) => n + i.quantity, 0)

  // Glassmorphism trigger on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">

        {/* Logo */}
        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          <span className="navbar__logo-icon">🫓</span>
          <div className="navbar__logo-text">
            <span className="navbar__logo-hindi font-display">साहू जी के पापड़</span>
            <span className="navbar__logo-english">Sahu Ji Ke Papad</span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="navbar__links">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
          <NavLink to="/products" className={({ isActive }) => (isActive ? 'active' : '')}>
            Products
          </NavLink>
          <NavLink to="/our-story" className={({ isActive }) => (isActive ? 'active' : '')}>
            Our Story
          </NavLink>
        </nav>

        {/* Right: Cart + Hamburger */}
        <div className="navbar__actions">
          <Link to="/cart" className="navbar__cart" aria-label="View cart">
            <svg className="navbar__cart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            {totalItems > 0 && (
              <span className="navbar__cart-badge" key={totalItems}>
                {totalItems}
              </span>
            )}
          </Link>

          {/* Hamburger — mobile only */}
          <button
            className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="navbar__drawer">
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/products" onClick={closeMenu}>
            Products
          </NavLink>
          <NavLink to="/our-story" onClick={closeMenu}>
            Our Story
          </NavLink>
          <Link to="/cart" onClick={closeMenu} className="navbar__drawer-cart">
            🛒 Cart {totalItems > 0 && `(${totalItems})`}
          </Link>
        </div>
      )}
    </header>
  )
}
