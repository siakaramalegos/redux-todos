import React from 'react'
import FilterLink from '../containers/FilterLink'

// const Footer = () => (
//   <p>
//     Show:
//     {'  '}
//     <FilterLink filter="SHOW_ALL">All</FilterLink>
//     {', '}
//     <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
//     {', '}
//     <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
//   </p>
// )

const Footer = ({visibilityFilter, onFilterClick}) => {
  return (
    <div>
      Show: {'  '}
      <FilterLink
        filter='SHOW_ALL'
        currentFilter={visibilityFilter}
        onClick={onFilterClick}>
          All
      </FilterLink>
      {'  '}
      <FilterLink
        filter='SHOW_COMPLETED'
        currentFilter={visibilityFilter}
        onClick={onFilterClick}>
          Completed
      </FilterLink>
      {'  '}
      <FilterLink
        filter='SHOW_ACTIVE'
        currentFilter={visibilityFilter}
        onClick={onFilterClick}>
          Active
      </FilterLink>
    </div>
  )
}

export default Footer
