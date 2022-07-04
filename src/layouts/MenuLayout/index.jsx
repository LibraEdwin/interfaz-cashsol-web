import { ContainerNavbar } from '@components/containers';
import { Header } from '@components/sections';
import { UtilitiesButton } from '@components/ui';
import { COLORS } from '@styles';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { IoIosArrowBack } from 'react-icons/io';
import { useAppContext } from '@contexts/AppContext';

const MenuLayout = ({ children }) => {
  const { back } = useRouter();
  const { userLogged } = useAppContext();

  return (
    <>
      <ContainerNavbar variant='primary'>
        <Header variant='primary' usuario={userLogged.nickname} classname='mb-10'>
          < UtilitiesButton onClick={() => back()} size='2rem' color={COLORS.white}>
            <div className='fs-1'>
              <IoIosArrowBack />
            </div>
          </UtilitiesButton>
        </Header>
        {children}
      </ContainerNavbar>
    </>
  );
};

MenuLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default MenuLayout;
