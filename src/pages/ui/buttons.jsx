import { Container } from '@components/containers';
import { Button, Spiner } from '@components/ui';
import { MdDelete } from 'react-icons/md';
import { RiSave2Fill } from 'react-icons/ri';
import { BsFillEyeFill, BsBoxArrowInLeft } from 'react-icons/bs';
import { Small } from '@components/typography';

/** Pagina de presentacion para componentes buttons */
const Buttons = () => {
  return (
    <Container>
      <h3>Buttons</h3>
      <ol>
        <li className='mb-4'>
          <h5>Button ghost</h5>
          <Button variant='ghost'><RiSave2Fill size='1.5em' />nuevo prestamo</Button>
        </li>
        <li className='mb-4'>
          <h5>Button primary</h5>
          <Button primary>ingresar</Button>
        </li>
        <li className='mb-4'>
          <h5>Button outline primary color</h5>
          <Button variant='outline' color='primary'><RiSave2Fill size='1.3em' />ingresar</Button>
        </li>
        <li className='mb-4'>
          <h5>Button primary disabled</h5>
          <Button primary disabled>ingresar</Button>
        </li>
        <li className='mb-4'>
          <h5>Button alert</h5>
          <Button alert block><MdDelete size='1.3em' />eliminar</Button>
        </li>
        <li className='mb-4'>
          <h5>Button outline danger color</h5>
          <Button color='danger' variant='outline'>ingresar</Button>
        </li>
        <li className='mb-4'>
          <h5>Button alert disabled</h5>
          <Button alert disabled><MdDelete />eliminar</Button>
        </li>
        <li className='mb-4'>
          <h5>Button small</h5>
          <Button variant='small' color='primary'><BsFillEyeFill size='2em' />imagen 1</Button>
        </li>
        <li className='mb-4'>
          <h5>Button option menu</h5>
          <Button menu><img src='/icons/loans.svg' />Registro de prestamos</Button>
          {/* <Button menu><img src='/icons/record.svg'/>Historial de prestamos y creditos</Button>
          <Button menu block><img src='/icons/addendum-register.svg'/>Registro de adendas</Button> */}
        </li>
        <li>
          <h3> Button Back </h3>
          <Button color='light' style={{ fontSize: '2rem' }} className='p-0'>
            <BsBoxArrowInLeft />
            <Small>Salir</Small>
          </Button>
        </li>
        <li>
          <h3>Button con spinner</h3>
          <Button primary>Loading... <Spiner/></Button>
        </li>
      </ol>
    </Container>
  );
};

export default Buttons;
