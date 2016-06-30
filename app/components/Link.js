import React from 'react'

// class Link extends React.Component {
//   static propTypes = {
//     active: React.PropTypes.bool.isRequired,
//     children: React.PropTypes.node.isRequired,
//     onClick: React.PropTypes.func.isRequired
//   }

//   onClick = (event) => {
//     event.preventDefault()
//     this.props.onClick()
//   }

//   render () {
//     const children = this.props.children
//     const active = this.props.active

//     if (active) {
//       return <span>{children}</span>
//     }

//     return <a href="#" onClick={this.onClick}>{children}</a>
//   }
// }

const Link = ({active, children, onClick}) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a href='#' onClick={(e) => {
      e.preventDefault()
      onClick()
    }}>{children}</a>
  )
}

export default Link
