import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

// Layout
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <BrowserRouter>
      {/* Toast notification container */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#FFFFFF',
            color: '#1C1917',
            border: '1px solid rgba(224, 192, 177, 0.4)',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '14px',
          },
          success: {
            iconTheme: {
              primary: '#F97316',
              secondary: '#FFFFFF',
            },
          },
        }}
      />

      {/* Persistent layout */}
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<div>Home — Phase 4</div>} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  )
}

export default App
