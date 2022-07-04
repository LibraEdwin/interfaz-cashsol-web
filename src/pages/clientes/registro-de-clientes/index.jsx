
import { Card, Container, Loader } from '@components/containers';
import { Button } from '@components/ui';
import { Title } from '@components/typography';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaThList } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { FormClient } from '@components/blocks';
import { useAppContext } from '@contexts/AppContext';
import router from 'next/router';
import { ClientProvider } from '@contexts/ClientContext';

const CustomerRegistration = () => {
  const [modalCustomerSearch, setModalCustomerSearch] = useState(false);
  const { tokenUserExist } = useAppContext();

  useEffect(() => {
    if (!tokenUserExist) {
      router.push('/login');
    }
  }, []);

  if (!tokenUserExist) {
    return <Loader />;
  }

  return (
    <ClientProvider>
      <Container>
        <div className='pb-3'>
          <Card border className='p-5'>
            <Title color='primary'>Registro de cliente</Title>
            <div className="text-end mb-3">
              <Button className='pe-3' onClick={() => setModalCustomerSearch(true)}><AiOutlineSearch /> BÚSQUEDA DE CLIENTE</Button>{' '}
              <Button className='px-0'><FaThList /> Ver historial crediticio</Button>
            </div>
            <FormClient openModal={modalCustomerSearch} closeModal={() => setModalCustomerSearch(false)} />
          </Card>
        </div>
      </Container>
    </ClientProvider>
  );
};
// CustomerRegistration.layout = 'admin';
export default CustomerRegistration;
