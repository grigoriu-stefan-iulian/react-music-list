

const MusifyReducer = (state, action) => {
    switch (action.type) {
        case "POPULATE_LIST":
            return action.artists
        case "DELETE_ARTIST":
            return state.filter((artist) => artist !== action.artist)
        case "ADD_ARTIST":
            return [...state, action.savedArtist]
        case "EDIT_ARTIST":
            return state.map((artist) => {
                if (artist.name === action.artist.name) {
                    return {
                        ...artist,
                        ...action.updates
                    }
                } else {
                    return artist
                }
            })
        default:
            return state
    }
}

export default MusifyReducer