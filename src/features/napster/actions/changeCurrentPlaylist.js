import { createAsyncThunk } from '@reduxjs/toolkit'
import { getPlaylistWithId } from '../../../services/getPlaylistWithId'

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

    return newPlaylist
  }
)
