import { combineReducers } from 'redux'
import { bigModule, users } from './modules'

export default combineReducers({
  [users.actionTypes.NAME]: users.reducer,
  [bigModule.actionTypes.NAME]: bigModule.reducer
})
