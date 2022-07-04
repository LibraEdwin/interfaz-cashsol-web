import { Button } from '@components/ui';
import { Col, Container, Row } from 'react-bootstrap';
import router from 'next/router';
import { Loader } from '@components/containers';
import { useAppContext } from '@contexts/AppContext';

const prestamosGarantias = () => {
  const { tokenUserExist } = useAppContext();

  if (typeof window !== 'undefined' && !tokenUserExist) {
    router.push('/login');
  };

  return (
    <>
      {
        tokenUserExist
          ? <Container>
              <Row className='pt-5'>
                <Col lg={6} sm={12}>
                  <Button
                    menu
                    margin='auto 18px auto auto'
                    onClick={() => { router.push('/prestamos-y-garantias/registro-de-prestamos'); }}
                  >
                    <img src='/icons/registroPrestamo.svg' />Registro de prestamos
                  </Button>
                </Col>
                <Col lg={6} sm={12}>
                  <Button margin='auto auto auto 18px' menu>
                    <img src='/icons/historialPrestamosCreditos.svg' />Historial de prestamos y créditos
                  </Button>
                </Col>
              </Row>
              <Row className='pt-5'>
                <Col lg={6} sm={12}>
                  <Button margin='auto 18px auto auto' menu onClick={() => { router.push('/prestamos-y-garantias/registro-de-productos-en-garantia'); }}>
                    <img src='/icons/registroProductosGarantia.svg' />Registro de productos en garantía
                  </Button>
                </Col>
                <Col lg={6} sm={12}>
                  <Button margin='auto auto auto 18px' menu>
                    <img src='/icons/registroAdendas.svg' />Registro de adendas
                  </Button>
                </Col>
              </Row>
            </Container>
          : <Loader/>
      }
    </>
  );
};

prestamosGarantias.layout = 'menu';

export default prestamosGarantias;
