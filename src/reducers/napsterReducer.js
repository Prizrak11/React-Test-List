const initialValues = {
  playlists: [],
  isLoading: false,
  tracks: [],
  currentPlaylist: {}
}

export const napsterReducer = (state = initialValues, action) => {
  const { type, payload } = action
  switch (type) {
    case '@napster/startedLoading':
      return {
        ...state,
        isLoading: true
      }
    case '@napster/stoppedLoading':
      return {
        ...state,
        isLoading: false
      }
    case '@napster/initPlaylists':
      return {
        ...state,
        playlists: payload
      }
    case '@napster/changedTracks':
      return {
        ...state,
        tracks: payload
      }
    case '@napster/changedCurrentPlaylist':
      return {
        ...state,
        currentPlaylist: payload
      }
    default:
      return state
  }
}
