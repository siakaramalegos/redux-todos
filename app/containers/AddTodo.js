import React from 'react'
import { connect } from 'react-redux'
// import { addTodo } from '../actions'

let nextTodoId = 0

let AddTodo = ({ dispatch }) => {
    let input

    return (
      <form>
        <input ref={ node => {input = node} } type='text' />
        <button onClick={ (e) => {
          e.preventDefault()
          dispatch({
            type: 'ADD_TODO',
            text: input.value,
            id: nextTodoId++
          })
          input.value = ''
        }}>
          Add Todo
        </button>
      </form>
    )
}

AddTodo = connect()(AddTodo)

export default AddTodo
