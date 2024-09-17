'use client'

import { useCallback, useEffect, useState } from 'react'

import { Container, Grid, Paper, Typography } from '@mui/material'

import axios from 'axios'

import { Orders } from '@prisma/client'

import { OrdersData } from '@/modules/types/order-type'

interface OrderSinglePreviewProps {
  data: Orders | null
}

export const OrderSinglePreview = ({ data }: OrderSinglePreviewProps) => {
  const [order, setOrder] = useState<OrdersData>()

  const fetchOrders = useCallback(async () => {
    try {
      const response = await axios.get(`/api/orders/${data?.id}`)
      setOrder(response.data)
    } catch (error) {
      console.error('Error fetching orders:', error)
    }
  }, [data?.id])

  useEffect(() => {
    fetchOrders()
  }, [fetchOrders])

  console.log(order)

  return (
    <Container className="mt-10">
      <Paper elevation={3} className="p-4">
        <Typography variant="h6">Informações</Typography>
        <Grid container spacing={2} mt={2}>
          <Grid item xs={6}>
            <Typography variant="body2">Título</Typography>
            <Typography variant="caption">{order?.title}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">Categoria</Typography>
            <Typography variant="caption">{order?.category}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">Data de Criação</Typography>
            <Typography variant="caption">{order?.createdAt}</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="body2">Data de Atualização</Typography>
            <Typography variant="caption">{order?.createdAt}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">Descrição</Typography>
            <Typography variant="caption">{order?.description}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}
