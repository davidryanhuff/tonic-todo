import cuid from 'cuid'
import {createAction} from 'redux-actions'

// TODOS
const todo = (
  text = '',
  id = cuid(),
  completed = false
) => ({id, text, completed})

export const addTodo = createAction('ADD_TODO', todo)

export const toggleTodo = createAction('TOGGLE_TODO')

export const deleteTodo = createAction('DELETE_TODO')

export const editTodo = createAction('EDIT_TODO')
