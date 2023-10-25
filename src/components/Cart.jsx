import './Cart.css'

import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons.jsx'
import { useCart } from '../hooks/useCart.js'

// Se define un componente funcional llamado CartItem en JavaScript. 
//Toma algunos accesorios (miniatura, precio, título, cantidad, addToCart) y genera un elemento de lista (<li>) con una imagen, título, precio, cantidad y un botón. 
//Cuando se hace clic en el botón, llama a la función addToCart
function CartItem ({ thumbnail, price, title, quantity, addToCart }) {
  return (
    <li>
      <img
        src={thumbnail}
        alt={title}
      />
      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer>
        <small>
          Qty: {quantity}
        </small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}


// Exportamos un componente de React llamado Cart. 
//Se muestra una interfaz de carrito de compras con una casilla de verificación, una lista de artículos en el carrito y un botón para borrar el carrito. 
//El componente Cart utiliza algunos enlaces personalizados (useId y useCart) para generar una ID única para la casilla de verificación y obtener los datos del carrito y las funciones relacionadas. La lista de artículos en el carrito se representa mediante la función de mapa y cada artículo se representa como un componente CartItem.
export function Cart () {
  const cartCheckboxId = useId()
  const { cart, clearCart, addToCart } = useCart()

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        <ul>
          {cart.map(product => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              {...product}
            />
          ))}
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
