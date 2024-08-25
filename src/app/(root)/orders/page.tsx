'use client'

import { useEffect, useState } from 'react'

import Image from 'next/image'

import {
  Autocomplete,
  Button,
  Checkbox,
  Chip,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField
} from '@mui/material'

import { DataGrid, GridColDef } from '@mui/x-data-grid'

import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import * as yup from 'yup'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID' },
  { field: 'order_id', headerName: 'ID Pedido' },
  { field: 'partner_order_id', headerName: 'ID Pedido Parceiro' },
  { field: 'cpf_cnpj', headerName: 'CPF ou CNPJ' },
  {
    field: 'bussinness_id',
    headerName: 'Bandeira',
    renderCell: (params) => {
      return (
        <div className="mt-4">
          <Image
            alt="Icon"
            width={25}
            height={25}
            src={params.row.bussinness_id}
          />
        </div>
      )
    }
  },
  { field: 'purchase_date', headerName: 'Data Compra' },
  {
    field: 'points_to_credit',
    headerName: 'Ponto a Creditar'
  },
  {
    field: 'expected_credit_date',
    headerName: 'Data Prevista de Crédito'
  },
  {
    field: 'details',
    headerName: 'Detalhes',
    width: 150,
    renderCell: () => (
      <>
        <Button variant="text" size="small" sx={{ fontSize: 10 }}>
          Ver detalhes
        </Button>
      </>
    )
  }
]

const schema = yup.object().shape({
  orderIds: yup.number(),
  businessUnitIds: yup.number()
})

interface OrdersFilters {
  id: number
  businessUnitIds: string
  orderIds: string
  orderId: number
  partnerOrderId: string
  cpfCnpj: string
  flag: number
  date: Date
  deadlineShippingPointsAccum: number
  expectedDateAccum: null | string | Date
}

import { Header } from '@/components/header'

import { api } from '@/lib/api'

const OrdersPage = () => {
  const [filters, setFilters] = useState<OrdersFilters[]>([])
  const [dataOrdersIds, setDataOrdersIds] = useState([])

  console.log(filters)

  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      orderIds: undefined,
      businessUnitIds: undefined
    }
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/api/orders')
        setFilters(response.data.data)
        setDataOrdersIds(response.data.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  const onSubmit = async (data: any) => {
    try {
      const response = await api.get('/api/orders', {
        params: {
          order_id: data.orderIds,
          bussinness_id: data.businessUnitIds
        }
      })
      setFilters(response.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  const flags = [
    {
      label: 'Casas Bahia',
      value: 1,
      img: '/icons/casas-bahia.png'
    },
    {
      label: 'Ponto Frio',
      value: 2,
      img: '/icons/ponto-frio.png'
    },
    {
      label: 'Extra',
      value: 3,
      img: '/icons/extra.png'
    }
  ]

  const options = [
    { label: 'ID Pedido', value: 'Pedido Via' },
    { label: 'ID Pedido Parceiro', value: 'Pedido Parceiro' },
    { label: 'ID Pedido MarketPlace', value: 'Pedido MarketPlace' }
  ]

  const getBandeira = (flag: number) => {
    switch (flag) {
      case 11:
        return '/icons/casas-bahia.png'
      case 2:
        return '/icons/ponto-frio.png'
      default:
        return '/icons/extra.png'
    }
  }

  const formattedFilters = filters.map((filter) => ({
    orderId: filter.orderId,
    partnerOrderId: filter.partnerOrderId,
    cpfCnpj: filter.orderClients?.map((client) => client.cpfCnpj) ?? [],
    bandeira: getBandeira(filter.flag),
    dataCompra: filter.date,
    deadlineShippingPointsAccum:
      filter.deadlineShippingPointsAccum === 0
        ? 'Sem Pontos'
        : filter.deadlineShippingPointsAccum,
    expectedDateAccum: filter.expectedDateAccum ?? 'Não informado'
  }))

  return (
    <>
      <Header title="Pedidos" />
      <div className="pl-4 pr-4">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-8">
          <div className="grid grid-cols-4 gap-4">
            {/* <FormControl fullWidth>
              <InputLabel>Tipo de Consulta</InputLabel>
              <Select label="Tipo">
                {options.map((item) => (
                  <MenuItem key={item.value} value={item.value}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl> */}
            <Controller
              name="orderIds"
              control={control}
              render={({ field }) => (
                <Autocomplete
                  disablePortal
                  getOptionLabel={(option) => option.toString()}
                  value={field.value}
                  onChange={(event, newValue) => {
                    field.onChange(newValue)
                  }}
                  options={dataOrdersIds.map((item) => item.order_id)}
                  renderInput={(params) => (
                    <TextField {...params} label="Id Pedido" />
                  )}
                />
              )}
            />

            <div className="flex items-center justify-center">
              {flags.map((item) => (
                <div key={item.label}>
                  <Controller
                    name="businessUnitIds"
                    control={control}
                    render={({ field }) => (
                      <FormControl>
                        <RadioGroup
                          value={field.value}
                          onChange={field.onChange}
                        >
                          <FormControlLabel
                            control={<Radio />}
                            value={item.value}
                            label={item.label}
                          />
                        </RadioGroup>
                      </FormControl>
                    )}
                  />
                </div>
              ))}
              {errors.businessUnitIds && (
                <span>{errors.businessUnitIds.message}</span>
              )}
            </div>
            <Button type="submit" variant="contained">
              Consultar Pedido
            </Button>
          </div>
        </form>

        <div className="mt-8">
          <DataGrid
            getRowId={(row) => console.log(row)}
            rows={formattedFilters}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 }
              }
            }}
            pageSizeOptions={[5, 10]}
            rowSelection={false}
          />
        </div>
      </div>
    </>
  )
}

export default OrdersPage
