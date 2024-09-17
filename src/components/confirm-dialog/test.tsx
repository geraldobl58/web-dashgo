import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { ConfirmationDialog } from '.'

describe('ConfirmationDialog', () => {
  it('should render correctly when open', () => {
    const onClose = jest.fn()
    const onConfirm = jest.fn()

    render(
      <ConfirmationDialog
        open={true}
        onClose={onClose}
        onConfirm={onConfirm}
        isLoading={false}
      />
    )

    expect(screen.getByText('Confirmar Ação')).toBeInTheDocument()
    expect(
      screen.getByText(
        'Tem certeza de que deseja excluir este registro? Esta ação não pode ser desfeita.'
      )
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Confirmar' })
    ).toBeInTheDocument()
  })

  it('should call onClose when the close button is clicked', () => {
    const onClose = jest.fn()
    const onConfirm = jest.fn()

    render(
      <ConfirmationDialog
        open={true}
        onClose={onClose}
        onConfirm={onConfirm}
        isLoading={false}
      />
    )

    const closeButton = screen.getByLabelText('close')
    fireEvent.click(closeButton)

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('should call onConfirm when the confirm button is clicked', () => {
    const onClose = jest.fn()
    const onConfirm = jest.fn()

    render(
      <ConfirmationDialog
        open={true}
        onClose={onClose}
        onConfirm={onConfirm}
        isLoading={false}
      />
    )

    const confirmButton = screen.getByRole('button', { name: 'Confirmar' })
    fireEvent.click(confirmButton)

    expect(onConfirm).toHaveBeenCalledTimes(1)
  })

  it('should disable the confirm button when isLoading is true', () => {
    const onClose = jest.fn()
    const onConfirm = jest.fn()

    render(
      <ConfirmationDialog
        open={true}
        onClose={onClose}
        onConfirm={onConfirm}
        isLoading={true}
      />
    )

    const confirmButton = screen.getByRole('button', { name: 'Confirmar' })
    expect(confirmButton).toBeDisabled()
  })

  it('should show LinearProgress when isLoading is true', () => {
    const onClose = jest.fn()
    const onConfirm = jest.fn()

    render(
      <ConfirmationDialog
        open={true}
        onClose={onClose}
        onConfirm={onConfirm}
        isLoading={true}
      />
    )

    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })
})
