import MySwal from 'sweetalert2';
import { COLORS } from '@styles';

export const alertMessage = (mensaje, tipo, title) => {
  MySwal.fire({
    title,
    text: mensaje,
    icon: tipo,
    confirmButtonColor: `${COLORS.blue}`
  });
};
