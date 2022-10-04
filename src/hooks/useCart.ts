import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'

/* ===== CUSTOM HOOK ===== */
export function useCart() {
  const context = useContext(CartContext)
  return context
}
