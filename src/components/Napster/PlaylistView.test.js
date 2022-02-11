import '@testing-library/jest-dom'
import { waitFor } from '@testing-library/react'
import { renderWithProviders } from 'testing/renderWithProvider'
import { useMockServer } from 'testing/useMockServer'
import PlaylistView from './PlaylistView'

const renderOptions = {
  routing: true,
  routerOptions: {
    routeWithParams: '/napster/:playlistId',
    initialRoute: '/napster/pp.225974698'
  }
}

const server = useMockServer()
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('load tracks with specific playlist id', async () => {
  const { getByRole } = renderWithProviders(<PlaylistView />, renderOptions)

  const loader = getByRole('progressbar')
  expect(loader).toBeInTheDocument()

  await waitFor(() => {
    expect(loader).not.toBeInTheDocument()
  })
})
