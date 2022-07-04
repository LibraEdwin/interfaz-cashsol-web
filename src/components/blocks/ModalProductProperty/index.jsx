import { Table } from '@components/containers';
import { FormGroup, ImgCaja, Input, Label, UtilitiesButton } from '@components/ui';
import { apiProducts } from '@services/api';
import { BLUE_SCALE } from '@styles';
import { useRef } from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsFillEyeFill } from 'react-icons/bs';
import { useFormContext } from 'react-hook-form';

// eslint-disable-next-line react/prop-types
const ModalProductProperty = ({ dataProductProperty, setDataProductProperty, dataCustomerID, SearchCustomerProductClient }) => {
  const { getProductDetail } = useFormContext();
  const SearchCustomerProduct = async (clientsID, name) => {
    const { data } = await apiProducts.findProductByClientIDName(clientsID, name);
    const { productDetails } = data;
    setDataProductProperty(productDetails);
  };
  const debounceRef = useRef();
  const onQueryChanged = (e) => {
    const { value } = e.target;
    if (value.length >= 1) {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
      debounceRef.current = setTimeout(() => {
        SearchCustomerProduct(dataCustomerID, value);
        console.log(value);
      }, 500);
    }
    if (value.length === 0) {
      SearchCustomerProductClient(dataCustomerID);
    }
  };
  return (
    <div>
      <FormGroup className='mb-4'>
        <Label>Referencia de producto</Label>
        <Input type="text" placeholder="Escriba un nombre" onChange={onQueryChanged} />
        <BiSearch />
      </FormGroup>
      {(dataProductProperty.length >= 1 &&
        (<Table.Wrapper>
          <Table.Content>
            <Table.Head sticky>
              <Table.Row>
                <Table.Col as='th' textAlign='left'>Código</Table.Col>
                <Table.Col as='th' textAlign='left'>Producto / Inmueble</Table.Col>
                <Table.Col as='th' >Producto</Table.Col>
                <Table.Col as='th' >Ver</Table.Col>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              {dataProductProperty.map((product, i) =>
                <Table.Row key={product.id + i}>
                  <Table.Col>
                    {product.id}
                  </Table.Col>
                  <Table.Col>
                    {product.productName}
                  </Table.Col>
                  <Table.Col className='text-center'>
                    {product.product.name}
                  </Table.Col>
                  <Table.Col as='th' >
                    <UtilitiesButton size='2rem' color={BLUE_SCALE[500]} onClick={() => getProductDetail(product.id)}><BsFillEyeFill /></UtilitiesButton>
                  </Table.Col>
                </Table.Row>
              )}
            </Table.Body>
          </Table.Content>
        </Table.Wrapper>)) || (dataProductProperty.length === 0 &&
          (<ImgCaja src='/caja-vacia.png' />))
      }
    </div>
  );
};

export default ModalProductProperty;
