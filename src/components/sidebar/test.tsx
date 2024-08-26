import { render } from '@testing-library/react'
import Image from 'next/image'

test('renders the logo image with correct attributes', () => {
  const { getByAltText } = render(
    <Image alt="Logo" width={40} height={40} src="/logo.svg" />
  )

  const logoImage = getByAltText('Logo')
  expect(logoImage).toBeInTheDocument()
  expect(logoImage).toHaveAttribute('src', '/logo.svg')
  expect(logoImage).toHaveAttribute('width', '40')
  expect(logoImage).toHaveAttribute('height', '40')
})
