import { apiProductCategory } from '@services/api';
import PropTypes from 'prop-types';
import { createContext, useContext, useEffect, useReducer } from 'react';
import productDetailReducer from './reducer';
import defaultState from './state';
import TYPES_PRODUCT_DETAIL from './types';

export const ProductDetailContext = createContext(null);

export const useProductDetailContext = () => useContext(ProductDetailContext);

export const ProductDetailProvider = ({ children }) => {
  const [store, dispatch] = useReducer(productDetailReducer, defaultState);

  useEffect(() => {
    (async () => {
      const { data: { productCategories } } = await apiProductCategory.getProductCategories({ limit: 0 });
      dispatch({ type: TYPES_PRODUCT_DETAIL.UPDATE_CATEGORIES, payload: productCategories });
    })();
  }, []);
  return (
    <ProductDetailContext.Provider value={[store, dispatch]}>
      {children}
    </ProductDetailContext.Provider>
  );
};

ProductDetailProvider.propTypes = {
  children: PropTypes.node.isRequired
};
