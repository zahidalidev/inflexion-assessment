import {
  render, screen, act, waitFor,
} from '@testing-library/react'

import AppBar from 'components/AppBar'
import { TestApp } from 'utils/test'

describe('AppBar', () => {
  beforeEach(() => act(() => render(<AppBar />, { wrapper: TestApp })))

  it('should render correctly', () => {
    expect.assertions(1)
    expect(screen).toMatchSnapshot()
  })

  it('should have navbar', async () => {
    await waitFor(() => {
      const navbar = screen.getByTestId('appbar')
      expect(navbar).toBeInTheDocument()
    })
  })

})