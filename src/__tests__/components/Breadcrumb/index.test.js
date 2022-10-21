import {
  render, screen, act, waitFor,
} from '@testing-library/react'

import Breadcrumb from 'components/Breadcrumb'
import { TestApp } from 'utils/test'

describe('Breadcrumb', () => {
  beforeEach(() => act(() => render(<Breadcrumb />, { wrapper: TestApp })))

  it('should render correctly', () => {
    expect.assertions(1)
    expect(screen).toMatchSnapshot()
  })

  it('should have listitem', async () => {
    await waitFor(() => {
      const listItems = screen.getAllByRole('listitem')
      expect(listItems).toHaveLength(3)
    })
  })

})