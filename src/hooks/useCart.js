import { useContext } from 'react'
import { CartContext } from '../context/cart.jsx'
// Exportamos un gancho personalizado llamado useCart. 
//Utiliza el gancho useContext de React para acceder a CartContext. 
export const useCart = () => {
  const context = useContext(CartContext)

  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider') //Si CartContext no está definido, arroja un error. De lo contrario, devuelve el CartContext
  }

  return context
}
