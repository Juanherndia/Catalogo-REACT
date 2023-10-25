import { useReducer, createContext } from 'react'
import { cartReducer, cartInitialState } from '../reducers/cart.js'

export const CartContext = createContext()


function useCartReducer () { // Se define un gancho personalizado llamado useCartReducer que usa el gancho useReducer de React. 
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)//Inicializa el estado y la función de envío utilizando cartReducer y cartInitialState. 

//También define tres funciones: addToCart, removeFromCart y clearCart, que envían acciones para actualizar el estado. Finalmente, devuelve un objeto que contiene el estado y las tres funciones para uso externo.

  const addToCart = product => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })

  const removeFromCart = product => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  })

  const clearCart = () => dispatch({ type: 'CLEAR_CART' })

  return { state, addToCart, removeFromCart, clearCart }
}

// Exportamos la función llamada CartProvider que toma un accesorio secundario. 
//Utiliza un enlace personalizado llamado useCartReducer para obtener el estado y algunas funciones (addToCart, removeFromCart, clearCart) relacionadas con un carrito de compras. 
//Luego envuelve a los niños en un proveedor de contexto (CartContext.Provider) y pasa el estado y las funciones como valores al proveedor.
export function CartProvider ({ children }) {
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer()

  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      removeFromCart,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
