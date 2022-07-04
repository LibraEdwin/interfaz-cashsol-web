import { FONTS_SIZES } from '@styles';
import styled, { css } from 'styled-components';

const InputMessage = styled.span`
  display: inline-block;
  font-size: ${FONTS_SIZES.sm};
  padding-left: 1.2rem;
  margin-top: 0.5rem;
  
  ${({ theme, color }) => color && css`
    color: ${theme.colors[color]};
  `}
`;

export default InputMessage;
