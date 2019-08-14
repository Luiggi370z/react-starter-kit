import { createSelector } from 'reselect'

// Module Data
const NAME = 'users'

// Action Types
const actionTypes = {
  NAME,
  ADD: `${NAME}/ADD`
}

// Action Creators
const actions = {
  add: text => ({
    type: actionTypes.ADD,
    payload: { text }
  })
}

// Reducer
const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
]

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD:
      return [
        // ...
      ]

    default:
      return state
  }
}

// Selectors (memo getters)

//Get State of the module
const getAll = state => state[NAME]

const getCounts = createSelector(
  getAll,
  allTodos => ({
    all: allTodos.length
  })
)

const selectors = {
  getAll,
  getCounts
}

const users = {
  actionTypes,
  actions,
  reducer,
  selectors
}

export default users
