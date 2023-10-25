export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

// actualizar localStorage con estado para carrito
export const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

const UPDATE_STATE_BY_ACTION = {
  [CART_ACTION_TYPES.ADD_TO_CART]: (state, action) => {
    const { id } = action.payload
    const productInCartIndex = state.findIndex(item => item.id === id)

    // Usamos structuredClone
    if (productInCartIndex >= 0) {
      
       const newState = structuredClone(state)
       newState[productInCartIndex].quantity += 1

      updateLocalStorage(newState)
      return newState
    }

    const newState = [
      ...state,
      {
        ...action.payload, // producto
        quantity: 1
      }
    ]

    updateLocalStorage(newState)
    return newState
  },
  [CART_ACTION_TYPES.REMOVE_FROM_CART]: (state, action) => {
    const { id } = action.payload
    const newState = state.filter(item => item.id !== id)
    updateLocalStorage(newState)
    return newState
  },
  [CART_ACTION_TYPES.CLEAR_CART]: () => {
    updateLocalStorage([])
    return []
  }
}

// Se toman dos argumentos: estado y acción. 
export const cartReducer = (state, action) => {
  const { type: actionType } = action//Deestructura la propiedad de tipo del objeto de acción y la asigna a actionType.
  const updateState = UPDATE_STATE_BY_ACTION[actionType] // Luego busca una función de actualización correspondiente en un objeto llamado UPDATE_STATE_BY_ACTION según el tipo de acción. 
  return updateState ? updateState(state, action) : state //Llama a la función de actualización con el estado y la acción y devuelve el estado actualizado si la función de actualización existe; de ​​lo contrario, devuelve el estado actual.
}
