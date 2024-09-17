import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function PATCH(
  req: Request,
  {
    params
  }: {
    params: { orderId: string }
  }
) {
  try {
    const body = await req.json()

    const { title, category, description } = body

    if (!title || !category || !description) {
      return new NextResponse('Campo obrigátorio!', { status: 400 })
    }

    const order = await db.orders.updateMany({
      where: {
        id: params.orderId
      },
      data: {
        title,
        category,
        description
      }
    })

    return NextResponse.json(order)
  } catch (error) {
    console.log(['ORDER_PATCH'], error)
  }
}

export async function DELETE(
  req: Request,
  {
    params
  }: {
    params: {
      orderId: string
    }
  }
) {
  try {
    if (!params.orderId) {
      return new NextResponse('Campo Obrigátorio!', { status: 400 })
    }

    const order = await db.orders.deleteMany({
      where: {
        id: params.orderId
      }
    })

    return NextResponse.json(order)
  } catch (error) {
    console.log(['ORDER_DELETE'], error)
  }
}

export async function GET(
  req: Request,
  {
    params
  }: {
    params: {
      orderId: string
    }
  }
) {
  try {
    if (!params.orderId) {
      return new NextResponse('Campo Obrigátorio!', { status: 400 })
    }

    const order = await db.orders.findUnique({
      where: {
        id: params.orderId
      }
    })

    return NextResponse.json(order)
  } catch (error) {
    console.log(['ORDER_GET_BY_ID'], error)
  }
}
