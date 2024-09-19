import { toast, ToastPosition } from 'react-toastify';

const toastOptions = {
  position: 'bottom-right' as ToastPosition,
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light'
};

export const showToastSuccess = (message: string) => {
  toast.success('🦄 ' + message, toastOptions);
};

export const showToastError = (message: string) => {
  toast.error('🦄 ' + message, toastOptions);
};
