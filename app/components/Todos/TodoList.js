import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import { addTodo, toggleTodo, deleteTodo, editTodo } from '../../actions'

import AddTodo from './AddTodo'
import TodoContainer from './TodoContainer'

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = {
  deleteTodo,
  toggleTodo,
  editTodo,
  addTodo,
}

const Todos = ({addTodo, deleteTodo, toggleTodo, editTodo, todos}) => {
  const todoActions = {deleteTodo, toggleTodo, editTodo}
  const renderTodos = todos.map(todo => <TodoContainer key={todo.id} {...todo} {...todoActions} />)
  return (
    <section className='container todo-list'>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <AddTodo addTodo={addTodo} />
          {renderTodos}
        </div>
      </div>
    </section>
  )
}

Todos.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })).isRequired,
  addTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
}

const TodosList = connect(mapStateToProps, mapDispatchToProps)(Todos)

export default TodosList
