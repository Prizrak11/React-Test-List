import { createAsyncThunk } from '@reduxjs/toolkit'
import { getTracks } from '../../../services/getTracks'
import { changeCurrentPlaylist } from './changeCurrentPlaylist'

export const changeTracks = createAsyncThunk(
  '@napster/changeTracks',
  async ({ id, limit = 20 }, { dispatch }) => {
    dispatch(changeCurrentPlaylist({ id }))
    return await getTracks(id, limit)
  }
)
