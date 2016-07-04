import React from 'react'
// import { connect } from 'react-redux'
// import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

// const mapStateToProps = (state, ownProps) => {
//   return {
//     active: ownProps.filter === state.visibilityFilter
//   }
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     onClick: () => {
//       dispatch(setVisibilityFilter(ownProps.filter))
//     }
//   }
// }

// const FilterLink = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Link)

class FilterLink extends React.Component {
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

FilterLink.contextTypes = {
  store: React.PropTypes.object
}

export default FilterLink
