import PropTypes from 'prop-types';
import { Container, ContainerForm } from '@components/containers';
import { Button } from '@components/ui';
import Image from 'next/image';
import { AiFillPrinter } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { apiClient, apiProductDetail } from '@services/api';
import { getDate } from '@libs/utils';
const DivBtn = styled.div`
display: flex;
justify-content: right;
button{
  margin:0 1rem;
}
`;
const DivTitle = styled.div`
margin-top: 35px;
text-align: center;
text-decoration-line: underline;
h1{
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 40px;
}
`;
const DivP = styled.div`
margin: 0 5rem;
margin-top: 45px;
align-items: center;
  .pTitle{
    margin: auto;
    text-align: left;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
  }
  .pContainer{
    width: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    margin-top: 15px;
  }
  @media print {
    margin: 0;
  }
`;
const DivSignature = styled.div`
display: flex;
width: 100%;
margin: auto;
margin-top: 100px;
justify-content: center;
text-align: center;
div{
  margin: 0 50px;
}
.signature{
  width: 150px;
}
`;

export const getServerSideProps = async ({ params }) => {
  const { id } = params;
  const { data: productDetail } = await apiProductDetail.getProductDetail(id);
  const { data: client } = await apiClient.getClient(productDetail.client);

  return {
    props: {
      productDetail,
      client
    }
  };
};

const FormatoDocumentoRecepcion = ({ productDetail, client }) => {
  const { back } = useRouter();
  return (
    <Container className='pb-4'>
      <div className='noPrint'>
        <ContainerForm title='Documento de recepción' className='position-relative'>
          <DivBtn className='noPrint'>
            <Button variant='outline' color='primary' onClick={() => back()}><BiArrowBack size='1.3em' />IR ATRAS</Button>
            <Button variant='outline' color='primary' onClick={() => window.print()}><AiFillPrinter size='1.3em' />IMPRIMIR</Button>
          </DivBtn>
        </ContainerForm>
      </div>
      <ContainerForm className='mt-4'>
        <Image src='/logo.png' width='125px' height='30px' alt='logo' />
        <DivTitle>
          <h1>DOCUMENTO DE RECEPCION DE<br />
            PRODUCTO EN GARANTIA</h1>
        </DivTitle>
        <DivP>
          <p >
            Consta en el presente documento la recepcion del producto {productDetail.productName} que deja en garantía {client.lastname + ' ' + client.name} con número de
            documento <b>{client?.document?.number}</b> los días y horas del {getDate(productDetail.returnDate, 'DD/MM/YYYY - HH:mm:ss')}
          </p>
          <p className='mt-3'>
            Dejandolo en las condiciones y estado que se mencionan a continuación:
          </p>
          <p className='mt-4 pTitle'>
            1. Caracteristicas:
          </p>
          <p className='pContainer'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Delectus dolore nobis sapiente eius ab commodi aspernatur
            deserunt vero, facere, numquam nesciunt quis odio velit
            molestiae! Vero odit praesentium cum vel?
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Delectus dolore nobis sapiente eius ab commodi aspernatur
            deserunt vero, facere, numquam nesciunt quis odio velit
            molestiae! Vero odit praesentium cum vel?
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Delectus dolore nobis sapiente eius ab commodi aspernatur
            deserunt vero, facere, numquam nesciunt quis odio velit
            molestiae! Vero odit praesentium cum vel?
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Delectus dolore nobis sapiente eius ab commodi aspernatur
            deserunt vero, facere, numquam nesciunt quis odio velit
            molestiae! Vero odit praesentium cum vel?
          </p>
          <p className='mt-3 pTitle'>
            2. Observaciones externas / internas:
          </p>
          <p className='pContainer'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Delectus dolore nobis sapiente eius ab commodi aspernatur
            deserunt vero, facere, numquam nesciunt quis odio velit
            molestiae! Vero odit praesentium cum vel?
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Delectus dolore nobis sapiente eius ab commodi aspernatur
            deserunt vero, facere, numquam nesciunt quis odio velit
            molestiae! Vero odit praesentium cum vel?
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Delectus dolore nobis sapiente eius ab commodi aspernatur
            deserunt vero, facere, numquam nesciunt quis odio velit
            molestiae! Vero odit praesentium cum vel?
          </p>
          <p className='mt-3 pTitle'>
            3. Observaciones funcionamiento o técnico:
          </p>
          <p className='pContainer'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Delectus dolore nobis sapiente eius ab commodi aspernatur
            deserunt vero, facere, numquam nesciunt quis odio velit
            molestiae! Vero odit praesentium cum vel?
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Delectus dolore nobis sapiente eius ab commodi aspernatur
            deserunt vero, facere, numquam nesciunt quis odio velit
            molestiae! Vero odit praesentium cum vel?
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Delectus dolore nobis sapiente eius ab commodi aspernatur
            deserunt vero, facere, numquam nesciunt quis odio velit
            molestiae! Vero odit praesentium cum vel?
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Delectus dolore nobis sapiente eius ab commodi aspernatur
            deserunt vero, facere, numquam nesciunt quis odio velit
            molestiae! Vero odit praesentium cum vel?
          </p>
          <DivSignature >
            <div>
              ______________________________<br />
              <div className='signature'>{client.lastname + ' ' + client.name}</div>
            </div>
            <div>
              ______________________________<br />
              <div className='signature'>Cash Sol Perú SAC</div>
            </div>
          </DivSignature>
        </DivP>
      </ContainerForm>
    </Container>
  );
};

FormatoDocumentoRecepcion.propTypes = {
  productDetail: PropTypes.object,
  client: PropTypes.object
};

FormatoDocumentoRecepcion.layout = 'public';

export default FormatoDocumentoRecepcion;
