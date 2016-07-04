import React from 'react'
import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

ReactDOM.render(
  <App store={createStore(todoApp)} />,
  document.getElementById('app')
)
