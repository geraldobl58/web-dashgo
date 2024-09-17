'use client'

import { useEffect, useState, useCallback } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import { Autocomplete, Button, LinearProgress, TextField } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

import { Header } from '@/components/header'
import { columns } from './[orderId]/components/columns'
import { OrdersFilters } from '@/modules/types/order-type'
import { schemaFilters } from '@/modules/schemas/order-schema'

const OrdersPage = () => {
  const router = useRouter()
  const [orders, setOrders] = useState<OrdersFilters[]>([])
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10
  })
  const [totalOrders, setTotalOrders] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const { handleSubmit, control, reset } = useForm({
    resolver: yupResolver(schemaFilters),
    defaultValues: {
      title: '',
      category: ''
    }
  })

  const fetchOrders = useCallback(async () => {
    try {
      setIsLoading(true)
      const { data } = await axios.get('/api/orders', {
        params: {
          page: paginationModel.page + 1,
          pageSize: paginationModel.pageSize
        }
      })
      setOrders(data.data)
      setTotalOrders(data.total)
    } catch (error) {
      console.error('Error fetching orders:', error)
    } finally {
      setIsLoading(false)
    }
  }, [paginationModel])

  useEffect(() => {
    fetchOrders()
  }, [fetchOrders])

  const onSubmit = async (data: OrdersFilters) => {
    try {
      setIsLoading(true)
      const { data: response } = await axios.get('/api/orders', {
        params: {
          ...data,
          page: paginationModel.page + 1,
          pageSize: paginationModel.pageSize
        }
      })
      setOrders(response.data)
      setTotalOrders(response.total)
    } catch (error) {
      console.error('Error fetching filtered orders:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleReset = () => {
    reset()
    setOrders([])
    setTotalOrders(0)
    setPaginationModel({ page: 0, pageSize: 10 })
  }

  return (
    <>
      <Header
        title="Pedidos"
        contentButtons={
          <Button
            variant="contained"
            onClick={() => router.push('/orders/novo')}
          >
            Criar Registro
          </Button>
        }
      />

      <div className="pl-4 pr-4">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-8">
          <div className="flex justify-between items-center gap-4">
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  value={field.value}
                  onChange={field.onChange}
                  label="Produto"
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
                  getOptionLabel={(option) => option!.toString()}
                  value={field.value}
                  onChange={(event, newValue) => field.onChange(newValue)}
                  options={[...new Set(orders.map((item) => item.category))]}
                  renderInput={(params) => (
                    <TextField {...params} label="Departamento" />
                  )}
                />
              )}
            />

            <div className="flex items-center justify-center gap-4">
              <Button type="submit" variant="contained">
                Consultar
              </Button>
              <Button type="button" variant="outlined" onClick={handleReset}>
                Resetar
              </Button>
            </div>
          </div>
        </form>

        <div className="mt-8">
          {isLoading ? (
            <LinearProgress />
          ) : (
            <DataGrid
              rows={orders}
              columns={columns}
              rowCount={totalOrders}
              pagination
              paginationMode="server"
              paginationModel={paginationModel}
              onPaginationModelChange={setPaginationModel}
              pageSizeOptions={[5, 10]}
              disableRowSelectionOnClick
              loading={isLoading}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default OrdersPage
