const initialValues = {
  isPlaying: false,
  currentTrack: {}
}
export const musicPlayerReducer = (state = initialValues, action) => {
  const { type, payload } = action
  switch (type) {
    case '@musicPlayerReducer/play':
      return {
        ...state,
        isPlaying: true,
        currentTrack: payload
      }
    default:
      return state
  }
}
