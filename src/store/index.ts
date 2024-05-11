import { configureStore } from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/carrinho'
import favoritarReducer from './reducers/favorito'

import api from '../services'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritar: favoritarReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (defaultMiddleware) => defaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
