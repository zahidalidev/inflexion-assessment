import { render, screen, act, waitFor } from '@testing-library/react'

import Card from 'components/Card'
import { TestApp } from 'utils/test'

describe('Card', () => {
  beforeEach(() =>
    act(() =>
      render(
        <Card
          school={{
            name: 'asjd',
            street: 'asjd',
            city: 'asjd',
            state: 'asjd',
            zip: 'asjd',
            website: 'asjd',
          }}
        />,
        { wrapper: TestApp }
      )
    )
  )

  it('should render correctly', () => {
    expect.assertions(1)
    expect(screen).toMatchSnapshot()
  })
})
