import { OrderForm } from './components/order-form'

import { db } from '@/lib/db'

interface OrderPageIdProps {
  params: {
    orderId: string
  }
}

const OrderPageId = async ({ params }: OrderPageIdProps) => {
  const orders = await db.orders.findUnique({
    where: {
      id: params.orderId
    }
  })

  return (
    <>
      <OrderForm initialData={orders} />
    </>
  )
}

export default OrderPageId
