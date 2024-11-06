import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Alert from '@mui/material/Alert';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

function ModalDeleteConfirmation({
  title,
  message,
  onConfirm,
  onCancel
}: {
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <Dialog fullWidth open={true} onClose={onCancel}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Alert severity="error">{message}</Alert>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>Cancel</Button>
        <Button onClick={onConfirm} variant="contained" color="error">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ModalDeleteConfirmation;
