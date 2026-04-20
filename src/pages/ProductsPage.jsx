import { useState, useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { products } from '../data/products'
import { categories } from '../data/categories'
import ProductCard from '../components/shared/ProductCard'
import './ProductsPage.css'

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeCat = searchParams.get('cat') || 'all'
  const [searchQuery, setSearchQuery] = useState('')

  // Derived state: filtered products
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCat = activeCat === 'all' || p.category === activeCat
      const matchesSearch = 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.nameHindi.includes(searchQuery)
      return matchesCat && matchesSearch
    })
  }, [activeCat, searchQuery])

  const handleCatChange = (catId) => {
    if (catId === 'all') {
      searchParams.delete('cat')
    } else {
      searchParams.set('cat', catId)
    }
    setSearchParams(searchParams)
  }

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="container products-page">
      <header className="products-page__header">
        <h1 className="products-page__title">Our Homemade Collection</h1>
        <p className="text-muted">Traditionally made, naturally dried, and packed with heritage.</p>
      </header>

      {/* Filters & Search */}
      <div className="filters">
        <div className="filters__search">
          <svg className="filters__search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input 
            type="text" 
            placeholder="Search papad by name or flavor..." 
            className="filters__search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="filters__cats">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-chip ${activeCat === cat.id ? 'active' : ''}`}
              onClick={() => handleCatChange(cat.id)}
            >
              <span>{cat.emoji}</span>
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="products-page__count">
        Showing {filteredProducts.length} varieties
      </div>

      {/* Grid */}
      {filteredProducts.length > 0 ? (
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="no-results">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <p>No products found matching your search. Try another variety!</p>
          <button className="btn btn-tertiary" onClick={() => {setSearchQuery(''); handleCatChange('all');}}>Clear all filters</button>
        </div>
      )}
    </div>
  )
}
