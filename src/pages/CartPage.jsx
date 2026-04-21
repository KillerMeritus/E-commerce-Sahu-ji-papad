import { Link } from 'react-router-dom'
import useCartStore from '../store/cartStore'
import QuantityPicker from '../components/shared/QuantityPicker'
import './CartPage.css'

export default function CartPage() {
  const { items, removeItem, updateQuantity } = useCartStore()

  // Calculate total locally since store doesn't have getTotalPrice
  const total = items.reduce((acc, item) => acc + (item.selectedSize.price * item.quantity), 0)
  const shipping = total > 500 || total === 0 ? 0 : 50 // Free shipping over 500
  const grandTotal = total > 0 ? total + shipping : 0

  // Generate WhatsApp text
  const getWhatsAppLink = () => {
    const phoneNumber = "919109435853" // Sahu Ji's WhatsApp number
    let msg = `Hello Sahu Ji Ke Papad,\n\nI would like to place an order:\n\n`
    
    items.forEach((item, index) => {
      msg += `${index + 1}. ${item.product.nameEn} (${item.selectedSize.label})\n`
      msg += `   Qty: ${item.quantity} x ₹${item.selectedSize.price} = ₹${item.quantity * item.selectedSize.price}\n\n`
    })

    msg += `Subtotal: ₹${total}\n`
    msg += `Shipping: ${shipping === 0 ? 'FREE' : `₹${shipping}`}\n`
    msg += `Grand Total: ₹${grandTotal}\n\n`
    msg += `Please confirm my order and share payment details.`

    const encodedMsg = encodeURIComponent(msg)
    return `https://wa.me/${phoneNumber}?text=${encodedMsg}`
  }

  return (
    <div className="container cart-page">
      <header className="cart-page__header">
        <h1 className="cart-page__title">Your Basket</h1>
      </header>

      {items.length === 0 ? (
        <div className="cart-empty">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
            <path d="M3 6h18" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          <h2 style={{ marginBottom: 'var(--space-4)' }}>Your basket is empty</h2>
          <p style={{ marginBottom: 'var(--space-6)' }}>Explore our traditional homemade papads to fill it up!</p>
          <Link to="/products" className="btn btn-primary">Start Shopping</Link>
        </div>
      ) : (
        <div className="cart-layout">
          
          {/* Items */}
          <div className="cart-items">
            {items.map(item => (
              <div key={item.key} className="cart-item">
                <img src={item.product.image} alt={item.product.nameEn} className="cart-item__img" />
                
                <div className="cart-item__info">
                  <h3 className="cart-item__title">{item.product.nameEn}</h3>
                  <p className="cart-item__meta">Pack Size: {item.selectedSize.label}</p>
                  
                  <div className="cart-item__controls">
                    <span className="cart-item__price">₹{item.selectedSize.price * item.quantity}</span>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <QuantityPicker 
                        value={item.quantity} 
                        onChange={(val) => updateQuantity(item.key, val)} 
                      />
                      <button 
                        className="cart-item__remove"
                        onClick={() => removeItem(item.key)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Box */}
          <div className="cart-summary">
            <h3>Order Summary</h3>
            
            <div className="cart-summary__row">
              <span>Subtotal ({items.length} items)</span>
              <span>₹{total}</span>
            </div>
            
            <div className="cart-summary__row">
              <span>Shipping cost</span>
              <span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
            </div>

            {shipping > 0 && total > 0 && (
              <p style={{ fontSize: '12px', color: 'var(--color-primary)', marginBottom: 'var(--space-4)' }}>
                Add ₹{500 - total} more to your cart for FREE shipping!
              </p>
            )}

            <div className="cart-summary__row cart-summary__row--total">
              <span>Grand Total</span>
              <span>₹{grandTotal}</span>
            </div>

            <a 
              href={getWhatsAppLink()} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="checkout-btn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              Order via WhatsApp
            </a>
            
            <p className="checkout-notice">
              You will be redirected to WhatsApp. Our team will verify your order and provide payment instructions (UPI/Bank Transfer).
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
