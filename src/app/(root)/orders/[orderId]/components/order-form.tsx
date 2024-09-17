'use client'

import { useEffect, useState, useCallback, useMemo } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useParams, useRouter } from 'next/navigation'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import { Autocomplete, Button, LinearProgress, TextField } from '@mui/material'
import { Orders } from '@prisma/client'
import { Header } from '@/components/header'
import { OrdersData } from '@/modules/types/order-type'
import { schemaData } from '@/modules/schemas/order-schema'
import CustomSnackbar from '@/components/custom-snackbar'

interface OrderFormProps {
  initialData: Orders | null
}

export const OrderForm = ({ initialData }: OrderFormProps) => {
  const router = useRouter()
  const params = useParams()

  const [orders, setOrders] = useState<OrdersData[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [snackbar, setSnackbar] = useState<{
    open: boolean
    message: string
    severity: 'success' | 'error'
  }>({
    open: false,
    message: '',
    severity: 'success'
  })

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset
  } = useForm<OrdersData>({
    resolver: yupResolver(schemaData),
    defaultValues: useMemo(
      () =>
        initialData || {
          title: '',
          category: '',
          description: ''
        },
      [initialData]
    )
  })

  const fetchOrders = useCallback(async () => {
    try {
      const response = await axios.get('/api/orders')
      setOrders(response.data.data)
    } catch (error) {
      console.error('Error fetching orders:', error)
      setSnackbar({
        open: true,
        message: 'Houve um erro ao buscar os pedidos.',
        severity: 'error'
      })
    }
  }, [])

  useEffect(() => {
    fetchOrders()
  }, [fetchOrders])

  const onSubmit = useCallback(
    async (data: OrdersData) => {
      setIsLoading(true)
      try {
        if (initialData) {
          await axios.patch(`/api/orders/${params.orderId}`, data)
        } else {
          await axios.post('/api/orders', data)
        }
        setSnackbar({
          open: true,
          message: initialData
            ? 'Atualizado realizado com sucesso!'
            : 'Cadastro realizado com sucesso!',
          severity: 'success'
        })
        router.refresh()
        reset()
        setTimeout(() => {
          router.back()
        }, 2000)
      } catch (error) {
        console.error('Error submitting form:', error)
        setSnackbar({
          open: true,
          message: 'Erro ao enviar o formulário.',
          severity: 'error'
        })
      } finally {
        setIsLoading(false)
      }
    },
    [initialData, params.orderId, reset, router]
  )

  const handleReset = useCallback(() => {
    reset()
  }, [reset])

  const uniqueCategories = useMemo(
    () => Array.from(new Set(orders.map((item) => item.category))),
    [orders]
  )

  const handleSnackbarClose = useCallback(() => {
    setSnackbar({ ...snackbar, open: false })
  }, [snackbar])

  return (
    <>
      <Header title="Cadastro de pedidos" />
      <CustomSnackbar
        open={snackbar.open}
        onClose={handleSnackbarClose}
        severity={snackbar.severity}
        message={snackbar.message}
      />
      {isLoading && <LinearProgress />}
      <div className="pl-4 pr-4">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-8">
          <div className="flex justify-between items-center gap-4">
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  {...field}
                  label="Produto"
                  error={!!errors.title}
                  helperText={errors.title?.message}
                />
              )}
            />

            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <Autocomplete
                  disablePortal
                  fullWidth
                  options={uniqueCategories}
                  getOptionLabel={(option) => option.toString()}
                  value={field.value}
                  onChange={(event, newValue) => field.onChange(newValue)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Departamento"
                      error={!!errors.category}
                      helperText={errors.category?.message}
                    />
                  )}
                />
              )}
            />
          </div>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                multiline
                rows={4}
                {...field}
                label="Descrição"
                error={!!errors.description}
                helperText={errors.description?.message}
              />
            )}
          />
          <div className="flex gap-4">
            <Button type="submit" variant="contained">
              {initialData ? 'Editar' : 'Salvar'}
            </Button>
            <Button
              type="button"
              variant="outlined"
              color="error"
              onClick={handleReset}
            >
              Cancelar
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
