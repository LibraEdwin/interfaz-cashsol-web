import { THEME_LIGHT } from '@styles';
import PropTypes from 'prop-types';
import { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import defaultState from './state';
import jwt from 'jsonwebtoken';
import { useRouter } from 'next/router';
import { alertMessage } from '@libs/AlertMessage';

/**
 * @constant
 * @type {import('react').Context<import('./appContext').AppContextInterface>}
 */
export const AppContext = createContext(null);

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const router = useRouter();

  /* States user */
  const [userLogged, setUserLogged] = useState({});
  const [tokenUserExist, setTokenUserExist] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  /* Login User */
  const signInUser = async (email, password) => {
    setIsLoading(true);
    const url = `${process.env.NEXT_PUBLIC_URI_API}/api/v1/users/login`;
    const base64 = Buffer.from(`${email}:${password}`).toString('Base64');

    fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${base64}`
      }
    }).then(res => res.json())
      .then(res => {
        const { code } = res;
        if (code === 401) {
          alertMessage(res.errors, 'error');
          setIsLoading(false);
        } else {
          // Obtener token de usuario
          const getToken = res.data.user_token;
          // Setear en sesion storage el token de usuario
          sessionStorage.setItem('token_usuario', getToken);
          // Validar que existe token
          if (getToken) {
            setTokenUserExist(true);
            const payload = jwt.decode(getToken);
            sessionStorage.setItem('data_usuario', JSON.stringify(payload.user));
            setUserLogged(payload.user);
            // Permitir acceso
            router.push('/');
          }
        }
      })
      .catch(error => {
        console.log(error, 'error');
      });
  };

  /* Logout user */
  const logout = () => {
    sessionStorage.removeItem('token_usuario');
    sessionStorage.removeItem('data_usuario');
    setTimeout(() => {
      router.push('/login');
      setTokenUserExist(false);
      setUserLogged({});
    }, 1000);
  };

  useEffect(() => {
    const tokenUser = sessionStorage.getItem('token_usuario');
    if (tokenUser) {
      setTokenUserExist(true);
      const payload = jwt.decode(tokenUser);
      setUserLogged(payload.user);
    }
  }, [tokenUserExist]);

  return (
    <AppContext.Provider
      value={{
        defaultState,
        tokenUserExist,
        userLogged,
        isLoading,
        setIsLoading,
        signInUser,
        logout
      }}
    >
      <ThemeProvider theme={THEME_LIGHT}>
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired
};
