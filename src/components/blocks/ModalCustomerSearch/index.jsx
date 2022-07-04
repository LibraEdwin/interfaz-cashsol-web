import { Table } from '@components/containers';
import { FormGroup, ImgCaja, Input, Label, UtilitiesButton } from '@components/ui';
import { apiClient } from '@services/api';
import { BLUE_SCALE } from '@styles';
import { useRef, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsFillEyeFill } from 'react-icons/bs';

// eslint-disable-next-line react/prop-types
const ModalCustomerSearch = ({ closeModalCustomer, selectClient }) => {
  const [dataCustomerSearch, setDataCustomerSearch] = useState([]);
  const SearchCustomer = async (name) => {
    const { data } = await apiClient.findClientByName(name);
    setDataCustomerSearch(data.clients);
  };
  const viewClient = async (dataCustomer) => {
    selectClient(dataCustomer);
    closeModalCustomer(false);
  };

  const debounceRef = useRef();
  const onQueryChanged = (e) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    debounceRef.current = setTimeout(() => {
      const { value } = e.target;
      SearchCustomer(value);
    }, 500);
  };
  return (
    <div>
      <FormGroup className='mb-4'>
        <Label>Búsqueda por nombre de cliente</Label>
        <Input type="text" placeholder="Escriba un nombre" onChange={onQueryChanged} />
        <BiSearch />
      </FormGroup>
      {(dataCustomerSearch.length > 0 &&
        (<Table.Wrapper>
          <Table.Content>
            <Table.Head sticky>
              <Table.Row>
                <Table.Col as='th' textAlign='left'>Nro. doc</Table.Col>
                <Table.Col as='th' textAlign='left'>Apellidos y nombres</Table.Col>
                <Table.Col as='th' >Estado laboral</Table.Col>
                <Table.Col as='th' >Ver</Table.Col>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              {dataCustomerSearch.map((client, i) =>
                <Table.Row key={client.name + i++}>
                  <Table.Col>{client.document.number}</Table.Col>
                  <Table.Col>
                    {client.lastname + ' ' + client.name}
                  </Table.Col>
                  <Table.Col className='text-center'>
                    {client.employmentStatus}
                  </Table.Col>
                  <Table.Col as='th' >
                    < UtilitiesButton size='2rem' color={BLUE_SCALE[500]} onClick={() => viewClient(client)}><BsFillEyeFill /></UtilitiesButton>
                  </Table.Col>
                </Table.Row>
              )}
            </Table.Body>
          </Table.Content>
        </Table.Wrapper>)) || (dataCustomerSearch.length === 0 &&
          (<ImgCaja src='/caja-vacia.png' />))
      }
    </div>
  );
};

export default ModalCustomerSearch;
