import PropTypes from 'prop-types';
import ToastConfirmStyled from './toastConfirm.styled';

const ToastConfirm = ({ text, confirm, closeToast }) => {
  const handleClick = () => {
    confirm();
    closeToast();
  };

  return (
    <ToastConfirmStyled.Wrapper>
      <p>
        {text}
      </p>
      <ToastConfirmStyled.Btn onClick={handleClick}>Guardar</ToastConfirmStyled.Btn>
      <ToastConfirmStyled.Btn className='ms-2' onClick={closeToast}>Cancelar</ToastConfirmStyled.Btn>
    </ToastConfirmStyled.Wrapper>
  );
};

ToastConfirm.propTypes = {
  text: PropTypes.string.isRequired,
  confirm: PropTypes.func.isRequired,
  closeToast: PropTypes.func
};

export default ToastConfirm;
