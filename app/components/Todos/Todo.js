import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Todo = ({
  id,
  text,
  completed,
  toggleTodo,
  toggleEditMode,
  deleteTodo,
}) => (
  <div className='todo'>
    <div className='input-group'>
      <span
        onClick={() => toggleTodo(id)}
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}
        className='todo__text'
      >
        {text}
      </span>
      <button onClick={toggleEditMode} className='input-group-addon todo__edit' aria-hidden='true'>
        <i className='fa fa-pencil' aria-hidden='true'></i>
      </button>
      <button onClick={() => deleteTodo(id)} className='input-group-addon todo__delete' aria-hidden='true'>
        <i className='fa fa-trash-o' aria-hidden='true'></i>
      </button>
    </div>
  </div>
)

Todo.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  toggleEditMode: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
}

export default Todo