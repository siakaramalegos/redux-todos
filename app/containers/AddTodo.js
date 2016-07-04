import React from 'react'
// import { connect } from 'react-redux'
// import { addTodo } from '../actions'

// let AddTodo = ({ dispatch }) => {
//   let input

//   return (
//     <div>
//       <form onSubmit={ e => {
//         e.preventDefault()
//         if (!input.value.trim()) {
//           return
//         }
//         dispatch(addTodo(input.value))
//         input.value = ''
//       }}>
//         <input ref={ node => input = node } />
//         <button type="submit">
//           Add Todo
//         </button>
//       </form>
//     </div>
//   )
// }

// AddTodo = connect()(AddTodo)
let nextTodoId = 0

const AddTodo = (props, { store }) => {
    let input

    return (
      <form>
        <input ref={ node => {input = node} } type='text' />
        <button onClick={ (e) => {
          e.preventDefault()
          store.dispatch({
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

AddTodo.contextTypes = {
  store: React.PropTypes.object
}

export default AddTodo
