import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import todoApp from './reducers';
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from './actions';

let store = createStore(todoApp);

// Log initial state
console.log(store.getState());

// Every time state changes, log it
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

// Dispatch some actions
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Learning Redux With Todos</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
