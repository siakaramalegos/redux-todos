import React from 'react'
// import { connect } from 'react-redux'
// import { setVisibilityFilter } from '../actions'
// import Link from '../components/Link'

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

export default FilterLink
