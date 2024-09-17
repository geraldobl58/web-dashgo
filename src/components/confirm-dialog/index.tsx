import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  LinearProgress,
  Typography,
  Dialog
} from '@mui/material'

import CloseIcon from '@mui/icons-material/Close'
import { styled } from '@mui/material'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}))

interface ConfirmationDialogProps {
  open: boolean
  onClose: () => void
  onConfirm: () => void
  isLoading: boolean
}

export const ConfirmationDialog = ({
  open,
  onClose,
  onConfirm,
  isLoading
}: ConfirmationDialogProps) => (
  <BootstrapDialog onClose={onClose} open={open}>
    <DialogTitle sx={{ m: 0, p: 2 }}>Confirmar Ação</DialogTitle>
    <IconButton
      aria-label="close"
      onClick={onClose}
      sx={(theme) => ({
        position: 'absolute',
        right: 8,
        top: 8,
        color: theme.palette.grey[500]
      })}
    >
      <CloseIcon />
    </IconButton>
    <DialogContent dividers>
      {isLoading && <LinearProgress />}
      <Typography gutterBottom>
        Tem certeza de que deseja excluir este registro? Esta ação não pode ser
        desfeita.
      </Typography>
    </DialogContent>
    <DialogActions>
      <Button onClick={onConfirm} disabled={isLoading}>
        Confirmar
      </Button>
    </DialogActions>
  </BootstrapDialog>
)
