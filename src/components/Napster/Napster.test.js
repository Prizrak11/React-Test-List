import '@testing-library/jest-dom'
import { screen, waitFor } from '@testing-library/react'
import { renderWithProviders } from 'testing/renderWithProvider'
import { useMockServer } from 'testing/useMockServer'

import Napster from './Napster'

const server = useMockServer()
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('get and show playlists', async () => {
  const { getByRole } = renderWithProviders(<Napster />, { routing: true })

  const loader = getByRole('progressbar')

  expect(loader).toBeInTheDocument()

  await waitFor(() => {
    expect(loader).not.toBeInTheDocument()
    expect(screen.getByText(/Consumiendo API de Napster/i)).toBeInTheDocument()
  })
})
