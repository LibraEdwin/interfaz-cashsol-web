import { Card, Container, ContainerTrafficLights, Table, Loader } from '@components/containers';
import { Subtitle, Title } from '@components/typography';
import { FormGroup, Label, Input, Select, TrafficLights, Button, Checkbox } from '@components/ui';
import { Col, Row } from 'react-bootstrap';
import { BsFillEyeFill } from 'react-icons/bs';
import { MdViewList } from 'react-icons/md';
import router from 'next/router';
import { useEffect } from 'react';
import { useAppContext } from '@contexts/AppContext';

const headers = [
  { name: '' },
  { name: 'Número de cuota' },
  { name: 'Vencimiento' },
  { name: 'Capital' },
  { name: 'Interes' },
  { name: 'Mora' },
  { name: 'Total' }
];

const content = [
  {
    id: 1,
    quotaNumber: '1',
    expiration: '22/04/2022',
    capital: 2000.00,
    interest: 26.00,
    mora: 10.00,
    total: 226.00
  },
  {
    id: 2,
    quotaNumber: '2',
    expiration: '22/05/2022',
    capital: 2000.00,
    interest: 26.00,
    mora: 10.00,
    total: 226.00
  },
  {
    id: 3,
    quotaNumber: '3',
    expiration: '22/0/2022',
    capital: 2000.00,
    interest: 26.00,
    mora: 10.00,
    total: 226.00
  },
  {
    id: 4,
    quotaNumber: '4',
    expiration: '22/07/2022',
    capital: 2000.00,
    interest: 26.00,
    mora: 10.00,
    total: 226.00
  }
];

const CashRegister = () => {
  const { tokenUserExist } = useAppContext();
  console.log(tokenUserExist, 'cash');

  useEffect(() => {
    console.log(tokenUserExist, 'efect');
    if (!tokenUserExist) {
      router.push('/login');
    }
  }, [tokenUserExist]);

  return (
    <>
      {
        tokenUserExist
          ? <Container>
              <Card border className='p-5'>
                <Title color='primary'>Registro de caja</Title>
                <Row className='align-items-end mt-5 pt-4'>
                  <Col lg={4}>
                    <FormGroup>
                      <Label>Número de documento</Label>
                      <Input type='text' placeholder='Ingrese un  numero de documento + ENTER' background='warning'/>
                    </FormGroup>
                  </Col>
                  <Col lg={4}>
                    <FormGroup>
                      <Label>Tipo de documento</Label>
                      <Select>
                        <option>DNI</option>
                        <option>Pasaporte</option>
                        <option>Carnet de extranjeria</option>
                      </Select>
                    </FormGroup>
                  </Col>
                  <Col lg={4}>
                    <ContainerTrafficLights className='justify-content-end'>
                      <TrafficLights estado='BUENO'/>
                    </ContainerTrafficLights>
                  </Col>
                </Row>
                <Row className='mt-3'>
                  <Col lg={4}>
                    <FormGroup>
                      <Label>Nombres</Label>
                      <Input type='text'/>
                    </FormGroup>
                  </Col>
                  <Col lg={8}>
                    <FormGroup>
                      <Label>Apellidos</Label>
                      <Input type='text'/>
                    </FormGroup>
                  </Col>
                </Row>
                <Row className='align-items-end mb-5 mt-3'>
                  <Col lg={4}>
                    <FormGroup>
                      <Label>Número de prestamo / contrato</Label>
                      <Select>
                        <option>2022-001 PRESTAMO CON GARANTIA</option>
                        <option>Opcion 2</option>
                        <option>Opcion 3</option>
                      </Select>
                    </FormGroup>
                  </Col>
                  <Col lg={2}>
                    <FormGroup>
                      <Label>Cuotas a pagar</Label>
                      <Input type='number'/>
                    </FormGroup>
                  </Col>
                </Row>
                <Row className='mb-4'>
                  <Col lg={6}>
                    <Subtitle color='primary'>Cuotas pendientes de pago</Subtitle>
                  </Col>
                  <Col lg={6} className='text-end'>
                    <Button variant='ghost'>
                      <BsFillEyeFill size='1.6em'/>Prestamos pendientes (1)</Button>
                  </Col>
                </Row>
                <Row className='mb-4'>
                  <Col lg={12}>
                  <Table.Wrapper maxHeight={270} >
                    <Table.Content >
                      <Table.Head sticky>
                        <Table.Row>
                          {headers.map((item, key) => {
                            return (
                              <Table.Col as='th' scope='col' key={key}>{item.name}</Table.Col>
                            );
                          })}
                        </Table.Row>
                      </Table.Head>
                      <Table.Body>
                        {content.map(item => {
                          return (
                            <Table.Row key={item.id}>
                              <Table.Col as='th' scope='row'><Checkbox type='checkbox'/></Table.Col>
                              <Table.Col className='text-center'>{item.quotaNumber}</Table.Col>
                              <Table.Col className='text-center'>{item.expiration}</Table.Col>
                              <Table.Col className='text-center'>{item.capital}</Table.Col>
                              <Table.Col className='text-center'>{item.interest}</Table.Col>
                              <Table.Col className='text-center'>{item.mora}</Table.Col>
                              <Table.Col className='text-center'>{item.total}</Table.Col>
                            </Table.Row>
                          );
                        })}
                      </Table.Body>
                    </Table.Content>
                  </Table.Wrapper>
                  </Col>
                </Row>
                <Row className='justify-content-end'>
                  <Col >
                    <FormGroup>
                      <Label>Total capital a pagar</Label>
                      <Input
                        type='text'
                        background='info'
                        defaultValue={'0.00'}
                        className='text-center'
                      />
                    </FormGroup>
                  </Col>
                  <Col lg={3}>
                    <FormGroup>
                      <Label>Total interes a pagar</Label>
                      <Input
                        type='text'
                        background='info'
                        defaultValue={'0.00'}
                        className='text-center'
                      />
                    </FormGroup>
                  </Col>
                  <Col lg={3}>
                    <FormGroup>
                      <Label>Total mora a pagar</Label>
                      <Input
                        type='text'
                        background='info'
                        defaultValue={'0.00'}
                        className='text-center'
                      />
                    </FormGroup>
                  </Col>
                  <Col lg={3}>
                    <FormGroup>
                      <Label>Total a pagar (Capital + interes + mora)</Label>
                      <Input
                        type='text'
                        background='success'
                        defaultValue={'0.00'}
                        className='text-center'
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row className='justify-content-end align-items-end mt-3'>
                  <Col lg={3}>
                    <Button
                      variant='outline'
                      color='primary'
                      block
                      size='15'
                    >
                      <MdViewList size='2em'/>historial de pagos
                    </Button>
                  </Col>
                  <Col lg={2}>
                    <FormGroup>
                      <Label>Tipo de cobro</Label>
                      <Select>
                        <option>TARJETA VISA</option>
                        <option>Transferencia</option>
                        <option>Efectivo</option>
                      </Select>
                    </FormGroup>
                  </Col>
                </Row>
                <Row className='justify-content-end mt-4'>
                  <Col lg={2}>
                    <Button primary block size='20'>Nuevo</Button>
                  </Col>
                  <Col lg={5}>
                    <Button primary block size='20'>Registrar pago</Button>
                  </Col>
                </Row>
              </Card>
            </Container>
          : <Loader/>
      }
    </>
  );
};

export default CashRegister;
