import React from 'react'
import PropTypes from 'prop-types'

// Composition
// Keep things simple and clean
// More reusability

const Button = ({ onClick, icon, children }) => {
  return (
    <button type="button" onClick={onClick}>
      {icon && <span>{icon}</span>}
      {children}
    </button>
  )
}

Button.defaultProps = {
  icon: null
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.node,
  children: PropTypes.node.isRequired
}

export default Button
