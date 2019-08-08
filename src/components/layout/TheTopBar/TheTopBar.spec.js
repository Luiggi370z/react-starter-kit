import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { findByTestAttr, checkProps } from 'utils/tests'
import TheTopBar from '.'

const setUp = props => shallow(<TheTopBar {...props} />)

describe('TodoAdd Component', () => {
  describe('Check PropTypes', () => {
    it('should not throw a warning', () => {
      const expectedProps = {
        doSomething: () => {},
        title: ''
      }

      const propsErr = checkProps(TheTopBar, expectedProps)
      expect(propsErr).toBeUndefined()
    })
  })

  let wrapper
  let doSomething

  beforeEach(() => {
    doSomething = jest.fn()
    const props = {
      toggleView: doSomething
    }
    wrapper = setUp(props)
  })

  describe('Rendering', () => {
    // it('should render without errors', () => {
    //   expect(toJson(wrapper)).toMatchSnapshot()
    // })

    it('should render Add Task button', () => {
      const button = findByTestAttr(wrapper, 'button')

      expect(button.length).toBe(1)
      expect(
        button
          .children()
          .first()
          .text()
      ).toBe('Add Task')
    })
  })

  describe('Interactions', () => {
    it('should emit toggle view on click event', () => {
      const button = findByTestAttr(wrapper, 'button')
      button.simulate('click')

      expect(doSomething).toHaveBeenCalled()
    })
  })
})
