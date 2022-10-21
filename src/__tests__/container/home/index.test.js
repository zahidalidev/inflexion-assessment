import {
  render, screen, waitFor, act,
} from '@testing-library/react'

import Home from 'container/home'
import { TestApp } from 'utils/test'

describe('Home Page', () => {
  beforeEach(() => act(() => render(<Home />, { wrapper: TestApp })))

  it('should render correctly', () => {
    expect.assertions(1)
    expect(screen).toMatchSnapshot()
  })

  it('should have 1 button', async () => {
    await waitFor(() => {
      const button = screen.getAllByRole('button')
      expect(button).toHaveLength(1)
    })
  })

  it('should have 1 heading', async () => {
    await waitFor(() => {
      const heading = screen.getAllByRole('heading')
      expect(heading).toHaveLength(1)
    })
  })
})