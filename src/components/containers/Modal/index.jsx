import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import ModalStyled from './modal.styled';
import { CgClose } from 'react-icons/cg';

const Modal = ({ children, open, close }) => {
  let container = null;

  if (typeof window !== 'undefined') {
    container = document.getElementById('modal');
  }
  return container
    ? createPortal(
      <>
        {open &&
          <ModalStyled.Wrapper>
            <ModalStyled.Content>
              <ModalStyled.Close onClick={close}><div><CgClose /></div>CERRAR</ModalStyled.Close>
              {children}
            </ModalStyled.Content>
          </ModalStyled.Wrapper>
        }
      </>
      , container
    )
    : null;
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.node.isRequired,
  close: PropTypes.node.isRequired
};

export default Modal;
