import { Button } from '@components/ui';
import { Col, Container, Row } from 'react-bootstrap';
import router from 'next/router';
import { useEffect } from 'react';
import { useAppContext } from '@contexts/AppContext';
import { Loader } from '@components/containers';

const cajaCobranzas = () => {
  const { tokenUserExist } = useAppContext();

  useEffect(() => {
    if (!tokenUserExist) {
      router.push('/login');
    }
  }, []);
  return (
    <>
      {
        tokenUserExist
          ? <Container>
              <Row className='pt-5'>
                <Col lg={6} sm={12}>
                  <Button menu onClick={() => { router.push('/caja-y-cobranzas/registro-de-caja-y-cobranzas'); }}>
                    <img src='/icons/registroCajaCobranzas.svg' />Registro de caja y cobranzas
                  </Button>
                </Col>
                <Col lg={6} sm={12}>
                  <Button margin='auto auto auto 18px' menu><img src='/icons/registroVentasCobranzas.svg' />Reporte de ventas y cobranzas</Button>
                </Col>
              </Row>
              <Row className='pt-5'>
                <Col lg={6} sm={12}>
                </Col>
                <Col lg={6} sm={12}>
                  <Button margin='auto auto auto 18px' menu><img src='/icons/reporteDeudores.svg' />Reporte de deudores</Button>
                </Col>
              </Row>
            </Container>
          : <Loader/>
      }
    </>
  );
};

cajaCobranzas.layout = 'menu';

export default cajaCobranzas;
