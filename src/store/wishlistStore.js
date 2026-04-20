// src/store/wishlistStore.js
// Zustand wishlist store with localStorage persistence

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useWishlistStore = create(
  persist(
    (set, get) => ({
      items: [], // Array of product IDs (strings)

      toggleWishlist: (productId) => {
        const { items } = get()
        if (items.includes(productId)) {
          set({ items: items.filter((id) => id !== productId) })
        } else {
          set({ items: [...items, productId] })
        }
      },

      isWishlisted: (productId) => get().items.includes(productId),
    }),
    {
      name: 'sahu-ji-wishlist', // localStorage key
    }
  )
)

export default useWishlistStore
