import { Button } from '@components/ui';
import { Col, Container, Row } from 'react-bootstrap';
import router from 'next/router';
import { Loader } from '@components/containers';
import { useAppContext } from '@contexts/AppContext';

const configuraciones = () => {
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
                  <Button margin='auto 18px auto auto' menu onClick={() => { router.push('/configuraciones/registo-productos-en-base-de-datos'); }}><img src='/icons/registroProductoBaseDatos.svg' />Registro de productos
                    en base de datos</Button>
                </Col>
                <Col lg={6} sm={12}>
                </Col>
              </Row>
            </Container>
          : <Loader/>
      }
    </>
  );
};

configuraciones.layout = 'menu';

export default configuraciones;
