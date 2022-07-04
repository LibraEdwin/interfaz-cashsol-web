import { Container, ContainerForm, ContainerNavbar, ContainerTrafficLights } from '@components/containers';
import { DataLogin, TrafficLights, UtilitiesButton } from '@components/ui';
import { BsFillEyeFill } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiTwotoneDelete } from 'react-icons/ai';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { BLUE_SCALE, COLORS } from '@styles';
import { Header } from '@components/sections';

const Grid = () => {
  return (
    <>
      <Container>
        <h3>Semaforo</h3>
        <ol>
          <li>
            <ContainerTrafficLights>
              <TrafficLights estado='BUENO' />
            </ContainerTrafficLights>
          </li>
          <li>
            <ContainerTrafficLights>
              <TrafficLights estado='DUDOSO' />
            </ContainerTrafficLights>
          </li>
          <li>
            <ContainerTrafficLights>
              <TrafficLights estado='MALO' />
            </ContainerTrafficLights>
          </li>
        </ol>
        <h3>Data Login</h3>
        <ol>
          <li>
            <DataLogin variant='primary' usuario='Elejo Ramos' />
          </li>
          <li>
            <DataLogin variant='secondary' usuario='Elejo Ramos' />
          </li>
        </ol>
        <h3>Botones</h3>
        <ol>
          <li>
            < UtilitiesButton size='2rem'><GiHamburgerMenu /></UtilitiesButton>
          </li>
          <li>
            < UtilitiesButton size='2rem'><BsFillEyeFill /></UtilitiesButton>
          </li>
          <li>
            < UtilitiesButton size='2rem' color={BLUE_SCALE[500]}><BsFillEyeFill /></UtilitiesButton>
          </li>
          <li>
            < UtilitiesButton size='2rem'><AiTwotoneDelete /></UtilitiesButton>
          </li>
          <li>
            < UtilitiesButton size='2rem'><FaCloudUploadAlt /></UtilitiesButton>
          </li>
        </ol>
      </Container>
      <Container><h3>Conteiner Form</h3></Container>
      <ContainerForm title='Container form'>asdsad</ContainerForm>
      <Container><h3>Conteiner Navbar secundary</h3></Container>
      <ContainerNavbar variant='secondary'>
        <Header variant='secondary' usuario='Elejo Ramos' >
          < UtilitiesButton size='2rem' color={COLORS.black}><GiHamburgerMenu />
          </UtilitiesButton></Header>
      </ContainerNavbar>
      <Container><h3>Conteiner Navbar primary</h3></Container>
      <ContainerNavbar variant='primary'>
        <Header variant='primary' usuario='Elejo Ramos' >
          < UtilitiesButton size='2rem' color={COLORS.white}><GiHamburgerMenu />
          </UtilitiesButton></Header>
      </ContainerNavbar>
    </>
  );
};

export default Grid;
