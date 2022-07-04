import { COLORS, GRAY_SCALE } from '@styles';
import styled, { css } from 'styled-components';
import Container from '../Container';

const DivContainer = styled.div`
position: relative;
background-color: ${COLORS.white};
min-height: ${({ height }) => height};
padding: 2.5rem;
border: 1px solid ${GRAY_SCALE[100]};
border-radius: 10px;
.divTitle{
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 35px;
  margin-bottom: 3rem;
  color: ${COLORS.blue};
  
${({ subtitle }) => subtitle && css`
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 23px;
color: ${COLORS.blue};
`}
}

@media print {
  @page {
    size: A4 landscape;
  }
  border: none;
  position: absolute;
  top: -1.5rem;
  left: 0;
  bottom: 0;
  right: 0;
}
`;

// eslint-disable-next-line react/prop-types
const ContainerForm = ({ children, title, height, ...prots }) => {
  return (
    <Container>
        <DivContainer height={height} {...prots}>
          {title && <div className='divTitle'>{title}</div>}
          {children}
        </DivContainer>
    </Container>
  );
};

export default ContainerForm;
