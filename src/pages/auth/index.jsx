import { FormLogin } from '@components/blocks';
import { Container } from '@components/containers';
import { Col, Row } from 'react-bootstrap';

const AuthPage = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8} lg={6} xl={5}>
          <FormLogin />
        </Col>
      </Row>
    </Container>
  );
};

AuthPage.layout = 'auth';

export default AuthPage;
