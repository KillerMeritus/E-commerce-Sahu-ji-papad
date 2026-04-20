import './Badges.css'

export function VegBadge() {
  return (
    <div className="badge-veg" title="100% Vegetarian">
      <div className="badge-veg__dot"></div>
    </div>
  )
}

export function StatusBadge({ status }) {
  if (!status) return null

  const classes = {
    bestseller: 'badge-pill--bestseller',
    new: 'badge-pill--new',
    seasonal: 'badge-pill--seasonal'
  }

  return (
    <span className={`badge-pill ${classes[status] || ''}`}>
      {status}
    </span>
  )
}
