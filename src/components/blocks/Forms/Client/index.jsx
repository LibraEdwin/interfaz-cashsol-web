import PropTypes from 'prop-types';
import { ContainerTrafficLights, Modal } from '@components/containers';
import { Col, Row } from 'react-bootstrap';
import { FormGroup, Label, Input, Select, Button, TrafficLights, InputMessage } from '@components/ui';
import { Subtitle } from '@components/typography';
import { AiOutlinePlus, AiFillSave, AiFillDelete } from 'react-icons/ai';
import { BsPencilSquare } from 'react-icons/bs';
import { useForm } from 'react-hook-form';
import { EMPLOYEE_STATUS_ENUM, MARITAL_STATUS_ENUM } from '@services/api/clients';
import { useClientContext } from '@contexts/ClientContext';
import { apiClient, apiDistrict, apiProvince } from '@services/api';
import TYPE_CLIENT from '@contexts/ClientContext/types';
import defaultState from '@contexts/ClientContext/state';
import { ModalCustomerSearch } from '@components/blocks';
import countryCodes from '@services/api/countryCodes';
import { ToastContainer, toast } from 'react-toastify';

const FormClient = ({ openModal, closeModal }) => {
  const [{
    clientState,
    departments,
    provinces,
    districts,
    professions,
    bankingEntities,
    positions,
    items,
    documentTypes
  }, dispatch] = useClientContext();
  const { formState: { errors }, handleSubmit, reset, register } = useForm({ defaultValues: clientState });

  const handleChangeDepartment = async (e) => {
    const idDepartment = e.target.value;
    const { data } = await apiProvince.getProvincesByDepartment(idDepartment);
    dispatch({ type: TYPE_CLIENT.UPDATE_PROVINCES, payload: data });
    dispatch({ type: TYPE_CLIENT.UPDATE_DISTRICTS, payload: [] });
  };

  const handleChangeProvince = async (e) => {
    const idProvince = e.target.value;
    const { data } = await apiDistrict.getDistrictsByProvince(idProvince);
    dispatch({ type: TYPE_CLIENT.UPDATE_DISTRICTS, payload: data });
  };

  const saveClient = async (data) => {
    if (clientState.id) {
      // actualizar
      const { data: clientUpdated } = await apiClient.updateClient(clientState.id, data);
      dispatch({ type: TYPE_CLIENT.UPDATE_CLIENT, payload: clientUpdated });
      toast.success('Se actualizó el cliente!');
    } else {
      // creamos
      const { data: clientCreated } = await apiClient.createClient(data);
      dispatch({ type: TYPE_CLIENT.UPDATE_CLIENT, payload: clientCreated });
      toast.success('Cliente registrado!');
    }
  };

  const clearForm = () => {
    reset(defaultState.clientState);
    dispatch({ type: TYPE_CLIENT.UPDATE_CLIENT, payload: defaultState.clientState });
  };

  const deleteClient = async () => {
    await apiClient.deleteClient(clientState.id);
    reset(defaultState.clientState);
    dispatch({ type: TYPE_CLIENT.UPDATE_CLIENT, payload: defaultState.clientState });
    toast.error('Se eliminó el cliente!');
  };

  const viewClient = async (client) => {
    dispatch({ type: TYPE_CLIENT.UPDATE_CLIENT, payload: client });

    const { data: { department, province } } = await apiDistrict.getDistrictById(client.addressData.district);
    const { data: provinces } = await apiProvince.getProvincesByDepartment(department);
    dispatch({ type: TYPE_CLIENT.UPDATE_PROVINCES, payload: provinces });

    const { data: districts } = await apiDistrict.getDistrictsByProvince(province);
    dispatch({ type: TYPE_CLIENT.UPDATE_DISTRICTS, payload: districts });

    reset({
      ...client,
      addressData: {
        ...client.addressData,
        department,
        province
      }
    });
  };

  return (
    <>
      <Modal open={openModal} close={closeModal}>
        <ModalCustomerSearch closeModalCustomer={closeModal} selectClient={viewClient} />
      </Modal>
      <form onSubmit={handleSubmit(saveClient)}>
        <Row>
          <Col lg={4}>
            <FormGroup className='mb-4'>
              <Label>Tipo de documento</Label>
              <Select
                {...register('document.type', {
                  required: 'Debe seleccionar un tipo de documento'
                })}
                invalid={errors?.document?.type}
              >
                <option value="">Seleccione un documento</option>
                {documentTypes?.map(documentType => (
                  <option key={`documentType-${documentType.id}`} value={documentType.id}>{documentType.name.toUpperCase()}</option>
                ))}
              </Select>
              {errors?.document?.type && (
                <InputMessage color='danger'>{errors.document.type.message}</InputMessage>
              )}
            </FormGroup>
          </Col>
          <Col lg={4}>
            <FormGroup className='mb-4'>
              <Label>Número de documento</Label>
              <Input
                {...register('document.number', { required: 'El número de documento es requerido' })}
                background='warning'
                type="text"
                invalid={errors?.document?.number}
              />
              {errors?.document?.number && (
                <InputMessage color='danger'>{errors.document.number.message}</InputMessage>
              )}
            </FormGroup>
          </Col>
          <Col lg={4}>
            <ContainerTrafficLights className='justify-content-end'>
              <TrafficLights estado='BUENO' />
            </ContainerTrafficLights>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <FormGroup className='mb-4'>
              <Label>Nombres</Label>
              <Input
                {...register('name', {
                  required: 'Ingrese el nombre del cliente'
                })}
                type="text"
                invalid={errors.name}
              // defaultValue={clientState.name}
              />
              {errors.name && (
                <InputMessage color='danger'>{errors.name.message}</InputMessage>
              )}
            </FormGroup>
          </Col>
          <Col lg={8}>
            <FormGroup className='mb-4'>
              <Label>Apellidos</Label>
              <Input
                {...register('lastname', {
                  required: 'Ingrese el apellido del cliente'
                })}
                // defaultValue={clientState.lastname}
                type="text"
                invalid={errors.lastname} />
              {errors.lastname && (
                <InputMessage color='danger'>{errors.lastname.message}</InputMessage>
              )}
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col lg={1}>
            <FormGroup className='mb-4'>
              <Label>Cód. País</Label>
              <Select
                {...register('phone.codCountry')}
                invalid={errors.phone?.codCountry}
              >
                {countryCodes.map(code => (
                  <option key={`cod-country-${code}`} value={code}>+{code}</option>
                ))}
              </Select>
              {errors.phone?.codCountry && (
                <InputMessage color='danger'>{errors.phone.codCountry.message}</InputMessage>
              )}
            </FormGroup>
          </Col>
          <Col lg={3}>
            <FormGroup className='mb-4'>
              <Label>Teléfono</Label>
              <Input
                {...register('phone.number', {
                  required: 'Debe ingresar el número de teléfono'
                })}
                type="tel"
                invalid={errors.phone?.number}
              />
              {errors.phone?.number && (
                <InputMessage color='danger'>{errors.phone.number.message}</InputMessage>
              )}
            </FormGroup>
          </Col>
          <Col lg={4}>
            <FormGroup className='mb-4'>
              <Label>Email</Label>
              <Input
                {...register('email', {
                  required: 'El correo es requerido',
                  pattern: /^\S+@\S+$/i
                })}
                type="email"
                invalid={errors.email}
              />
              {errors.email && (
                <InputMessage color='danger'>{errors.email.message}</InputMessage>
              )}
            </FormGroup>
          </Col>
          <Col lg={4} className='d-none'>
            <FormGroup className='mb-4'>
              <Label>Email</Label>
              <Input
                {...register('password', {
                  required: 'La contraseña es requerida'
                })}
                type="password"
                invalid={errors.password}
              />
              {errors.password && (
                <InputMessage color='danger'>{errors.password.message}</InputMessage>
              )}
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <FormGroup>
              <Label>Profesión</Label>
              <Select
                {...register('profession', {
                  required: 'Seleccione una profesión'
                })}
                invalid={errors.profession}
              // defaultValue={clientState.profession}
              >
                <option value="">Seleccione una profesión</option>
                {professions?.map(profession => (
                  <option key={`profession-${profession.id}`} value={profession.id}>{profession.name.toUpperCase()}</option>
                ))}
              </Select>
              {errors.profession && (
                <InputMessage color='danger'>{errors.profession.message}</InputMessage>
              )}
            </FormGroup>
          </Col>
          <Col lg={4}>
            <FormGroup className='mb-4'>
              <Label>Estado civil</Label>
              <Select {...register('maritalStatus', {
                required: 'Seleccione un estado civil'
              })}
                invalid={errors.maritalStatus}
              // defaultValue={clientState.maritalStatus}
              >
                <option value="">Seleccione un estado civil</option>
                {MARITAL_STATUS_ENUM.map(maritalStatus => (
                  <option key={maritalStatus} value={maritalStatus}>{maritalStatus.toUpperCase()}</option>
                ))}
              </Select>
              {errors.maritalStatus && (
                <InputMessage color='danger'>{errors.maritalStatus.message}</InputMessage>
              )}
            </FormGroup>
          </Col>
          <Col lg={4}>
            <FormGroup className='mb-4'>
              <Label>Estado laboral</Label>
              <Select {...register('employmentStatus', {
                required: 'Seleccione un estado laboral'
              })}
                invalid={errors.employmentStatus}
              // defaultValue={clientState.employmentStatus}
              >
                <option value="">Seleccione un estado laboral </option>
                {EMPLOYEE_STATUS_ENUM.map(employeeStatus => (
                  <option key={employeeStatus} value={employeeStatus}>{employeeStatus.toUpperCase()}</option>
                ))}
              </Select>
              {errors.employmentStatus && (
                <InputMessage color='danger'>{errors.employmentStatus.message}</InputMessage>
              )}
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <FormGroup className='mb-4'>
              <Label>Banco</Label>
              <Select {...register('bankingEntity')} >
                <option value="">Seleccione una entidad bancaria</option>
                {bankingEntities?.map(bankingEntity => (
                  <option key={`bankingEntity-${bankingEntity.id}`} value={bankingEntity.id}>{bankingEntity.name.toUpperCase()}</option>
                ))}
              </Select>
            </FormGroup>
          </Col>
          <Col lg={8}>
            <FormGroup className='mb-4'>
              <Label>Número de cuenta</Label>
              <Input {...register('accountNumber')} type="text" />
            </FormGroup>
          </Col>
        </Row>
        <Subtitle color='primary'>Datos de domicilio</Subtitle>
        <Row>
          <Col lg={4}>
            <FormGroup className='mb-4'>
              <Label>Departamento</Label>
              <Select
                {...register('addressData.department')}
                onChange={handleChangeDepartment}>
                <option value="">Seleccione un departamento</option>
                {departments.map(department => (
                  <option key={department.id} value={department.id}>{department.name.toUpperCase()}</option>
                ))}
              </Select>
            </FormGroup>
          </Col>
          <Col lg={4}>
            <FormGroup className='mb-4'>
              <Label>Provincia</Label>
              <Select
                {...register('addressData.province')}
                onChange={handleChangeProvince}>
                <option value="">Seleccione una provincia</option>
                {provinces?.map(provinces => (
                  <option key={provinces.id} value={provinces.id}>{provinces.name.toUpperCase()}</option>
                ))}
              </Select>
            </FormGroup>
          </Col>
          <Col lg={4}>
            <FormGroup className='mb-4'>
              <Label>Distrito</Label>
              <Select {...register('addressData.district', {
                required: 'Seleccione un distrito'
              })}
                invalid={errors.addressData?.district}
              >
                <option value="">Seleccione un distrito</option>
                {districts?.map(district => (
                  <option key={district.id} value={district.id}>{district.name.toUpperCase()}</option>
                ))}
              </Select>
              {errors.addressData?.district && (
                <InputMessage color='danger'>{errors.addressData?.district.message}</InputMessage>
              )}
            </FormGroup>
          </Col>
          <Col lg={8}>
            <FormGroup className='mb-4'>
              <Label>Dirección</Label>
              <Input
                {...register('addressData.address', {
                  required: 'La dirección del cliente es requerida'
                })}
                type="text"
                invalid={errors.addressData?.address}
              // defaultValue={clientState.addressData?.address}
              />
              {errors.addressData?.address && (
                <InputMessage color='danger'>{errors.addressData?.address.message}</InputMessage>
              )}
            </FormGroup>
          </Col>
        </Row>
        <Subtitle color='primary'>Datos de trabajo</Subtitle>
        <Row>
          <Col lg={8}>
            <FormGroup className='mb-4'>
              <Label>Nombre de la empresa</Label>
              <Input {...register('company.name', {
                required: 'El nombre de la empresa es requerida'
              })}
                type="text"
                invalid={errors.company?.name}
              // defaultValue={clientState.company?.name}
              />
              {errors.company?.name && (
                <InputMessage color='danger'>{errors.company?.name.message}</InputMessage>
              )}
            </FormGroup>
          </Col>
          <Col lg={4}>
            <FormGroup className='mb-4'>
              <Label>Cargo / Ocupación</Label>
              <Select {...register('company.position', {
                required: 'Seleccione un cargo'
              })}
                // defaultValue={clientState.company?.position.toString()}
                invalid={errors.company?.position}
              >
                <option value="">Seleccione un cargo</option>
                {positions?.map(position => (
                  <option key={`position-${position.id}`} value={position.id}>{position.name.toUpperCase()}</option>
                ))}
              </Select>
              {errors.company?.position && (
                <InputMessage color='danger'>{errors.company?.position.message}</InputMessage>
              )}
            </FormGroup>
          </Col>
          <Col lg={8}>
            <FormGroup className='mb-4'>
              <Label>Dirección</Label>
              <Input {...register('company.address', {
                required: 'La dirección dela empresa es requerida'
              })}
                type="text"
                invalid={errors.company?.address}
              // defaultValue={clientState.company?.address}
              />
              {errors.company?.address && (
                <InputMessage color='danger'>{errors.company?.address.message}</InputMessage>
              )}
            </FormGroup>
          </Col>
          <Col lg={4}>
            <FormGroup className='mb-4'>
              <Label>Rubro</Label>
              <Select {...register('company.item', {
                required: 'Seleccione un cargo'
              })}
                // defaultValue={clientState.company?.item.toString()}
                invalid={errors.company?.item}
              >
                <option value="">Seleccione un cargo</option>
                {items?.map(item => (
                  <option key={`item-${item.id}`} value={item.id}>{item.name.toUpperCase()}</option>
                ))}
              </Select>
              {errors.company?.item && (
                <InputMessage color='danger'>{errors.company?.item.message}</InputMessage>
              )}
            </FormGroup>
          </Col>
        </Row>
        <Row className='justify-content-end mt-5'>
          <Col lg={2}>
            <Button
              primary
              block
              type='button'
              className={clientState?.id ? '' : 'd-none'}
              onClick={clearForm}
            > <AiOutlinePlus /> Nueva</Button>
          </Col>

          <Col lg={2} className={clientState?.id ? '' : 'd-none'}>
            <Button
              primary
              block
              type='submit'> <BsPencilSquare /> Actualizar</Button>
          </Col>

          <Col lg={2} className={clientState?.id ? 'd-none' : ''}>
            <Button
              primary
              block
              type='submit'> <AiFillSave /> Registrar</Button>
          </Col>

          <Col lg={2} className={clientState?.id ? '' : 'd-none'}>
            <Button
              color='danger'
              type='button'
              variant='outline'
              block
              onClick={deleteClient}
            > <AiFillDelete /> Eliminar</Button>
          </Col>
        </Row>
      </form>
      <ToastContainer />
    </>
  );
};

FormClient.propTypes = {
  openModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
};

export default FormClient;
