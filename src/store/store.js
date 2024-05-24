import { configureStore } from '@reduxjs/toolkit'
import Alif from '../reducers/Alif'

export const store = configureStore({
  reducer: {
    Alif:Alif

  },
})