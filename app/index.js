import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { reducer as todoApp } from './reducers'
import Root from './components/Root'
import './styles/main.scss'

let store = createStore(todoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  
// Create app DOM node.
const appNode = document.createElement('div')
appNode.id = 'app'
document.body.appendChild(appNode)

render(<Root store={store} />, appNode)