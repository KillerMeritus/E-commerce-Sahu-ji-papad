import './QuantityPicker.css'

export default function QuantityPicker({ value, onChange, min = 1, max = 10 }) {
  
  const handleDecrement = (e) => {
    e.preventDefault()
    if (value > min) onChange(value - 1)
  }

  const handleIncrement = (e) => {
    e.preventDefault()
    if (value < max) onChange(value + 1)
  }

  return (
    <div className="quantity-picker">
      <button 
        className="quantity-picker__btn" 
        onClick={handleDecrement}
        disabled={value <= min}
        aria-label="Decrease quantity"
      >
        −
      </button>
      
      <span className="quantity-picker__val">{value}</span>
      
      <button 
        className="quantity-picker__btn" 
        onClick={handleIncrement}
        disabled={value >= max}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  )
}
