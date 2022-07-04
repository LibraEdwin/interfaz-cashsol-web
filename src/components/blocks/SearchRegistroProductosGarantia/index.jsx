import { ContainerForm } from '@components/containers';
import { Button, ButtonLabel, FormGroup, Input, Label, SearchDiv } from '@components/ui';
import { Col, Row } from 'react-bootstrap';
import { AiOutlineClose } from 'react-icons/ai';
import { GoSearch } from 'react-icons/go';
import { useRef, useState } from 'react';
import { apiClient } from '@services/api';
import { useProductDetailContext } from '@contexts/ProductDetailContext';
import TYPES_PRODUCT_DETAIL from '@contexts/ProductDetailContext/types';

// eslint-disable-next-line react/prop-types
const SearchRegistroProductosGarantia = ({ setDisabledModalCustomerSearch, SearchCustomerProduct, setDatoCustomer, dataCustomer }) => {
  const [{ productDetail }, dispatch] = useProductDetailContext();
  // datos de todos los clientes
  const [dataCustomerSearch, setDataCustomerSearch] = useState([]);
  // palabra de busqueda
  const [search, setSearch] = useState('');
  // limitacion de la peticon para el more
  const [limit, setLimit] = useState(5);

  const debounceRef = useRef();
  const onQueryChanged = (e) => {
    setSearch(e.target.value);
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    debounceRef.current = setTimeout(() => {
      const { value } = e.target;
      setSearch(value);
      setLimit(5);
      SearchCustomer(value, 5);
    }, 500);
  };
  const SearchCustomer = async (name, limit) => {
    const { data } = await apiClient.findClientByNameLimit(name, limit);
    setDataCustomerSearch(data.clients);
    setDisabledModalCustomerSearch(false);
  };
  const btnMore = () => {
    SearchCustomer(search, limit + 5);
    setLimit(limit + 5);
  };
  const btnElement = (customer) => {
    console.log(customer);
    SearchCustomerProduct(customer.id);
    setDatoCustomer(customer);
    dispatch({ type: TYPES_PRODUCT_DETAIL.UPDATE_CLIENT, payload: customer.id });
  };
  const btnDeleteSearch = () => {
    setDisabledModalCustomerSearch(true);
    setDataCustomerSearch([]);
    setSearch('');
    setDatoCustomer({});
  };
  return (
    <div className='pb-3'>
      <ContainerForm title='Registro de producto en garantía'>
        <ButtonLabel marginTop='-3rem' marginBottom='-1rem'>
          {/* <Modal open={openModal} close={() => closeMoldal(false)}>
            <ModalProductProperty
              dataProductProperty={dataProductProperty}
              setDataProductProperty={setDataProductProperty}
              dataCustomerID={dataCustomer.id}
              SearchCustomerProductClient={SearchCustomerProduct} />
          </Modal> */}
        </ButtonLabel>
        <Row className='mt-3'>
          <Col>
            <FormGroup className='mb-4' buttonRightInputSearch>
              <Label>Dueño o propietario</Label>
              {(dataCustomer.name && (
                <>
                  <FormGroup buttonRightSearch>
                    <Input
                      type="text"
                      background='info'
                      value={dataCustomer.document?.number + ' - ' + dataCustomer?.lastname + ' ' + dataCustomer?.name} />
                    <Button variant='ghost' onClick={() => btnDeleteSearch()}><AiOutlineClose /></Button>
                  </FormGroup>
                </>
              )) || (!dataCustomer.name && (
                <>
                  <FormGroup buttonRightInputSearch>
                    <Input
                      type="text"
                      onChange={onQueryChanged}
                      background='info'
                      invalidIco
                      placeholder="Buscar..."
                      value={search} />
                    {
                      (search.length > 0 && (
                        <Button variant='ghost' onClick={() => btnDeleteSearch()} className='btnClose'><AiOutlineClose /></Button>
                      )) || (search.length === 0 && (
                        <Button variant='ghost' className='btnSearch' ><GoSearch /></Button>
                      ))
                    }
                  </FormGroup>
                  {dataCustomerSearch.length > 0 &&
                    (<div>
                      <SearchDiv
                        btnMore={btnMore}
                        btnElement={btnElement}>
                        {dataCustomerSearch}
                      </SearchDiv>
                    </div>)}
                </>
              ))}
            </FormGroup>
          </Col>
        </Row>
      </ContainerForm>
    </div>
  );
};
export default SearchRegistroProductosGarantia;
