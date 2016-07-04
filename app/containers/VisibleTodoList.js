// import { connect } from 'react-redux'
// import { toggleTodo } from '../actions'
import React from 'react'
import TodoList from '../components/TodoList'

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

// const mapStateToProps = (state) => {
//   return {
//     todos: getVisibleTodos(state.todos, state.visibilityFilter)
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onTodoClick: (id) => dispatch(toggleTodo(id))
//   }
// }

// const VisibleTodoList = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(TodoList)

class VisibleTodoList extends React.Component {
  componentDidMount () {
    const { store } = this.context
    this.unsubscribe = store.subscribe( () => this.forceUpdate() )
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {
    const props = this.props
    const { store } = this.context
    const state = store.getState()
    const visibleTodos = getVisibleTodos(state.todos, state.visibilityFilter)

    return (
      <TodoList
        todos={visibleTodos}
        onTodoClick={(id) => {
          store.dispatch({
            type: 'TOGGLE_TODO',
            id: id
          })
        }} />
    )
  }
}

VisibleTodoList.contextTypes = {
  store: React.PropTypes.object
}

export default VisibleTodoList
