import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
// import App from './components/App'

let store = createStore(todoApp)

const render = () => {
  ReactDOM.render(
    <App {...store.getState()} />,
    document.getElementById('app')
  )
}

// To delete:
import TodoList from './components/TodoList'
import AddTodo from './containers/AddTodo'
import Footer from './components/Footer'

let nextTodoId = 0
const App = ({todos, visibilityFilter}) => (
  <div>
    <AddTodo
      onAddClick={ (text) =>
        store.dispatch({
          type: 'ADD_TODO',
          text,
          id: nextTodoId++
        })
      } />
    <TodoList
      todos={getVisibleTodos(todos, visibilityFilter)}
      onTodoClick={ (id) => {
        store.dispatch({
          type: 'TOGGLE_TODO',
          id: id
        })
      }} />
    <Footer
      visibilityFilter={visibilityFilter}
      onFilterClick={ (filter) => {
        store.dispatch({
          type: 'SET_VISIBILITY_FILTER',
          filter
        })
      }} />
  </div>
)

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter( todo => todo.completed )
    case 'SHOW_ACTIVE':
      return todos.filter( todo => !todo.completed )
  }
}

store.subscribe(render)
render()


