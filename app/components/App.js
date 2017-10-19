import React from 'react'
import Header from './Shared/Header'
import Footer from './Shared/Footer'
import AddTodo from './Todos/AddTodo'
import TodoList from './Todos/TodoList'

const App = () => {
  return (
    <main>
        <Header />
        <TodoList />
        <Footer />
    </main>
  )
}

export default App