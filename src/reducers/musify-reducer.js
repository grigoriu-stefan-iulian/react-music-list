

const MusifyReducer = (state, action) => {
    switch (action.type) {
        case "POPULATE_LIST":
            return action.artists
        default:
            return state
    }
}