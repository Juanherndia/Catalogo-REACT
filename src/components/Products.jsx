import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import { useCart } from '../hooks/useCart.js'

//Se exporta un componente de React llamado Productos que incorpora un accesorio llamado productos. 
//Dentro del componente, utiliza un gancho personalizado llamado useCart para obtener acceso a una matriz de carritos y dos funciones: addToCart y removeFromCart.
export function Products ({ products }) {
  const { addToCart, removeFromCart, cart } = useCart()

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  } //La función checkProductInCart verifica si un producto determinado está presente en la matriz del carrito utilizando el método some y comparando la identificación de cada artículo en la matriz del carrito con la identificación del producto.

//El componente muestra una lista de productos, y cada producto está representado por un elemento <li>. 
//Muestra la miniatura, el título y el precio del producto. 

  return (
    <main className='products'>
      <ul>
        {products.slice(0, 10).map(product => {
          const isProductInCart = checkProductInCart(product)

          return (
            <li key={product.id}>
              <img
                src={product.thumbnail}
                alt={product.title}
              />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button
                  style={{ backgroundColor: isProductInCart ? 'red' : '#09f' }} onClick={() => {
                    isProductInCart //El color de fondo y el ícono del botón cambian según si el producto está en el carrito o no. 
                      ? removeFromCart(product)
                      : addToCart(product) //También muestra un botón que permite al usuario agregar o eliminar el producto del carrito en función de si ya está en el carrito o no.
                  }}
                >
                  {
                    isProductInCart
                      ? <RemoveFromCartIcon /> //Si el producto ya está en el carrito, al hacer clic en el botón se eliminará del carrito mediante la función removeFromCart. 
                      : <AddToCartIcon /> //Si el producto no está en el carrito, al hacer clic en el botón se agregará al carrito usando la función addToCart.
                  }
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
