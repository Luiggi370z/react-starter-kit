// import React, { useContext } from 'react'
// import { Route, Redirect } from 'react-router-dom'
// NOTE: Import authentication service, context or selector to have access to auth flags

// Example using context
// import { AuthContext } from 'context/auth'

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const authContext = useContext(AuthContext)
//   const { isAuthenticated, loading } = authContext

//   return (
//     <Route
//       {...rest}
//       render={props =>
//         !isAuthenticated && !loading ? (
//           <Redirect to="/login" />
//         ) : (
//           <Component {...props} />
//         )
//       }
//     />
//   )
// }

// export default PrivateRoute
