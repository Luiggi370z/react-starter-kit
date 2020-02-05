import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'components/ui'

const NewFeatureForm = ({ data, getUsers, updateUser }) => {
  const handleOnClick = () => updateUser()

  return (
    <form>
      <Button
        icon={<i className="material-icons">cloud</i>}
        onClick={handleOnClick}
      >
        My Button Text With Icon
      </Button>
      <Button onClick={handleOnClick}>My Button Text</Button>
    </form>
  )
}

NewFeatureForm.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  getUsers: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired
}

export default NewFeatureForm
