'use client'

import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import * as yup from 'yup'

import axios from 'axios'

import { Autocomplete, Button, TextField } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

import { Header } from '@/components/header'

import { columns } from './components'

const schema = yup.object().shape({
  title: yup.string().required('Campo obrigário'),
  category: yup.string().required('Campo obrigário')
})

interface OrdersFilters {
  title: string
  category: string
}

interface OrdersData {
  id: number
  title: string
  category: string
}

const OrdersPage = () => {
  const [orders, setOrders] = useState<OrdersData[]>([])
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10
  })
  const [totalOrders, setTotalOrders] = useState(0)

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: '',
      category: ''
    }
  })

  useEffect(() => {
    async function getAll() {
      try {
        const response = await axios.get(`/api/orders`, {
          params: {
            page: paginationModel.page + 1,
            pageSize: paginationModel.pageSize
          }
        })
        setOrders(response.data.data)
        setTotalOrders(response.data.total)
      } catch (error) {
        console.error('Error fetching orders:', error)
      }
    }
    getAll()
  }, [paginationModel])

  const onSubmit = async (data: OrdersFilters) => {
    try {
      const response = await axios.get('/api/orders', {
        params: {
          title: data.title,
          category: data.category,
          page: paginationModel.page + 1,
          pageSize: paginationModel.pageSize
        }
      })
      setOrders(response.data.data)
      setTotalOrders(response.data.total)
    } catch (error) {
      console.log(error)
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
      <Header title="Pedidos" />
      <div className="pl-4 pr-4">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-8">
          <div className="grid grid-cols-4 gap-4">
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <TextField
                  value={field.value}
                  onChange={field.onChange}
                  label="Produto"
                  error={!!errors.title}
                  helperText={errors.title && errors.title.message}
                />
              )}
            />

            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <Autocomplete
                  disablePortal
                  getOptionLabel={(option) => option.toString()}
                  value={field.value}
                  onChange={(event, newValue) => {
                    field.onChange(newValue)
                  }}
                  options={orders
                    .map((item) => item.category)
                    .filter(
                      (value, index, self) => self.indexOf(value) === index
                    )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Departamento"
                      error={!!errors.category}
                      helperText={errors.category && errors.category.message}
                    />
                  )}
                />
              )}
            />

            <Button type="submit" variant="contained">
              Consultar Pedido
            </Button>
            <Button type="button" variant="outlined" onClick={handleReset}>
              Resetar
            </Button>
          </div>
        </form>

        <div className="mt-8">
          <DataGrid
            rows={orders}
            columns={columns}
            rowCount={totalOrders}
            pagination
            paginationMode="server"
            paginationModel={paginationModel}
            onPaginationModelChange={(model) => setPaginationModel(model)}
            pageSizeOptions={[5, 10, 25]}
            disableRowSelectionOnClick
          />
        </div>
      </div>
    </>
  )
}

export default OrdersPage
