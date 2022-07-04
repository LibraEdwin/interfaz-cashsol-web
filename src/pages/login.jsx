import { ContainerNavbar } from '@components/containers';
import { FormLogin } from '@components/blocks';
import { Row } from 'react-bootstrap';
import Image from 'next/image';
import styled from 'styled-components';

const ContainerForm = styled.div`
  width: 435px;
  margin: auto
`;

const Login = () => {
  return (
    <ContainerNavbar variant='primary'>
      <div className='d-flex justify-content-center pt-5 pb-5 mb-5'>
        <Image src='/logo-white.png' width={104} height={77}/>
      </div>
      <Row className=' m-auto'>
        <ContainerForm>
          <FormLogin/>
        </ContainerForm>
      </Row>
    </ContainerNavbar>
  );
};

Login.layout = 'auth';

export default Login;
