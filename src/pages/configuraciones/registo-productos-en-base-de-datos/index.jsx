import { ContainerForm, Loader } from '@components/containers';
import { Button, FormGroup, Input, Label, Select, TextArea, UtilitiesButton } from '@components/ui';
import { Col, Container, Row } from 'react-bootstrap';
import { AiTwotoneDelete } from 'react-icons/ai';
import { BsFillEyeFill } from 'react-icons/bs';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { RiSave2Fill } from 'react-icons/ri';
import { useAppContext } from '@contexts/AppContext';
import router from 'next/router';

const registoProductosBD = () => {
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
                <ContainerForm title='Registro de producto en base de datos'>
                  <Row className='mt-3'>
                    <Col>
                      <FormGroup>
                        <Label>Código del registro</Label>
                        <Input background='info' type="search" placeholder="Buscar..." />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Label>Tipo de producto</Label>
                        <Select >
                          <option>option</option>
                          <option>option</option>
                          <option>option</option>
                        </Select>
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Label>Categoría de producto</Label>
                        <Select >
                          <option>option</option>
                          <option>option</option>
                          <option>option</option>
                        </Select>
                      </FormGroup>
                    </Col>
                    <Col >
                      <FormGroup>
                        <Label>Precio de mercado</Label>
                        <Input
                          type='text'
                          className='text-center'
                          background='info'
                          defaultValue={'00.0'}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className='mt-3'>
                    <Col>
                      <FormGroup >
                        <Label>Nombre del producto</Label>
                        <Input type="text" placeholder="Nombre del producto" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className='mt-3'>
                    <Col>
                      <FormGroup>
                        <Label>Año del producto</Label>
                        <Select >
                          <option>option</option>
                          <option>option</option>
                          <option>option</option>
                        </Select>
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup >
                        <Label>Marca</Label>
                        <Input type="text" placeholder="Nombre del producto" />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup >
                        <Label>Modelo</Label>
                        <Input type="text" placeholder="Nombre del producto" />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup >
                        <Label>Serie</Label>
                        <Input type="text" placeholder="Nombre del producto" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className='mt-3'>
                    <Col>
                      <FormGroup >
                        <Label subtitle>Caracteristicas</Label>
                        <div>
                          <TextArea height='146px' />
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup className='mt-3'>
                        <Button variant='small' color='primary'><BsFillEyeFill size='2em' />imagen 1</Button>
                        < UtilitiesButton size='2rem'><AiTwotoneDelete /></UtilitiesButton>
                      </FormGroup>
                      <FormGroup >
                        <Button variant='small' color='primary'><BsFillEyeFill size='2em' />imagen 2</Button>
                        < UtilitiesButton size='2rem'><AiTwotoneDelete /></UtilitiesButton>
                      </FormGroup>
                      <FormGroup >
                        <Button variant='small' color='primary'><BsFillEyeFill size='2em' />imagen 3</Button>
                        < UtilitiesButton size='2rem'><AiTwotoneDelete /></UtilitiesButton>
                        < UtilitiesButton size='2rem'><FaCloudUploadAlt /></UtilitiesButton>
                      </FormGroup>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                    <Col>
                      <div className='mr-0' >
                        <Button className='mt-4 fs-5' primary><RiSave2Fill size='1.3em' />RECEPCIONAR</Button>
                      </div>
                    </Col>
                  </Row>
                </ContainerForm>
              </div>
            </Container>
          : <Loader/>
      }
    </>
  );
};

export default registoProductosBD;
