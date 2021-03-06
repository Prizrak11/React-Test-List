import { createSlice } from '@reduxjs/toolkit'
import { changeCurrentPlaylist } from './actions/changeCurrentPlaylist'
import { initializePlaylists } from './actions/initializePlaylists'

const initialState = {
  playlists: [],
  isLoading: false,
  currentPlaylist: {
    tracks: []
  }
}

export const napsterSlice = createSlice({
  name: '@napster',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(initializePlaylists.pending, (state) => {
        state.isLoading = true
      })
      .addCase(initializePlaylists.fulfilled, (state, { payload }) => {
        state.playlists = payload
        state.isLoading = false
      })
      .addCase(changeCurrentPlaylist.pending, (state) => {
        state.isLoading = true
      })
      .addCase(changeCurrentPlaylist.fulfilled, (state, { payload }) => {
        state.currentPlaylist = payload
        state.isLoading = false
      })
  }
})

export const napsterReducer = napsterSlice.reducer
