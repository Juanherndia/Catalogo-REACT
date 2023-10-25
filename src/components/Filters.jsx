import { useId } from 'react'
import { useFilters } from '../hooks/useFilters.js'
import './Filters.css'

// Se exporta un componente de React llamado Filtros. 
//Utiliza el gancho useFilters para obtener el estado de los filtros y la función setFilters. 
//También utiliza el gancho useId para generar ID únicos para el filtro minPrice y el filtro de categoría.

//El componente representa una sección con dos controles de filtro: 
//una entrada de rango para seleccionar un precio mínimo y una entrada de selección para seleccionar una categoría. 
//Cuando el valor de la entrada de rango o la entrada de selección cambia, se llaman respectivamente las funciones handleChangeMinPrice o handleChangeCategory, que actualizan el estado de los filtros utilizando la función setFilters.

//El componente devuelve el marcado JSX para la sección de filtro.
export function Filters () {
  const { filters, setFilters } = useFilters()

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

// Se define una función llamada handleChangeMinPrice que toma un evento como parámetro. 
//Dentro de la función, utiliza la función setFilters para actualizar la propiedad minPrice del objeto prevState. 

  const handleChangeMinPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value //La propiedad minPrice se actualiza con el valor de event.target.value.
    }))
  }

  //Se define una función llamada handleChangeCategory que toma un objeto de evento como parámetro. 
  //Dentro de la función, actualiza la propiedad de categoría del objeto de filtros utilizando el valor del objeto de evento. 
  //El objeto de filtros actualizado se obtiene extendiendo el estado anterior y reemplazando la propiedad de categoría.
  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>

      <div>
        <label htmlFor={minPriceFilterId}>Rango de precios:</label>
        <input
          type='range'
          id={minPriceFilterId}
          min='0'
          max='1000'
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Categoria</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value='all'>Todas</option>
          <option value='laptops'>Computadores</option>
          <option value='smartphones'>Celulares</option>
        </select>
      </div>

    </section>

  )
}
