import styled, { css } from 'styled-components';
import { RESET_BUTTON } from '@styles';

const ButtonStatus = styled.button`
${RESET_BUTTON}
width: 58px;
height: 21px;
font-weight: 600;
font-size: 8px;
line-height: 10px;
text-transform: capitalize;
padding: .5rem;
cursor: default;

${({ theme, variant }) => {
  let cssFinal = '';

  if (variant === 'vencido') {
    cssFinal += `
      background: #FFFFFF;
      border: 1px solid ${theme.colors.danger};
      border-radius: 10px;
      color: ${theme.colors.danger}
    `;
  }

  if (variant === 'cancelado') {
    cssFinal += `
      background: #FFFFFF;
      border: 1px solid ${theme.colors.success};
      border-radius: 10px;
      color: ${theme.colors.success}
    `;
  }

  if (variant === 'pendiente') {
    cssFinal += `
      background: #FFFFFF;
      border: 1px solid ${theme.colors.primary};
      border-radius: 10px;
      color: ${theme.colors.primary}
    `;
  }

  return css`
  ${cssFinal}
  `;
}}
`;

export default ButtonStatus;
