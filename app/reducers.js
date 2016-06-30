import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from './actions';
import { combineReducers } from 'redux';

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
          ...state,
          {
            text: action.text,
            completed: false,
            id: action.id
          }
        ];
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo;
      });
    default:
      return state;
  }
}

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

// Combine Reducers basically does this (assumes boilerplate followed)
// function todoAPP (state = {}, action) {
//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     todos: todos(state.todos, action)
//   };
// }
const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;
