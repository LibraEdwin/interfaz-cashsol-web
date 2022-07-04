import styled, { css } from 'styled-components';
import { GRAY_SCALE, RED_SCALE } from '@styles';

const Select = styled.select`
  width: 100%;
  appearance: none;
  background: #FFFFFF;
  border: 1px solid ${GRAY_SCALE[600]};
  border-radius: 5px;
  cursor: pointer;
  padding: 1.1rem 1rem;
  color: ${GRAY_SCALE[800]};

  background-image: url('/icons/down-arrow.svg');  
  background-repeat: no-repeat;
  background-position: calc(100% - 1rem) calc(100% - 1rem);
  padding-right: 2.5rem;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }

  ${({ invalid }) => invalid && css`
    &, 
    &:focus {
      border: 1px solid ${RED_SCALE[500]};
    }
  `}  
`;

export default Select;
