import {
  render, screen, act,
} from '@testing-library/react'

import Button from 'components/Button'
import { TestApp } from 'utils/test'

describe('Button', () => {
  beforeEach(() => act(() => render(<Button />, { wrapper: TestApp })))

  it('should render correctly', () => {
    expect.assertions(1)
    expect(screen).toMatchSnapshot()
  })
})