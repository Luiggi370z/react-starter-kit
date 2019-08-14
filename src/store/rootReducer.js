import { combineReducers } from 'redux'
import { users } from './modules'

export default combineReducers({
  [users.NAME]: users.reducer
})
