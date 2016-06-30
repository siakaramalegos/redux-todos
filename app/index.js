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

const AddTodo = ({onAddClick}) => {
  let input

  return (
    <form>
      <input ref={ node => {input = node} } type='text' />
      <button onClick={ (e) => {
        e.preventDefault()
        onAddClick(input.value)
        input.value = ''
      }}>
        Add Todo
      </button>
    </form>
  )
}

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

const Footer = ({visibilityFilter, onFilterClick}) => {
  return (
    <div>
      Show: {'  '}
      <FilterLink
        filter='SHOW_ALL'
        currentFilter={visibilityFilter}
        onClick={onFilterClick}>
          All
      </FilterLink>
      {'  '}
      <FilterLink
        filter='SHOW_COMPLETED'
        currentFilter={visibilityFilter}
        onClick={onFilterClick}>
          Completed
      </FilterLink>
      {'  '}
      <FilterLink
        filter='SHOW_ACTIVE'
        currentFilter={visibilityFilter}
        onClick={onFilterClick}>
          Active
      </FilterLink>
    </div>
  )
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

const FilterLink = ({filter, currentFilter, children, onClick}) => {
  if (currentFilter === filter) {
    return <span>{children}</span>
  }
  return (
    <a href='#' onClick={ e => {
      e.preventDefault()
      onClick(filter)
    }}>
      {children}
    </a>
  )
}

store.subscribe(render)
render()


