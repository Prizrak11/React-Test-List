import { createSlice } from '@reduxjs/toolkit'
import { changeCurrentPlaylist } from './actions/changeCurrentPlaylist'
import { changeTracks } from './actions/changeTracks'
import { initializePlaylists } from './actions/initializePlaylists'

const initialState = {
  playlists: [],
  isLoading: false,
  tracks: [],
  currentPlaylist: {}
}

export const napsterSlice = createSlice({
  name: '@napster',
  initialState,
  extraReducers: {
    [initializePlaylists.pending]: (state) => {
      state.isLoading = true
    },
    [initializePlaylists.fulfilled]: (state, { payload }) => {
      state.playlists = payload
      state.isLoading = false
    },
    [changeCurrentPlaylist.fulfilled]: (state, { payload }) => {
      state.currentPlaylist = payload
      state.isLoading = false
    },
    [changeTracks.pending]: (state) => {
      state.isLoading = true
    },
    [changeTracks.fulfilled]: (state, { payload }) => {
      state.tracks = payload
      state.isLoading = false
    }
  }
})

export const napsterReducer = napsterSlice.reducer
