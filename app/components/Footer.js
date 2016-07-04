import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = ({ store }) => {
  return (
    <div>
      Show: {'  '}
      <FilterLink filter='SHOW_ALL' store={store}>All</FilterLink>
      {'  '}
      <FilterLink filter='SHOW_COMPLETED' store={store}>Completed</FilterLink>
      {'  '}
      <FilterLink filter='SHOW_ACTIVE' store={store}>Active</FilterLink>
    </div>
  )
}

export default Footer
