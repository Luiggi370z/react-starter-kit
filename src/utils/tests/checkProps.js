import checkPropTypes from 'check-prop-types'

export default ({ currentPropTypes, name }, expectedProps) =>
  checkPropTypes(currentPropTypes, expectedProps, 'props', name)
