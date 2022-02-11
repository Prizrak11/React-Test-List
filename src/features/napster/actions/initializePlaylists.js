import { createAsyncThunk } from '@reduxjs/toolkit'
import { getPlaylists } from 'services/getPlaylists'

export const initializePlaylists = createAsyncThunk(
  '@napster/initializePlaylists',
  async () => await getPlaylists()
)
