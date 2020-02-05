// Everything in it's own place.
// Container should pass props and that's it.

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { users } from 'store/modules'
import NewFeatureForm from './Form'

const { getData } = users.selectors
const { fetchAll, update } = users.actions

const mapStateToProps = state => ({
  data: getData(state)
})

// Component actions should be under component context and based on Reducer context actions
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getUsers: fetchAll,
      updateUser: update
    },
    dispatch
  )

const NewFeatureContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewFeatureForm)

export default NewFeatureContainer
