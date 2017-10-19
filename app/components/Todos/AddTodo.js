import React, {Component} from 'react'
import PropTypes from 'prop-types'

class AddTodo extends Component {
  constructor () {
    super()
    this.state = {
      text: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    this.setState({text: e.target.value})
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.addTodo(this.state.text)
    this.setState(state => ({text: ''}))
  }
  
  componentDidMount(){
    this.addTodoInput.focus(); 
 }

  render () {
    return (
      <form onSubmit={this.handleSubmit} className='add-todo-form'>
        <input
          ref={(input) => { this.addTodoInput = input; }} 
          type='text'
          value={this.state.text}
          onChange={this.handleChange}
          placeholder='I need to...'
          className='form-control'
        />
      </form>
    )
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
}

export default AddTodo