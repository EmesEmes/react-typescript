import { useEffect, useState, useMemo } from "react"

export const useCart = () => {
    
    const initialCart = () => {
        const localStorageCart = localStorage.getItem('cart')
        return localStorageCart ? JSON.parse(localStorageCart) : []
      }
    
      const [cart, setCart] = useState(initialCart)
    
      const MAX_ITEMS = 5
      const MIN_ITEMS = 1
    
      useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
      }, [cart])
    
      function addToCart(item) {
        const itemExists = cart.findIndex((guitar) => guitar.id === item.id)
        
        if(itemExists >= 0) {
          if(cart[itemExists].quantity >= MAX_ITEMS) {
            return
          }
          const updatedCart = [...cart]
          updatedCart[itemExists].quantity++
          setCart(updatedCart)
        } else {
          item.quantity = 1
          setCart([...cart, item])
        }
    
      }
    
      function removeFromCart(id) {
        const updatedCart = cart.filter((guitar) => guitar.id !== id)
        setCart(updatedCart)
      }
    
      function increaseQuantity(id) {
        const updatedCart = cart.map((guitar) => {
          if(guitar.id === id && guitar.quantity < MAX_ITEMS) {
            return {
              ...guitar,
              quantity: guitar.quantity + 1
            }
          }
          return guitar
        })
        setCart(updatedCart)
      }
    
      function decreaseQuantity(id) {
        const updatedCart = cart.map((guitar) => {
          if(guitar.id === id && guitar.quantity > MIN_ITEMS) {
            return {
              ...guitar,
              quantity: guitar.quantity - 1
            }
          }
          return guitar
        })
        setCart(updatedCart)
      }
    
      function clearCart() {
        setCart([])
      }

      // State derivado
    const isEmpty = useMemo( () => cart.length === 0, [cart] )

    const cartTotal = useMemo(() => cart.reduce((total, item) => total + (item.quantity * item.price), 0), [cart])

    return {
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        isEmpty,
        cartTotal
    }
}