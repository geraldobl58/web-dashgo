import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

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
          contains: title
        },
        category: {
          contains: category
        }
      }
    })

    const orders = await db.orders.findMany({
      where: {
        title: {
          contains: title
        },
        category: {
          contains: category
        }
      },
      orderBy: {
        title: 'asc'
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
