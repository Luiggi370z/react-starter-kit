// Example of Context State
// ------------------------

// import React, { useReducer } from 'react'
// import axios from 'axios'
// import exampleReducer from './exampleReducer'
// import ExampleContext from './exampleContext'
// import * as types from './types'

// const initialState = {
//   propA: ''
//   // More props if you need
// }

// const ExampleState = ({ children }) => {
//   const [state, dispatch] = useReducer(exampleReducer, initialState)

//   const methodA = async () => {
//     dispatch({ type: types.LOADING })

//     try {
//       const res = await axios.get('/api/auth')
//       dispatch({ type: types.SUCCESS, payload: res.data })
//     } catch (e) {
//       dispatch({ type: types.ERROR })
//     }
//   }

//   return (
//     <ExampleContext.Provider
//       value={{
//         // Declare props
//         propA: state.propA,
//         // Declare methods
//         methodA
//       }}
//     >
//       {children}
//     </ExampleContext.Provider>
//   )
// }

// export default ExampleState
