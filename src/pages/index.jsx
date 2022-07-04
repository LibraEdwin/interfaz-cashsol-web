// import { useEffect } from 'react';
import { Container, Loader } from '@components/containers';
import { Button } from '@components/ui';
import { Col, Row } from 'react-bootstrap';
import router from 'next/router';
import { useAppContext } from '@contexts/AppContext';

export const getServerSideProps = async () => {
  return {
    props: {}
  };
};

const Home = () => {
  const { tokenUserExist } = useAppContext();

  if (typeof window !== 'undefined' && !tokenUserExist) {
    router.push('/login');
  };

  // useEffect(() => {
  //   if (!tokenUserExist) {
  //     router.push('/login');
  //   }
  // }, []);

  return (
    <>
      {
       tokenUserExist
         ? <Container>
            <Row className='pt-5'>
              <Col lg={6} sm={12}>
                <div>
                  <Button margin='auto 18px auto auto' menu onClick={() => { router.push('/clientes/registro-de-clientes'); }}>
                    <img src='/icons/registroClientes.svg' />
                    Registro de clientes
                  </Button>
                </div>
              </Col>
              <Col lg={6} sm={12}>
                <Button margin='auto auto auto 18px' menu onClick={() => { router.push('/caja-y-cobranzas'); }}>
                  <img src='/icons/cajaCobranzas.svg' />Caja y cobranzas
                </Button>
              </Col>
            </Row>
            <Row className='pt-5'>
              <Col lg={6} sm={12}>
                <Button margin='auto 18px auto auto' menu onClick={() => { router.push('/prestamos-y-garantias'); }}>
                  <img src='/icons/prestamosGarantia.svg' />Prestamos y garantias
                </Button>
              </Col>
              <Col lg={6} sm={12}>
                <Button margin='auto auto auto 18px' menu onClick={() => { router.push('/configuraciones'); }}>
                  <img src='/icons/configuraciones.svg' />Configuraciones
                </Button>
              </Col>
            </Row>
          </Container>
         : <Loader/>
      }
    </>
  );
};

Home.layout = 'mainMenu';

export default Home;
