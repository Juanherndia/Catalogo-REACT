import { useContext } from 'react'
import { FiltersContext } from '../context/filters.jsx'

//Definir un gancho de React personalizado llamado useFilters. 👍
export function useFilters () {
  const { filters, setFilters } = useContext(FiltersContext) //El enlace utiliza el enlace useContext para acceder a los filtros y valores setFilters desde FiltersContext. También define una función llamada filterProducts que filtra una serie de productos según los filtros minPrice y categoría. 
//El gancho devuelve un objeto con los valores filters, filterProducts y setFilters.

// Este fragmento de código define una función llamada filterProducts que toma una serie de productos como entrada. 
  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        //Filtra los productos en función de dos condiciones: el precio del producto debe ser mayor o igual que filters.minPrice, y la categoría del producto debe ser la misma que filters.category, o filters.category debe establecerse en "todos". 
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  return { filters, filterProducts, setFilters } //Luego se devuelven los productos filtrados.
}
