// Store Configuration: create store, applyMiddleware, etc

import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import rootReducer from './rootReducer'

// Middleware example:
// const middleware = [thunk]

const initialState = {}

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools()
  // composeWithDevTools(applyMiddleware(...middleware)),
)

export default store
