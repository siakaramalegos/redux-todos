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

store.subscribe(render)
render()


