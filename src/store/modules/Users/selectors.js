import { createSelector } from 'reselect'
import { NAME } from '.'

export const getAll = state => state[NAME]

export const getCounts = createSelector(
  getAll,
  getCompleted,
  getActive,
  (allTodos, completedTodos, activeTodos) => ({
    all: allTodos.length,
    completed: completedTodos.length,
    active: activeTodos.length
  })
)
