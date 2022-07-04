import { Container } from '@components/containers';
import { DataLogin } from '@components/ui';
import { Col, Row } from 'react-bootstrap';
import styled, { css } from 'styled-components';

const ContainerHeader = styled.header`
.row{
  margin: auto;
  height: 150px;
}
${({ variant }) => {
    let cssFinal = '';
    if (variant === 'primary') {
      cssFinal += `
      .divMenu{
        margin: 4.5rem auto;
        text-align: left;
      }
      .divLogo{
        margin: 3rem auto ;
        text-align: center;
      }
      .divSesion{
        margin: 4rem auto;
        text-align: right;
        width: 362px;
        margin-right: 0;
      }
          `;
    }
    if (variant === 'secondary') {
      cssFinal += `
      .divMenu{
        margin: 3.5rem auto;
        text-align: left;
      }
      .divLogo{
        margin: 3rem auto ;
        text-align: center;
      }
      .divSesion{
        margin: 3rem auto;
        text-align: right;
        width: 362px;
        margin-right: 0;
      }
          `;
    }
    return css`
  ${cssFinal}
`;
  }}
  margin-bottom: 3rem;
`;

// eslint-disable-next-line react/prop-types
const Header = ({ children, variant, usuario }) => {
  return (
    <Container className='no-print'>
      <ContainerHeader variant={variant}>
        <Row>
          <Col>
            {(variant === 'primary' && (
              <div className='divMenu'>
                {children}
              </div>
            )) || (variant === 'secondary' && (
              <div className='divMenu'>
                {children}
              </div>
            ))}
          </Col>
          <Col>
            {(variant === 'primary' && (
              <div className='divLogo'>
                <img src='/logo-white.png' />
              </div>
            )) || (variant === 'secondary' && (
              <div className='divLogo'>
                <img src='/logo.png' />
              </div>
            ))}
          </Col>
          <Col>
            {(variant === 'primary' && (
              <div className='divSesion'>
                <DataLogin variant='primary' usuario={usuario} />
              </div>
            )) || (variant === 'secondary' && (
              <div className='divSesion'>
                <DataLogin variant='secondary' usuario={usuario} />
              </div>
            ))}
          </Col>
        </Row>
      </ContainerHeader>
    </Container>
  );
};

export default Header;
