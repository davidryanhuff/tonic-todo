import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import EditTodo from './EditTodo'
import Todo from './Todo'

class TodoContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { isEditing: false }
    this.toggleEditMode = this.toggleEditMode.bind(this)
  }

  toggleEditMode () {this.setState({ isEditing: !this.state.isEditing })}

  render () {
    return (
      <div>
          {( this.state.isEditing
                ? <EditTodo {...this.props} toggleEditMode={this.toggleEditMode} />
                : <Todo {...this.props} toggleEditMode={this.toggleEditMode} />
          )}
      </div>
    )
  }
}

TodoContainer.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
}

export default TodoContainer