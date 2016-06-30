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
import Link from './components/Link'

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
    <Footer />
  </div>
)

const Footer = () => {
  return (
    <div>
      Show: {'  '}
      <FilterLink filter='SHOW_ALL'>All</FilterLink>
      {'  '}
      <FilterLink filter='SHOW_COMPLETED'>Completed</FilterLink>
      {'  '}
      <FilterLink filter='SHOW_ACTIVE'>Active</FilterLink>
    </div>
  )
}

class FilterLink extends React.Component {
  componentDidMount () {
    this.unsubscribe = store.subscribe( () => this.forceUpdate() )
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {
    const props = this.props
    const state = store.getState()

    return (
      <Link
        active={state.visibilityFilter === props.filter}
        onClick={ () => {
          store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter: props.filter
          })
        }}>
        {props.children}
      </Link>
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

store.subscribe(render)
render()


