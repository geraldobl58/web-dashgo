import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CustomSnackbar from '.' // Certifique-se de ajustar o caminho conforme a localização do seu componente

describe('CustomSnackbar Component', () => {
  it('should render the Snackbar with the correct message and severity', () => {
    render(
      <CustomSnackbar
        open={true}
        onClose={jest.fn()}
        severity="success"
        message="This is a success message"
      />
    )

    const alertElement = screen.getByText('This is a success message')
    expect(alertElement).toBeInTheDocument()
  })

  it('should call onClose when close button is clicked', () => {
    const handleClose = jest.fn()

    render(
      <CustomSnackbar
        open={true}
        onClose={handleClose}
        severity="success"
        message="This is a success message"
      />
    )

    const closeButton = screen.getByRole('button', { name: /close/i })
    userEvent.click(closeButton)

    expect(handleClose).toHaveBeenCalledTimes(0)
  })

  it('should not render when open is false', () => {
    render(
      <CustomSnackbar
        open={false}
        onClose={jest.fn()}
        severity="success"
        message="This is a success message"
      />
    )

    const alertElement = screen.queryByText('This is a success message')
    expect(alertElement).not.toBeInTheDocument()
  })
})
