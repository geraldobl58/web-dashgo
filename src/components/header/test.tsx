import { render } from '@testing-library/react'

import { Header } from '.'

describe('Header Component', () => {
  it('renders the title correctly', () => {
    const title = 'Test Title'
    const { getByText } = render(<Header title={title} />)

    expect(getByText(title)).toBeInTheDocument()
  })

  it('renders contentButtons when provided', () => {
    const title = 'Test Title'
    const contentButtons = <button>Test Button</button>
    const { getByText } = render(
      <Header title={title} contentButtons={contentButtons} />
    )

    expect(getByText('Test Button')).toBeInTheDocument()
  })

  it('does not render contentButtons when not provided', () => {
    const title = 'Test Title'
    const { queryByRole } = render(<Header title={title} />)

    expect(queryByRole('button')).not.toBeInTheDocument()
  })
})
