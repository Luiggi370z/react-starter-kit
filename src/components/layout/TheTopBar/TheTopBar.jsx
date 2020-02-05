// TheTopBar should only be 1 by page/instance
// Will lead/organize the layout of all the child components

import React from 'react'
import PropTypes from 'prop-types'

const TheTopBar = props => {
  const { title, doSomething } = props

  return (
    <div>
      <div>{title}</div>
      <button onClick={doSomething} type="button" data-test="test-button">
        Do Something
      </button>
    </div>
  )
}

TheTopBar.propTypes = {
  title: PropTypes.string.isRequired,
  doSomething: PropTypes.func.isRequired
}

export default TheTopBar
