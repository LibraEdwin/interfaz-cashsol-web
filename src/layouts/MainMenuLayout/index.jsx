import { ContainerNavbar } from '@components/containers';
import { Header } from '@components/sections';
import { UtilitiesButton } from '@components/ui';
import { COLORS } from '@styles';
import PropTypes from 'prop-types';
import { BiExit } from 'react-icons/bi';
import styled from 'styled-components';
// import router from 'next/router';
import { useAppContext } from '@contexts/AppContext';

const Icono = styled.div`
display: flex;
margin: auto;
.exit{
  transform: rotate(180deg);
  font-size: 5rem;
  margin-top: -2.5rem;
}
`;

const MainMenuLayout = ({ children }) => {
  const { logout, userLogged } = useAppContext();

  return (
    <>
      <ContainerNavbar variant='primary'>
        <Header variant='primary' usuario={userLogged.nickname} classname='mb-10'>
          < UtilitiesButton onClick={logout} size='2rem' color={COLORS.white}>
            <Icono >
              <div className='exit'>
                <BiExit />
              </div>
              <div className='fs-2'>
                Salir
              </div>
            </Icono>
          </UtilitiesButton>
        </Header>
        {children}
      </ContainerNavbar>
    </>
  );
};

MainMenuLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default MainMenuLayout;
