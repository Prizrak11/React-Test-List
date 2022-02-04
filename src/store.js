import { configureStore } from '@reduxjs/toolkit'
import { napsterReducer } from './features/napster/napsterSlice'

export const store = configureStore({
  reducer: {
    napster: napsterReducer
  }
})
