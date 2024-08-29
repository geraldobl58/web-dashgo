import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

interface CustomSnackbarProps {
  open: boolean
  onClose: () => void
  severity: 'success' | 'error' | 'warning' | 'info'
  message: string
  autoHideDuration?: number
}

export const CustomSnackbar = ({
  open,
  onClose,
  severity,
  message,
  autoHideDuration = 6000
}: CustomSnackbarProps) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
    >
      <Alert
        onClose={onClose}
        severity={severity}
        variant="filled"
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar>
  )
}

export default CustomSnackbar
