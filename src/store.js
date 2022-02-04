import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { napsterReducer } from './reducers/napsterReducer'

const rootReducer = combineReducers({
  napster: napsterReducer
})

export const store = createStore(rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)
