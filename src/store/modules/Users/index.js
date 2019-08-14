import * as selectors from './selectors'

// Ducks - Modules
// Ducks Rules:

// Module Data
export const NAME = 'users'

// Action Types
export const ADD = `${NAME}/ADD`

// Action Creators
export const add = text => ({
  type: ADD,
  payload: { text }
})

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
    case ADD:
      return [
        // ...
      ]

    default:
      return state
  }
}

export default { reducer, selectors }
