// src/store/cartStore.js
// Zustand cart store with localStorage persistence

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useCartStore = create(
  persist(
    (set, get) => ({

      // ---- STATE ----
      items: [], // Array of { key, product, selectedSize, quantity }

      // ---- ACTIONS ----

      addItem: (product, selectedSize = null) => {
        const { items } = get()
        const size = selectedSize || { label: product.unit, price: product.price }

        // Unique key: product id + size label
        const key = `${product.id}__${size.label}`
        const existing = items.find((item) => item.key === key)

        if (existing) {
          // Increase quantity
          set({
            items: items.map((item) =>
              item.key === key
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          })
        } else {
          // Add new line item
          set({
            items: [
              ...items,
              {
                key,
                product,
                selectedSize: size,
                quantity: 1,
              },
            ],
          })
        }
      },

      removeItem: (key) => {
        set({ items: get().items.filter((item) => item.key !== key) })
      },

      updateQuantity: (key, quantity) => {
        if (quantity <= 0) {
          get().removeItem(key)
          return
        }
        set({
          items: get().items.map((item) =>
            item.key === key ? { ...item, quantity } : item
          ),
        })
      },

      clearCart: () => set({ items: [] }),

    }),
    {
      name: 'sahu-ji-cart', // localStorage key
    }
  )
)

export default useCartStore
