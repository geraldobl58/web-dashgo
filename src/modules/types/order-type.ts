export interface OrdersFilters {
  title?: string | null | undefined
  category?: string | null | undefined
}

export interface OrdersData {
  title: string
  category: string
  description: string
  createdAt?: string
  updatedAt?: string
}
