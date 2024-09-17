import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { title, category, description } = body

    if (!title || !category || !description) {
      return new NextResponse('Campo Obrigátorio!', { status: 400 })
    }

    const order = await db.orders.create({
      data: {
        title,
        category,
        description
      }
    })

    return NextResponse.json({
      data: order
    })
  } catch (error) {
    console.log('[ORDERS_POST]', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url)

    const page = parseInt(url.searchParams.get('page') || '1', 10)
    const pageSize = parseInt(url.searchParams.get('pageSize') || '10', 10)

    const title = url.searchParams.get('title') || ''
    const category = url.searchParams.get('category') || ''

    const total = await db.orders.count({
      where: {
        title: {
          contains: title,
          mode: 'insensitive'
        },
        category: {
          contains: category,
          mode: 'insensitive'
        }
      }
    })

    const orders = await db.orders.findMany({
      orderBy: {
        title: 'asc'
      },
      where: {
        title: {
          contains: title,
          mode: 'insensitive'
        },
        category: {
          contains: category,
          mode: 'insensitive'
        }
      },
      skip: (page - 1) * pageSize,
      take: pageSize
    })

    return NextResponse.json({
      data: orders,
      total,
      page,
      pageSize
    })
  } catch (error) {
    console.log('[ORDERS_GET_ERROR]', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
