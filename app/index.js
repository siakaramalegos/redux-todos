import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
// import App from './components/App'

let store = createStore(todoApp)

const render = () => {
  ReactDOM.render(
    <App todos={store.getState().todos} />,
    document.getElementById('app')
  )
}

// To delete:
import TodoList from './components/TodoList'

let nextTodoId = 0

class App extends React.Component {
  render () {
    return (
      <div>
        <input
          ref={ node => {this.input = node} }
          type='text' />
        <button onClick={ () => {
          store.dispatch({
            type: 'ADD_TODO',
            text: this.input.value,
            id: nextTodoId++
          })
          this.input = ''
        }}>
          Add Todo
        </button>
        <TodoList
          todos={this.props.todos}
          onTodoClick={ (id) => {
            store.dispatch({
              type: 'TOGGLE_TODO',
              id: id
            })
          }} />
      </div>
    )
  }
}

store.subscribe(render)
render()


