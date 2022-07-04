import { FormLogin } from '@components/blocks';
import { Container } from '@components/containers';

const FormsUI = () => {
  return (
    <Container>
      <h1>Forms</h1>
      <ol>
        <li>
          <h3> Formulario login </h3>
          <FormLogin />
        </li>
      </ol>
    </Container >
  );
};

export default FormsUI;
