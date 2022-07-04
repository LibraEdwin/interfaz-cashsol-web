import { ContainerForm, Loader, Modal } from '@components/containers';
import { Button, ButtonLabel } from '@components/ui';
import { AiOutlineSearch } from 'react-icons/ai';
import router from 'next/router';
import { useAppContext } from '@contexts/AppContext';
import { ModalReferenceProduct, SearchRegistroProductosGarantia, FormProduct } from '@components/blocks';
import { useState } from 'react';
import { ProductDetailProvider } from '@contexts/ProductDetailContext';
import { apiProducts } from '@services/api';

const registroProductosGarantia = () => {
  const [modalCustomerSearch, setModalCustomerSearch] = useState(false);
  const [modalReferenceProduct, setModalReferenceProduct] = useState(false);
  const [disabledModalCustomerSearch, setDisabledModalCustomerSearch] = useState(true);
  const { tokenUserExist } = useAppContext();
  // filtro buscar producto por ID
  const [dataProductProperty, setDataProductProperty] = useState([]);
  // datos del cliente
  const [dataCustomer, setDatoCustomer] = useState({});

  const SearchCustomerProduct = async (clientsID) => {
    const { data } = await apiProducts.findProductByClientID(clientsID);
    console.log(await apiProducts.findProductByClientID(clientsID));
    setDataProductProperty(data.productDetails);
  };

  if (typeof window !== 'undefined' && !tokenUserExist) {
    router.push('/login');
  };

  if (!tokenUserExist) {
    return <Loader />;
  }

  return (
    <ProductDetailProvider>
      <SearchRegistroProductosGarantia
        setDisabledModalCustomerSearch={setDisabledModalCustomerSearch}
        SearchCustomerProduct={SearchCustomerProduct}
        setDatoCustomer={setDatoCustomer}
        dataCustomer={dataCustomer} />
      <div className='pb-3'>
        <ContainerForm subtitle title='Datos del producto'>
          <ButtonLabel marginTop='-3rem' marginBottom='-1rem'>
            <Button className='px-0' onClick={() => setModalCustomerSearch(true)} disabled={disabledModalCustomerSearch}><AiOutlineSearch />BUSCAR PODUCTO EN GARANTÍA</Button>{' '}
            <Button className='px-0' onClick={() => setModalReferenceProduct(true)}><AiOutlineSearch />BUSCAR REFERENCIA DE PRODUCTO</Button>{' '}
          </ButtonLabel>
          <FormProduct
            open={modalCustomerSearch}
            close={() => setModalCustomerSearch(false)}
            dataProductProperty={dataProductProperty}
            setDataProductProperty={setDataProductProperty}
            dataCustomerID={dataCustomer.id}
            SearchCustomerProductClient={SearchCustomerProduct} />
        </ContainerForm>
        <Modal open={modalReferenceProduct} close={() => setModalReferenceProduct(false)}>
          <ModalReferenceProduct />
        </Modal>
      </div>
    </ProductDetailProvider>
  );
};

export default registroProductosGarantia;
