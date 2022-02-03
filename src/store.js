import { combineReducers, createStore } from '@reduxjs/toolkit'
import { napsterReducer } from './reducers/napsterReducer'

const rootReducer = combineReducers({
  napster: napsterReducer
})

export const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
