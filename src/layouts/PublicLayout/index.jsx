import { ContainerNavbar } from '@components/containers';
import { Header } from '@components/sections';
import { UtilitiesButton } from '@components/ui';
import { COLORS } from '@styles';
import PropTypes from 'prop-types';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useRouter } from 'next/router';
import { useAppContext } from '@contexts/AppContext';

const PublicLayout = ({ children }) => {
  const { back } = useRouter();
  const { userLogged } = useAppContext();

  return (
    <ContainerNavbar variant='secondary'>
      <Header variant='secondary' usuario={userLogged.nickname} classname='mb-10'>
        < UtilitiesButton onClick={() => back()} size='2rem' color={COLORS.black}>
          <div className='fs-1'>
            <GiHamburgerMenu />
          </div>
        </UtilitiesButton>
      </Header>
      {children}
    </ContainerNavbar>
  );
};

PublicLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default PublicLayout;
