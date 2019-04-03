import React from 'react'
import renderer from 'react-test-renderer'
import ArtistCard from '../../components/ArtistCard'

const mockArtist = {
    cardImage: 'something',
    name: 'John',
    listeners: 2300000,
    rating: 4
}

test('Should render ArtistCard correctly', ()=> {
    const component = renderer.create(<ArtistCard artist={mockArtist} />)
    const instance = component.toJSON()
    expect(instance).toMatchSnapshot()
})