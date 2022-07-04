import { Container } from '@components/containers';
import { Button, Input, Label, FormGroup, InputMessage, Select, Checkbox } from '@components/ui';
import { FaBeer } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';

/** Pagina de presentacion para componentes ui */
const Inputs = () => {
  return (
    <Container>
      <h3>Label</h3>
      <Label className='me-3'>Texto label</Label>
      <Label>Texto requerido <abbr title="requerido">*</abbr> </Label>
      <h3>Inputs</h3>
      <ol>
        <li>
          <h5>Text</h5>
          <Input type="text" className='mb-3' placeholder='input text' />
          <Input type="text" className='mb-3' disabled placeholder='input text' />
          <Input type="text" className='mb-3' invalid placeholder='input with error' />
        </li>
      </ol>
      <h3>Form Group</h3>
      <ol>
        <li>
          <h5>label / input</h5>
          <FormGroup className='mb-4'>
            <Label>Nombre del producto <abbr>*</abbr></Label>
            <Input type="text" placeholder="Nombre del producto" />
          </FormGroup>
        </li>
        <li>
          <h5>label / input / icon</h5>
          <FormGroup className='mb-4'>
            <Label>Buscar</Label>
            <Input type="text" placeholder="Escriba un nombre..." />
            <BiSearch />
          </FormGroup>
        </li>
        <li>
          <h5>label / input invalid</h5>
          <FormGroup className='mb-4'>
            <Label invalid>Correo</Label>
            <Input type="email" invalid placeholder="correo@mail.com" />
            <FaBeer />
            <InputMessage color='danger'>El correo electrónico es incorrecto</InputMessage>
          </FormGroup>
        </li>
        <li>
          <h5>label / input / button position right</h5>
          <FormGroup buttonRight className='mb-4'>
            <Label>Validar contraseña <abbr>*</abbr> </Label>
            <Input type="password" placeholder="Escriba su contraseña" />
            <Button accent icon> <BiSearch /> </Button>
          </FormGroup>
        </li>
        <li>
          <h5>label / input / button position right / invalid</h5>
          <FormGroup buttonRight className='mb-4'>
            <Label invalid>Ingrese un id de un documento</Label>
            <Input invalid type="search" defaultValue="<script/>" placeholder="Escriba su contraseña" />
            <Button accent icon> <BiSearch /> </Button>
            <InputMessage color='danger'>No se admiten caracteres especiales</InputMessage>
          </FormGroup>
        </li>
        <li>
          <h5>label / input number /className text-end</h5>
          <FormGroup>
            <Label>Name </Label>
            <Input type='number' className='text-end' min={1} max={1000} defaultValue={0} />
          </FormGroup>
        </li>
        <li>
          <h5>label / input background color/ className text-center</h5>
          <FormGroup>
            <Label>Name </Label>
            <Input
              type='text'
              className='text-center'
              background='info'
              defaultValue={'00.0'}
            />
          </FormGroup>
          <FormGroup>
            <Label>Name </Label>
            <Input
              type='text'
              className='text-center'
              background='success'
              defaultValue={'00.0'}
            />
          </FormGroup>
          <FormGroup>
            <Label>Name </Label>
            <Input
              type='text'
              className='text-center'
              background='warning'
              defaultValue={'00.0'}
            />
          </FormGroup>
        </li>
        <li>
          <h5>label / input search</h5>
          <FormGroup className='mb-4'>
            <Label>Ingrese un id de un documento</Label>
            <Input background='success' type="search" placeholder="Buscar..." />
          </FormGroup>
        </li>
      </ol>
      <h3>Select</h3>
      <ol>
        <li>
          <Select className='mb-4'>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </Select>
        </li>
        <li>
          <h5>Select w/ Label</h5>
          <Label>Tipo de documento</Label>
          <Select className='mb-4'>
            <option>DNI</option>
            <option>Pasaporte</option>
            <option>Carnet de extranjeria</option>
          </Select>
        </li>
        <li>
          <Label invalid>Debe elegir una opcion<abbr>*</abbr> </Label>
          <Select invalid className='mb-4'>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </Select>
        </li>
        <li>
          <h5>Select disabled</h5>
          {/* <Label >Debe elegir una opcion</Label> */}
          <Select disabled className='mb-4'>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </Select>
        </li>
      </ol>
      <h3>Checkbox</h3>
      <ol>
        <li className='mb-2'>
          <Label>
            <Checkbox type='checkbox' />
            Checkbox
          </Label>
        </li>
        <li className='mb-2'>
          <Label>
            <Checkbox type='checkbox' defaultChecked={true} />
            Checkbox checked
          </Label>
        </li>
        <li className='mb-2'>
          <Label>
            <Checkbox type='checkbox' disabled />
            Checkbox disabled
          </Label>
        </li>
      </ol>
    </Container>
  );
};

export default Inputs;
