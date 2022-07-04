import styled, { css } from 'styled-components';
import { BsPersonSquare } from 'react-icons/bs';
import { COLORS, GRAY_SCALE } from '@styles';

const ContainerDataLogin = styled.div`
margin: auto;
display: flex;
font-size: 1.4rem;
font-weight: 700;
line-height: 25px;

${({ variant }) => {
    let cssFinal = '';
    if (variant === 'primary') {
      cssFinal += `
              color:${COLORS.white};
              div{ 
                margin: auto;
              }
            `;
    }
    if (variant === 'secondary') {
      cssFinal += `
              color:${GRAY_SCALE[800]};
              div{ 
                margin: auto;
                margin-right: 0;
              }
            `;
    }
    return css`
    ${cssFinal}
  `;
  }}
`;

const ContainerUser = styled.div`
  display: flex;
  text-align: center;
  border: 3px solid ${COLORS.yellow};
  border-radius: 0.7rem;
  padding: 0.5rem 1rem;
  font-size: 1.4rem;
  div{
    margin: auto;
    margin-left: 0.5rem;
  }
}
${({ variant }) => {
    let cssFinal = '';
    if (variant === 'primary') {
      cssFinal += `
            width: 362px;
          `;
    }
    if (variant === 'secondary') {
      cssFinal += `
            width: 193px;
          `;
    }
    return css`
  ${cssFinal}
`;
  }}
`;

// eslint-disable-next-line react/prop-types
const DataLogin = ({ variant, usuario }) => {
  return (
    <ContainerDataLogin variant={variant}>
      {variant === 'primary' &&
        <div>
          Bienvenido:
        </div>
      }
      <ContainerUser >
        <BsPersonSquare /> <div>{usuario}</div>
      </ContainerUser>
    </ContainerDataLogin>
  );
};

export default DataLogin;
