import { createAsyncThunk } from '@reduxjs/toolkit'
import { getPlaylistWithId } from '../../../services/getPlaylistWithId'
import { getTracks } from '../../../services/getTracks'

export const changeCurrentPlaylist = createAsyncThunk(
  '@napster/changeCurrentPlaylist',
  async ({ id }, { getState }) => {
    const { napster } = getState()
    let newPlaylist

    if (napster.playlists.length > 0) {
      newPlaylist = napster.playlists.filter(list => list.id === id)[0]
    } else {
      newPlaylist = await getPlaylistWithId(id)
    }

    const playlistTracks = await getTracks(newPlaylist.id)

    return {
      ...newPlaylist,
      tracks: playlistTracks
    }
  }
)
