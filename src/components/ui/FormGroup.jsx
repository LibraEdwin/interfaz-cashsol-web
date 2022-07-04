import { COLORS, GRAY_SCALE } from '@styles';
import styled, { css } from 'styled-components';
import Input from './Input';
import Label from './Label';

const FormGroup = styled.div`
  width: 100%;
  position: relative;

  ${Label} {
    margin-bottom: 0.5rem;
  }

  ${Input} + svg {
    color: ${GRAY_SCALE[400]};
    position: absolute;
    bottom: 1.2rem;
    right: 1rem;
  }

  ${({ buttonRight }) => buttonRight && css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    ${Input} {
      width: calc(100% - 50px);
    }
  `}
  ${({ buttonRightSearch }) => buttonRightSearch && css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    ${Input} {
      width:100% ;
    }
    button{
      position: absolute;
      top: 0;
      right: 0;
      font-size: 2rem;
    }
  `}
  
  ${({ buttonRightInputSearch }) => buttonRightInputSearch && css`
    display: block;
    flex-wrap: wrap;
    justify-content: space-between;

    ${Input} {
      width:100% ;
    }
    .btnClose{
      position: absolute;
      top: 0px;
      right: 0;
      font-size: 2rem;
    }
    .btnSearch{
      position: absolute;
      top: 0px;
      right: 0;
      font-size: 2rem;
      color: ${COLORS.blue};
    }
  `}
`;

export default FormGroup;
