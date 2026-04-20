import './OurStoryPage.css'

export default function OurStoryPage() {
  return (
    <div className="story-page">
      
      {/* Hero */}
      <section className="story-hero">
        <div className="story-hero__bg">
          <img src="/images/story-hero-kitchen.jpg" alt="Traditional Indian Kitchen" className="story-hero__img" />
          <div className="story-hero__overlay"></div>
        </div>
        <div className="story-hero__content container">
          <h1 className="story-hero__title font-display">A Tale of Sunlight & Spices</h1>
          <p className="text-muted" style={{ fontSize: 'var(--text-xl)', maxWidth: '600px', margin: '0 auto' }}>
            From our grandmoher's courtyard to your dining table, Sahu Ji Ke Papad preserves a decades-old family tradition.
          </p>
        </div>
      </section>

      <div className="container">
        
        {/* Section 1 */}
        <section className="story-section">
          <div className="story-content">
            <span className="font-hindi text-primary" style={{ fontSize: 'var(--text-lg)' }}>शुरुआत</span>
            <h2>How It All Began</h2>
            <p>
              In the late 1990s, Sahu Ji began making papads in the small courtyard of her ancestral home. What started as a summer activity involving the women of the family quickly turned into a local phenomenon. 
            </p>
            <p>
              Neighbors loved the perfectly crisp, perfectly spiced discs of goodness. The secret? Absolutely no compromises on the ingredients and drying them under the pure Madhya Pradesh sun.
            </p>
          </div>
          <div className="story-image-wrap">
            <img src="/images/moong-dal-special.png" alt="Hand-rolling papads" />
          </div>
        </section>

        {/* Section 2 */}
        <section className="story-section story-section--reverse">
          <div className="story-content">
            <span className="font-hindi text-primary" style={{ fontSize: 'var(--text-lg)' }}>हमारी विधि</span>
            <h2>The Process We Swear By</h2>
            <p>
              We don't use machines to roll out our papads. Every single papad is hand-rolled by skilled women artisans who have been with us for years. 
            </p>
            <p>
              We source our lentils directly from farmers, grind our own spices to retain maximum flavor, and rely on natural sun-drying. It's a slow process, but it's the only way to achieve that authentic "Sahu Ji" crunch.
            </p>
          </div>
          <div className="story-image-wrap">
            <img src="/images/urad-dal-crispy.png" alt="Sun-drying papads in courtyard" />
          </div>
        </section>

        {/* Values */}
        <section style={{ marginTop: '100px' }}>
          <div style={{ textAlign: 'center' }}>
            <h2 className="font-display">What We Stand For</h2>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <span className="value-card__icon">☀️</span>
              <h3>100% Sun-Dried</h3>
              <p>No artificial heat drying. We rely on the natural warmth of the sun for the perfect texture.</p>
            </div>
            <div className="value-card">
              <span className="value-card__icon">✋</span>
              <h3>Hand-Rolled</h3>
              <p>Rolled with love and precision by women artisans preserving culinary heritage.</p>
            </div>
            <div className="value-card">
              <span className="value-card__icon">🌿</span>
              <h3>Pure Ingredients</h3>
              <p>Zero preservatives. Zero artificial colors. Just lentils, spices, and pure asafoetida (heeng).</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
