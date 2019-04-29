import axios from 'axios'

const ARTISTS_URL = 'https://ws.audioscrobbler.com/2.0/?limit=5&format=json&method=artist.search&api_key=' + process.env.REACT_APP_LASTFM_APPKEY
const FEATURED_URL = 'https://ws.audioscrobbler.com//2.0/?method=geo.gettopartists&country=romania&format=json&limit=5&api_key=' + process.env.REACT_APP_LASTFM_APPKEY

export const getArtists = async (terms) => {
  const request = ARTISTS_URL + '&artist=' + terms
  const response = await axios.get(request)
  const results = response.data.results

  const artists = results.artistmatches.artist.map((artist) => {
    const avatarImage = artist.image.find(image => image.size === 'medium')
    const cardImage = artist.image.find(image => image.size === 'large')['#text']
    const imageUrl = avatarImage['#text']
    return { ...artist, avatar: imageUrl, cardImage }
  })
  return artists
}

export const getFeaturedArtists = async () => {
  const request = FEATURED_URL
  const response = await axios.get(request)
  const results = response.data.topartists.artist
  console.log(results)

  const artists = results.map((artist) => {
    const avatarImage = artist.image.find(image => image.size === 'medium')
    const cardImage = artist.image.find(image => image.size === 'large')['#text']
    const imageUrl = avatarImage['#text']
    return { ...artist, avatar: imageUrl, cardImage }
  })
  return artists

}