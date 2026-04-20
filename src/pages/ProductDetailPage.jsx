import { useState, useMemo, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { getProductById } from '../data/products'
import useCartStore from '../store/cartStore'
import { VegBadge, StatusBadge } from '../components/shared/Badges'
import QuantityPicker from '../components/shared/QuantityPicker'
import './ProductDetailPage.css'

export default function ProductDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = useMemo(() => getProductById(id), [id])
  const addItem = useCartStore((s) => s.addItem)

  // Selection state
  const [selectedSize, setSelectedSize] = useState(null)
  const [quantity, setQuantity] = useState(1)

  // Initialize size
  useEffect(() => {
    if (product) {
      const defaultSize = product.packSizes.length > 0 
        ? product.packSizes[0] 
        : { label: product.weight, price: product.price, mrp: product.mrp }
      setSelectedSize(defaultSize)
    }
    window.scrollTo(0, 0)
  }, [product])

  if (!product) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '100px 0' }}>
        <h2>Papad not found!</h2>
        <p>Maybe it was so crispy it disappeared.</p>
        <Link to="/products" className="btn btn-primary" style={{ marginTop: '20px' }}>Back to Shop</Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    // We pass product + size override to the store
    // Use an adapted product object for the cart store since it handles the logic
    addItem(product, selectedSize)
    // Adjust quantity in store if supported... wait, cartStore addItem adds 1. 
    // Let's loop if quantity > 1 or better, update cartStore later. 
    // For now, let's just add the requested amount.
    for (let i = 1; i < quantity; i++) {
        addItem(product, selectedSize)
    }

    toast.success('Added to cart')
  }

  return (
    <div className="container pdp">
      
      {/* Breadcrumbs */}
      <nav style={{ marginBottom: 'var(--space-6)', fontSize: '13px' }}>
        <Link to="/products" style={{ color: 'var(--color-text-secondary)' }}>Shop</Link>
        <span style={{ margin: '0 8px', color: 'var(--color-text-tertiary)' }}>/</span>
        <span style={{ color: 'var(--color-text-primary)' }}>{product.name}</span>
      </nav>

      <div className="pdp__grid">
        
        {/* Gallery */}
        <div className="pdp__gallery">
          <div className="pdp__image-container">
            <img src={product.image} alt={product.name} className="pdp__image" />
          </div>
        </div>

        {/* Info */}
        <div className="pdp__info">
          <div className="pdp__badges">
            <StatusBadge status={product.badge} />
            <VegBadge />
          </div>

          <h1 className="pdp__title">{product.name}</h1>
          <span className="pdp__title-hindi font-hindi">{product.nameHindi}</span>

          <div className="pdp__pricing">
            <span className="pdp__price">₹{selectedSize?.price || product.price}</span>
            <span className="pdp__mrp">₹{selectedSize?.mrp || product.mrp}</span>
            <span className="pdp__discount">{product.discount}% OFF</span>
          </div>

          <p className="pdp__desc">
            {product.description}
          </p>

          {/* Size Selection */}
          {product.packSizes.length > 0 && (
            <>
              <h4 className="pdp__label">Select Pack Size</h4>
              <div className="size-grid">
                {product.packSizes.map((size) => (
                  <button 
                    key={size.label} 
                    className={`size-btn ${selectedSize?.label === size.label ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    <span className="size-btn__label">{size.label}</span>
                    <span className="size-btn__price">₹{size.price}</span>
                  </button>
                ))}
              </div>
            </>
          )}

          <h4 className="pdp__label">Quantity</h4>
          <div className="pdp__actions">
            <QuantityPicker value={quantity} onChange={setQuantity} />
            <button className="btn btn-primary pdp__add-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>

          {/* Product Details */}
          <div className="pdp__specs">
            <div className="spec-item">
              <p className="spec-item__label">Ingredients</p>
              <p className="spec-item__value">{product.ingredients}</p>
            </div>
            <div className="spec-item">
              <p className="spec-item__label">Shelf Life</p>
              <p className="spec-item__value">{product.shelfLife}</p>
            </div>
            <div className="spec-item">
              <p className="spec-item__label">Certifications</p>
              <p className="spec-item__value">Homemade, FSSAI Pending</p>
            </div>
            <div className="spec-item">
              <p className="spec-item__label">Shipping</p>
              <p className="spec-item__value">Pan India (3-7 days)</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
