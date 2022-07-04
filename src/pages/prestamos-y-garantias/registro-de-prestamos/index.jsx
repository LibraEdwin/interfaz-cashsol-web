import { Card, Container, ContainerTrafficLights, Table, Loader } from '@components/containers';
import { Subtitle, Title } from '@components/typography';
import { Button, ButtonStatus, FormGroup, Input, Label, Select, TrafficLights } from '@components/ui';
import { Col, Row } from 'react-bootstrap';
import { MdViewList, MdPrint, MdOutlineYoutubeSearchedFor } from 'react-icons/md';
import { FaSave } from 'react-icons/fa';
import router from 'next/router';
import { useAppContext } from '@contexts/AppContext';

const headers = [
  { name: 'Número de cuota' },
  { name: 'Vencimiento' },
  { name: 'Fecha de pago' },
  { name: 'Retraso' },
  { name: 'Capital' },
  { name: 'Interes' },
  { name: 'Mora' },
  { name: 'Total' },
  { name: 'Estado' }
];

const content = [
  {
    id: 1,
    quotaNumber: '1',
    expiration: '22/04/2022',
    paymentDate: '02/05/2022',
    delay: '10 días',
    capital: 200.00,
    interest: 26.00,
    mora: 10.00,
    total: 226.00,
    state: 'vencido'
  },
  {
    id: 2,
    quotaNumber: '2',
    expiration: '22/05/2022',
    paymentDate: '22/05/2022',
    delay: '0 días',
    capital: 200.00,
    interest: 26.00,
    mora: 10.00,
    total: 226.00,
    state: 'cancelado'
  },
  {
    id: 3,
    quotaNumber: '3',
    expiration: '22/06/2022',
    paymentDate: '-',
    delay: '0 días',
    capital: 200.00,
    interest: 26.00,
    mora: 10.00,
    total: 226.00,
    state: 'pendiente'
  },
  {
    id: 4,
    quotaNumber: '4',
    expiration: '22/07/2022',
    paymentDate: '-',
    delay: '0 días',
    capital: 200.00,
    interest: 26.00,
    mora: 10.00,
    total: 226.00,
    state: 'pendiente'
  }
];

const LoanRegistration = () => {
  const { tokenUserExist } = useAppContext();

  if (typeof window !== 'undefined' && !tokenUserExist) {
    router.push('/login');
  };

  return (
    <>
      {
        tokenUserExist
          ? <Container>
              <div className='pb-3'>
                <Card border className='p-5'>
                  <Title color='primary'>Registro de prestamo</Title>
                  <div className='text-end'>
                    <Button variant='ghost'><MdOutlineYoutubeSearchedFor size='2em'/>Buscar prestamo</Button>
                    <Button variant='ghost'><MdViewList size='2em'/>Nuevo prestamo</Button>
                    <Button variant='ghost'><MdViewList size='2em'/>generar adenda</Button>
                    <Button variant='ghost'><MdPrint size='2em'/>estado de cuenta</Button>
                  </div>
                  <Row>
                    <Col lg={12}>
                      <FormGroup>
                        <Label>Nombre de cliente</Label>
                        <Input
                          background='warning'
                          type="search"
                          defaultValue='45346677 - CATALINA DIAZ GRANADOS'/>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className='align-items-end mt-4'>
                    <Col lg={6}>
                      <Subtitle color='primary' className='m-0'>Datos de prestamo</Subtitle>
                    </Col>
                    <Col lg={6} className='text-end'>
                      <Title color='primary' className='m-0'>2022-0003</Title>
                    </Col>
                  </Row>
                  <Row className='align-items-end mt-4'>
                    <Col lg={5}>
                      <FormGroup>
                        <Label>Tipo de prestamo</Label>
                        <Select>
                          <option>Prestamo con garantía</option>
                          <option>Prestamo con garantía</option>
                          <option>Prestamo con garantía</option>
                        </Select>
                      </FormGroup>
                    </Col>
                    <Col lg={7}>
                      <Button
                        primary
                        block
                        size='16'
                      >
                        <MdViewList size='2em'/>SELECCIONAR PRODUCTO REGISTRADO
                      </Button>
                    </Col>
                  </Row>
                  <Row className='mt-4'>
                    <Col lg={9}>
                      <FormGroup>
                        <Label>Producto en garantía</Label>
                        <Input
                          background='info'
                          type="text"
                          defaultValue='234500 - LAVADORA SECADORA DE 15 KG - LG'
                        />
                      </FormGroup>
                    </Col>
                    <Col lg={3}>
                      <FormGroup>
                        <Label>Monto de tasación (S/)</Label>
                        <Input
                          background='info'
                          type="text"
                          defaultValue={'1 500.00'}
                          className='text-center'
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className='mt-4'>
                    <Col lg={4}>
                      <FormGroup>
                        <Label>Tasa de interes mensual de prestamo (%)</Label>
                        <Select>
                          <option>15 POR CIENTO</option>
                          <option>20 POR CIENTO</option>
                          <option>30 POR CIENTO</option>
                        </Select>
                      </FormGroup>
                    </Col>
                    <Col lg={4}>
                      <FormGroup>
                        <Label>Cuotas de prestamo</Label>
                        <Select>
                          <option>03 CUOTAS</option>
                          <option>04 CUOTAS</option>
                          <option>05 CUOTAS</option>
                        </Select>
                      </FormGroup>
                    </Col>
                    <Col lg={4}>
                      <FormGroup>
                        <Label>Modalidad de posito a cliente</Label>
                        <Select>
                          <option>TRANSFERENCIA</option>
                          <option>EFECTIVO</option>
                          <option>DEPOSITO</option>
                        </Select>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className='mt-4'>
                    <Col lg={12}>
                      <Subtitle color='primary'>Detalle de cuotas</Subtitle>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12}>
                      <Table.Wrapper maxHeight={243}>
                        <Table.Content>
                          <Table.Head sticky>
                            <Table.Row>
                              {headers.map((item, key) => {
                                return (
                                  <Table.Col as='th' scope='col' key={key}>
                                    {item.name}
                                  </Table.Col>
                                );
                              })}
                            </Table.Row>
                          </Table.Head>
                          <Table.Body>
                            {content.map(item => {
                              return (
                                <Table.Row key={item.id}>
                                  <Table.Col className='text-center'>
                                    {item.quotaNumber}
                                  </Table.Col>
                                  <Table.Col className='text-center'>
                                    {item.expiration}
                                  </Table.Col>
                                  <Table.Col className='text-center'>
                                    {item.paymentDate}
                                  </Table.Col>
                                  <Table.Col className='text-center'>
                                    {item.delay}
                                  </Table.Col>
                                  <Table.Col className='text-center'>
                                    {item.capital}
                                  </Table.Col>
                                  <Table.Col className='text-center'>
                                    {item.interest}
                                  </Table.Col>
                                  <Table.Col className='text-center'>
                                    {item.mora}
                                  </Table.Col>
                                  <Table.Col className='text-center'>
                                    {item.total}
                                  </Table.Col>
                                  <Table.Col className='text-center'>
                                    <ButtonStatus variant={item.state}>{item.state}</ButtonStatus>
                                  </Table.Col>
                                </Table.Row>
                              );
                            })}
                          </Table.Body>
                        </Table.Content>
                      </Table.Wrapper>
                    </Col>
                  </Row>
                  <Row className='mt-4 align-items-end'>
                    <Col lg={3}>
                      <ContainerTrafficLights>
                        <TrafficLights estado='DUDOSO'/>
                      </ContainerTrafficLights>
                    </Col>
                    <Col lg={3}>
                      <FormGroup>
                        <Label>Capital de prestado</Label>
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
                        <Label>Interes generado</Label>
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
                        <Label>Moras generadas</Label>
                        <Input
                          type='text'
                          background='info'
                          defaultValue={'0.00'}
                          className='text-center'
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className='mt-4 align-items-end'>
                    <Col lg={3}>
                      <Button
                        variant='outline'
                        color='primary'
                        block
                        size='16'
                      >
                        <MdPrint size='1.5em'/>anexo 1
                      </Button>
                    </Col>
                    <Col lg={3}>
                      <Button
                        variant='outline'
                        color='primary'
                        block
                        size='16'
                      >
                        <MdPrint size='1.5em'/>anexo 2
                      </Button>
                    </Col>
                    <Col lg={3}>
                      <Button
                        variant='outline'
                        color='primary'
                        block
                        size='16'
                      >
                        <MdPrint size='1.5em'/>contrato
                      </Button>
                    </Col>
                    <Col lg={3}>
                      <FormGroup>
                        <Label>Total generado (Capital + interes + moras)</Label>
                        <Input
                          type='text'
                          background='info'
                          defaultValue={'0.00'}
                          className='text-center'
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className='mt-4 align-items-end'>
                    <Col lg={3}>
                      <Button
                        variant='outline'
                        color='primary'
                        block
                        size='16'
                      >
                        <MdPrint size='1.5em'/>pagare
                      </Button>
                    </Col>
                    <Col lg={3}>
                      <Button
                        variant='outline'
                        color='primary'
                        block
                        size='16'
                      >
                        <MdPrint size='1.5em'/>ADJUDICACIÓN
                      </Button>
                    </Col>
                    <Col lg={3}>
                      <Button
                        alert
                        block
                        disabled
                        size='16'
                      >
                        <FaSave size='1.3em'/>adjudicar
                      </Button>
                    </Col>
                    <Col lg={3}>
                      <Button
                        primary
                        block
                        size='16'
                      >
                        <FaSave size='1.3em'/>registrar
                      </Button>
                    </Col>
                  </Row>
                </Card>
              </div>
            </Container>
          : <Loader/>
      }
    </>
  );
};

export default LoanRegistration;
