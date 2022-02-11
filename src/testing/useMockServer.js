import { rest } from 'msw'
import { setupServer } from 'msw/node'
import napsterPlaylists from './mocks/napster-playlists.json'
import napsterTracks from './mocks/napster-tracks.json'
import napsterPlaylistId from './mocks/napster-playlist.json'

export const useMockServer = () => {
  const handlers = [
    rest.get('https://api.napster.com/v2.2/playlists/featured', (_req, res, ctx) => {
      const returnable = res(ctx.json(napsterPlaylists), ctx.delay(130))
      return returnable
    }),
    rest.get('https://api.napster.com/v2.2/playlists/pp.225974698', (_req, res, ctx) => {
      const returnable = res(ctx.json(napsterPlaylistId), ctx.delay(130))
      return returnable
    }),
    rest.get('https://api.napster.com/v2.2/playlists/pp.225974698/tracks', (_req, res, ctx) => {
      const returnable = res(ctx.json(napsterTracks), ctx.delay(130))
      return returnable
    })
  ]
  return setupServer(...handlers)
}
