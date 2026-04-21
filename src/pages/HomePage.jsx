import { Link } from 'react-router-dom'
import { categories, getFeaturedProducts } from '../data/products'
import ProductCard from '../components/shared/ProductCard'
import './HomePage.css'

export default function HomePage() {
  const featured = getFeaturedProducts()
  const displayCategories = categories.filter(c => c.id !== 'all')

  return (
    <div className="home-page">
      
      {/* Hero Section */}
      <section className="home-hero">
        <div className="home-hero__bg">
          <img 
            src="/images/hero-papad-collection.jpg" 
            alt="Authentic Sahu Ji Papad assortment" 
            className="home-hero__image"
          />
          <div className="home-hero__overlay"></div>
        </div>
        
        <div className="container">
          <div className="home-hero__content">
            <span className="badge badge-turmeric home-hero__badge">100% Homemade & Pure</span>
            <h1 className="home-hero__title">
              <span className="home-hero__title-hindi font-display">असली घर का स्वाद, हर निवाले में।</span>
              The Authentic Taste of Home, in Every Bite.
            </h1>
            <p className="home-hero__desc">
              Three decades of tradition, sun-dried to perfection. Hand-rolled papads made with premium lentils and family-secret spices.
            </p>
            <div className="home-hero__btns">
              <Link to="/products" className="btn btn-primary">Shop Now</Link>
              <Link to="/our-story" className="btn btn-secondary">Our Story</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Showcase */}
      <section className="section bg-surface">
        <div className="container">
          <div className="section-title">
            <span className="section-title__hindi font-hindi">हमारी श्रेणियां</span>
            <h2>Our Traditional Varieties</h2>
          </div>

          <div className="category-grid">
            {displayCategories.map(cat => (
              <Link to={`/products?cat=${cat.id}`} key={cat.id} className="category-card">
                <span className="category-card__emoji">{cat.emoji}</span>
                <div className="category-card__info">
                  <span className="category-card__title">
                    {cat.labelEn}
                    <span className="category-card__title-hindi font-hindi">{cat.labelHi}</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="section-title__hindi font-hindi">विशेष उत्पाद</span>
            <h2>Bestsellers You'll Love</h2>
          </div>

          <div className="products-grid">
            {featured.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 'var(--space-12)' }}>
            <Link to="/products" className="btn btn-secondary">View All Products</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="home-cta">
            <h2 className="font-display">Bulk Orders for Celebrations?</h2>
            <p>Whether it's a wedding, a festival, or a family gathering, Sahu Ji Ke Papad adds that perfect crunch to your special moments. Chat with us for bulk pricing.</p>
            <Link to="/contact" className="btn btn-primary" style={{ backgroundColor: '#fff', color: 'var(--color-primary-dark)' }}>
              Inquire Now
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
