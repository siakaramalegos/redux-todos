import React from 'react'
import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

class Provider extends React.Component {
  getChildContext () {
    return {
      store: this.props.store
    }
  }

  render () {
    return this.props.children
  }
}
// Must turn on proptypes for the context feature to work
Provider.childContextTypes = {
  store: React.PropTypes.object
}

ReactDOM.render(
  <Provider store={createStore(todoApp)}>
    <App />
  </Provider>,
  document.getElementById('app')
)
