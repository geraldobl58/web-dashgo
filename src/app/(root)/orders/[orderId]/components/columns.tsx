import { GridColDef } from '@mui/x-data-grid'
import { CellAction } from './cell-action'

export interface OrdersColumn {
  id: string
  title: string
  category: string
  description: string
}

// Constantes para larguras das colunas
const TITLE_COLUMN_WIDTH = 450
const CATEGORY_COLUMN_WIDTH = 300
const ACTIONS_COLUMN_WIDTH = 150

// Definição das colunas da tabela
export const columns: GridColDef<OrdersColumn>[] = [
  {
    field: 'title',
    headerName: 'Título',
    width: TITLE_COLUMN_WIDTH
  },
  {
    field: 'category',
    headerName: 'Categoria',
    width: CATEGORY_COLUMN_WIDTH
  },
  {
    field: 'actions',
    headerName: 'Ações',
    width: ACTIONS_COLUMN_WIDTH,
    renderCell: ({ row }) => <CellAction data={row} />,
    sortable: false, // Se ações não devem ser ordenáveis
    filterable: false // Se ações não devem ser filtráveis
  }
]
