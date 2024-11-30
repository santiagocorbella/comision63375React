import { useState, createContext } from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
  console.log('CART:',cart)

  const addItem = (productToAdd) => {
    if(!isInCart(productToAdd.id)) {
      setCart(prev=>[...prev, productToAdd])
    } else {
      console.error('El producto ya esta agregado')  
    }
  }
  
  const isInCart = (id) => {
    return cart.some(prod => prod.id == id)
  }

  const clearCart = () => {
    setCart([])
  }

  const removeItem = (id) => {
    const updateCart = cart.filter(prod => prod.id != id)
    setCart(updateCart)
  }

  const getTotalQuantity = () => {
    let acumulador = 0

    cart.forEach(prod => {
      acumulador += prod.quantity
    })

    return acumulador
  }
  
  const totalQuantity = getTotalQuantity()

  const getTotal = () => {
    let acumulador = 0

    cart.forEach(prod => {
      acumulador += prod.quantity * prod.price
    })

     return acumulador
  }

  const total = getTotal()

    return (
        <CartContext.Provider value={{cart, addItem, totalQuantity, total, clearCart, removeItem}}>
            {children}
</CartContext.Provider> 
    )
}    