import { Header } from '@/components/header'
import { OrderSinglePreview } from './components/order-single-preview'
import { db } from '@/lib/db'

interface SinglePageIdProps {
  params: {
    singleId: string
  }
}

const SinglePageId = async ({ params }: SinglePageIdProps) => {
  const data = await db.orders.findUnique({
    where: {
      id: params.singleId
    }
  })

  return (
    <>
      <Header title="Ver Pedidos" />
      <OrderSinglePreview data={data} />
    </>
  )
}

export default SinglePageId
