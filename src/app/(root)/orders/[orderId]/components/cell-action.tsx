'use client'

import { useRouter } from 'next/navigation'
import { useState, useCallback } from 'react'
import axios from 'axios'
import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import VisibilityIcon from '@mui/icons-material/Visibility'

import { ConfirmationDialog } from '@/components/confirm-dialog'
import { OrdersColumn } from './columns'

interface CellActionProps {
  data: OrdersColumn
}

export const CellAction = ({ data }: CellActionProps) => {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleDelete = useCallback(async () => {
    try {
      setIsLoading(true)
      await axios.delete(`/api/orders/${data.id}`)
      router.refresh() // ou router.replace(router.asPath)
      location.href = '/orders'
      console.log('Registro excluído com sucesso!')
    } catch (error) {
      console.log('Houve um erro ao excluir o registro!', error)
    } finally {
      setIsLoading(false)
      setOpen(false)
    }
  }, [data.id, router])

  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <ConfirmationDialog
        open={open}
        onClose={handleClose}
        onConfirm={handleDelete}
        isLoading={isLoading}
      />
      <IconButton onClick={() => router.push(`/orders/single/${data.id}`)}>
        <VisibilityIcon />
      </IconButton>
      <IconButton onClick={() => router.push(`/orders/${data.id}`)}>
        <EditIcon />
      </IconButton>
      <IconButton onClick={handleClickOpen}>
        <DeleteIcon />
      </IconButton>
    </>
  )
}
