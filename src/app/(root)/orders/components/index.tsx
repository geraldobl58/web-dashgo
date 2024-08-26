import { Button } from '@mui/material'

import { GridColDef } from '@mui/x-data-grid'

export const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 350 },
  { field: 'title', headerName: 'Título', width: 300 },
  { field: 'category', headerName: 'Categoria', width: 200 },
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
