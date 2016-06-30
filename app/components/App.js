import React from 'react'
import VisibleTodoList from '../containers/VisibleTodoList'
import AddTodo from '../containers/AddTodo'
import Footer from './Footer'

// To delete:
import TodoList from './TodoList'

let nextTodoId = 0

class App extends React.Component {
  render () {
    return (
      <div>
        <button onClick={ () => {
          store.dispatch({
            type: 'ADD_TODO',
            text: 'test',
            id: nextTodoId++
          })
        }}>
          Add Todo
        </button>
        <TodoList todos={this.props.todos} />
      </div>
    )
  }
}

export default App
