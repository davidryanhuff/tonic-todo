import {handleActions} from 'redux-actions'

const initialState = {
    todos: [
        {id: "1", text: "Set up a meeting with Tonic", completed: false},
        {id: "2", text: "Tell Tonic how excited I am", completed: false},
        {id: "3", text: "Finish todo app", completed: true},
    ]
}

const addTodo = (state, { payload }) => {
  return Object.assign({}, state, {
    todos: [
      ...state.todos,
      {
        id: payload.id,
        text: payload.text,
        completed: false
      }
    ]
  })
}

const toggleTodo = (state, { payload }) => {
  return Object.assign({}, state, {
    todos: state.todos.map((todo) => {
      if (todo.id === payload) {
        return Object.assign({}, todo, {
          completed: !todo.completed
        })
      }
      return todo
    })
  })
}

const deleteTodo = (state, { payload }) => {
  return Object.assign({}, state, {
    todos: state.todos.filter(({ id }) => id !== payload)
  })
}

const editTodo = (state, { payload }) => {
  return Object.assign({}, state, {
    todos: state.todos.map((todo) => {
      if (todo.id === payload.id) {
        return Object.assign({}, todo, {
          text: payload.text
        })
      }
      return todo
    })
  })
}


export const reducer = handleActions({
    'ADD_TODO': addTodo,
    'TOGGLE_TODO': toggleTodo,
    'DELETE_TODO': deleteTodo,
    'EDIT_TODO': editTodo,
  }, initialState)
  