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

let nextTodoId = 0
// TODO: fix input not clearing
class App extends React.Component {
  render () {
    const {todos, visibilityFilter} = this.props
    const visibleTodos = getVisibleTodos(todos, visibilityFilter)

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
          todos={visibleTodos}
          onTodoClick={ (id) => {
            store.dispatch({
              type: 'TOGGLE_TODO',
              id: id
            })
          }} />
        <div>
          Show: {'  '}
          <FilterLink
            filter='SHOW_ALL'
            currentFilter={visibilityFilter}>
              All
          </FilterLink>
          {'  '}
          <FilterLink
            filter='SHOW_COMPLETED'
            currentFilter={visibilityFilter}>
              Completed
          </FilterLink>
          {'  '}
          <FilterLink
            filter='SHOW_ACTIVE'
            currentFilter={visibilityFilter}>
              Active
          </FilterLink>
        </div>
      </div>
    )
  }
}

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

const FilterLink = ({filter, currentFilter, children}) => {
  if (currentFilter === filter) {
    return <span>{children}</span>
  }
  return (
    <a href='#' onClick={ e => {
      e.preventDefault()
      store.dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter
      })
    }}>
      {children}
    </a>
  )
}

store.subscribe(render)
render()


