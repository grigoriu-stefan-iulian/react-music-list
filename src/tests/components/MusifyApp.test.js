import React from 'react'
import renderer from 'react-test-renderer'
import MusifyApp from '../../components/MusifyApp'

test('should render component correctly', () => {
    const component  = renderer.create(<MusifyApp />)
    const wrapper = component.toJSON()
    expect(wrapper).toMatchSnapshot()
})