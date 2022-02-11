import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { store } from '../store'

const initialRouterOptions = {
  initialHistory: [],
  routeWithParams: '/',
  initialRoute: '/'
}

export const renderWithProviders = (element, {
  customState,
  customStore = store,
  routing = false,
  routerOptions = initialRouterOptions,
  ...renderOptions
} = {}) => {
  const RouterWrapper = ({ children }) => {
    const { initialHistory, initialRoute, routeWithParams } = routerOptions
    const initialEntries = [
      ...initialHistory ?? [],
      initialRoute
    ]
    return (
      <MemoryRouter initialEntries={initialEntries}>
        <Routes>
          <Route path={routeWithParams} element={children} />
        </Routes>
      </MemoryRouter>
    )
  }

  const ProviderWrapper = ({ children }) => (
    <Provider store={customStore}>
      {
        routing
          ? <RouterWrapper> {children} </RouterWrapper>
          : children
      }
    </Provider>
  )

  return render(element, {
    wrapper: ProviderWrapper,
    ...renderOptions
  })
}
