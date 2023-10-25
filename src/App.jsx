import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products.jsx'
import { Header } from './components/Header.jsx'
import { useFilters } from './hooks/useFilters.js'
import { Cart } from './components/Cart.jsx'
import { CartProvider } from './context/cart.jsx'


// Utilizar un gancho personalizado (useFilters) para obtener la función filterProducts. 

function App () {
  const { filterProducts } = useFilters()//Luego llama a filterProducts con la matriz initialProducts para obtener la matriz filteredProducts.

  const filteredProducts = filterProducts(initialProducts)

//El componente devuelve una expresión JSX que representa un componente CartProvider como elemento raíz. 
//También representa un componente de encabezado, un componente de carrito y un componente de productos con la matriz filteredProducts como accesorio.
  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
    </CartProvider>
  )
}
//Además, si el indicador IS_DEVELOPMENT es verdadero, representa un componente de pie de página.

export default App