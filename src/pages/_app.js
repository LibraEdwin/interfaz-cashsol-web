import PropTypes from 'prop-types';
import { GlobalStyles, THEME_LIGHT } from '@styles';
import { ThemeProvider } from 'styled-components';
import { AppProvider } from '@contexts/AppContext';
import { AdminLayout, AuthLayout, MainMenuLayout, MenuLayout, PublicLayout } from '@layouts';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap-utilities.min.css';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/global.css';

const LAYOUTS = {
  public: PublicLayout,
  auth: AuthLayout,
  admin: AdminLayout,
  mainMenu: MainMenuLayout,
  menu: MenuLayout
};

const MyApp = ({ Component, pageProps }) => {
  const LayoutComponent = LAYOUTS[Component.layout || 'public'] || ((children) => (<>{children}</>));

  return (
    <AppProvider>
      <ThemeProvider theme={THEME_LIGHT}>
        <GlobalStyles />
        <LayoutComponent>
          <Component {...pageProps} />
        </LayoutComponent>
      </ThemeProvider>
    </AppProvider>
  );
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.any
};

export default MyApp;
