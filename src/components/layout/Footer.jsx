import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          
          {/* Brand */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <span className="footer__logo-icon">🫓</span>
              <span className="footer__logo-hindi font-display">साहू जी के पापड़</span>
            </Link>
            <p className="footer__tagline">
              Bringing the authentic taste of homemade, sun-dried papads from our family kitchen to yours since 1998. No preservatives, just love.
            </p>
          </div>

          {/* shop */}
          <div className="footer__col">
            <h4 className="footer__col-title">Shop</h4>
            <ul className="footer__links">
              <li><Link to="/products">All Products</Link></li>
              <li><Link to="/products?cat=moong-dal">Moong Dal Special</Link></li>
              <li><Link to="/products?cat=urad-dal">Classic Urad</Link></li>
              <li><Link to="/products?cat=combo">Combo Packs</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer__col">
            <h4 className="footer__col-title">Company</h4>
            <ul className="footer__links">
              <li><Link to="/our-story">Our Story</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/shipping">Shipping Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__col-title">Get in Touch</h4>
            <div className="footer__contact">
              <div className="footer__contact-item">
                <span className="footer__contact-icon">📍</span>
                <span>Sahu Ji Niwas, Near Main Market, Indore, MP 452001</span>
              </div>
              <div className="footer__contact-item">
                <span className="footer__contact-icon">📞</span>
                <span>+91 98765 43210</span>
              </div>
              <div className="footer__contact-item">
                <span className="footer__contact-icon">✉️</span>
                <span>hello@sahujipapad.com</span>
              </div>
            </div>
          </div>

        </div>

        <div className="footer__bottom">
          <p>© {year} Sahu Ji Ke Papad. All rights reserved.</p>
          <div className="footer__socials">
            <a href="#" className="footer__social-link">Instagram</a>
            <a href="#" className="footer__social-link">Facebook</a>
            <a href="#" className="footer__social-link">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
