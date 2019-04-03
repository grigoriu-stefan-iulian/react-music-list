import React from 'react'
import renderer from 'react-test-renderer'
import ArtistList from '../../components/ArtistList'

test('should render ArtistList correctly', () => {
    const wrapper = renderer.create(<ArtistList />)
    const instance = wrapper.toJSON()
    expect(instance).toMatchSnapshot()
})