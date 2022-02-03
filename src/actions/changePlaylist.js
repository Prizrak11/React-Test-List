export const changePlaylist = playlist => {
  return { type: '@napster/changedCurrentPlaylist', payload: playlist }
}
