import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import useCartStore from '../../store/cartStore'
import useWishlistStore from '../../store/wishlistStore'
import { VegBadge, StatusBadge } from './Badges'
import './ProductCard.css'

export default function ProductCard({ product }) {
  const addItem = useCartStore((s) => s.addItem)
  const { toggleWishlist, isWishlisted } = useWishlistStore()
  
  const active = isWishlisted(product.id)

  const handleAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product)
    toast.success(`${product.name} added to cart!`)
  }

  const handleWishlist = (e) => {
    e.preventDefault()
    e.stopPropagation()
    toggleWishlist(product.id)
    if (!active) {
      toast.success('Added to wishlist', { icon: '❤️' })
    }
  }

  return (
    <article className="product-card">
      {/* Top Floating Actions */}
      <div className="product-card__badges">
        <StatusBadge status={product.badge} />
      </div>
      
      <button 
        className={`product-card__wishlist ${active ? 'product-card__wishlist--active' : ''}`}
        onClick={handleWishlist}
        aria-label={active ? 'Remove from wishlist' : 'Add to wishlist'}
      >
        <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </button>

      {/* Image Section */}
      <Link to={`/product/${product.id}`} className="product-card__image-link">
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-card__image" 
          loading="lazy"
        />
      </Link>

      {/* Info Section */}
      <div className="product-card__content">
        <div className="product-card__header">
          <h3 className="product-card__title">
            <span className="product-card__title-hindi font-hindi">{product.nameHindi}</span>
            {product.name}
          </h3>
          {product.isVeg && <VegBadge />}
        </div>

        <div className="product-card__meta">
          <span>{product.weight}</span>
          <span>•</span>
          <span>Homemade</span>
        </div>

        <div className="product-card__price-row">
          <div className="product-card__prices">
            <span className="product-card__mrp">₹{product.mrp}</span>
            <span className="product-card__price">₹{product.price}</span>
          </div>
          
          <button 
            className="btn btn-primary product-card__add-btn" 
            onClick={handleAdd}
            aria-label="Add to cart"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  )
}
