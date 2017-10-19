import React, {Component} from 'react'
import {connect} from 'react-redux'

class EditTodo extends Component {
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
    this.props.editTodo({
        id: this.props.id,
        text: this.state.text
    })
    this.setState(state => ({text: ''}))
    this.props.toggleEditMode()
  }

  componentDidMount(){
    this.editInput.focus()
    this.editInput.value = this.props.text
 }

  render () {
    return (
      <form onSubmit={this.handleSubmit} className='edit-form'>
        <div className='input-group'>
          <input
            ref={(input) => { this.editInput = input }} 
            type='text'
            value={this.state.text}
            onChange={this.handleChange}
            placeholder='I need to...'
            className='form-control'
          />
          <button type='submit' className='input-group-addon'>
            <i className='fa fa-floppy-o' aria-hidden='true'></i>
          </button>
          <button onClick={this.props.toggleEditMode} className='input-group-addon'>
            <i className='fa fa-ban' aria-hidden='true'></i>
          </button>
        </div>
      </form>
    )
  }
}

export default EditTodo