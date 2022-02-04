import { createAsyncThunk } from '@reduxjs/toolkit'
import { getTracks } from '../../../services/getTracks'

export const changeTracks = createAsyncThunk(
  '@napster/changeTracks',
  async ({ id, limit = 20 }) => await getTracks(id, limit)
)
