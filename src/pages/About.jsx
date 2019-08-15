import React from 'react'
import PropTypes from 'prop-types'

const About = ({ history }) => {
  const goBack = () => {
    history.goBack()
  }

  return (
    <div>
      <h3>About this app</h3>
      <p>Example app with react starter kit</p>
      <p>Version: 1.0.0</p>
      <button type="button" onClick={goBack}>
        Go back
      </button>
    </div>
  )
}

About.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired
}

export default About
