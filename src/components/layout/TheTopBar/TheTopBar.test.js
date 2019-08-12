import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr, checkProps } from 'utils/tests'
import TheTopBar from '.'

const createWrapper = props => shallow(<TheTopBar {...props} />)

describe('TheTopBar Component', () => {
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
      title: 'Test',
      doSomething: doSomething
    }
    wrapper = createWrapper(props)
  })

  describe('Rendering', () => {
    it('outputs correct tree', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should render Do Something button', () => {
      const button = findByTestAttr(wrapper, 'test-button')

      expect(button.length).toBe(1)
      expect(
        button
          .children()
          .first()
          .text()
      ).toBe('Do Something')
    })
  })

  describe('Interactions', () => {
    it('should emit do something on click event', () => {
      const button = findByTestAttr(wrapper, 'test-button')
      button.simulate('click')

      expect(doSomething).toHaveBeenCalled()
    })
  })
})
