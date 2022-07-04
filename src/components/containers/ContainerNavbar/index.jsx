import { COLORS, GRAY_SCALE } from '@styles';
import styled, { css } from 'styled-components';

const DivContainer = styled.div`
min-height: 100vh;
${({ variant }) => {
    let cssFinal = '';
    if (variant === 'primary') {
      cssFinal += `
      background: linear-gradient(180deg, ${COLORS.blue} 38.85%, ${COLORS.white} 100%);
          `;
    }
    if (variant === 'secondary') {
      cssFinal += `
      background: linear-gradient(180deg, ${COLORS.white} 17.86%, ${GRAY_SCALE[100]} 100%);
          `;
    }
    return css`
  ${cssFinal}
`;
  }}
`;

// eslint-disable-next-line react/prop-types
const ContainerNavbar = ({ children, ...prots }) => {
  return (
    <DivContainer {...prots}>
      {children}
    </DivContainer>
  );
};

export default ContainerNavbar;
