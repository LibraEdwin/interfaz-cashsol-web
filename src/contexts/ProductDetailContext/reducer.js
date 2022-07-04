import defaultState from './state';
import TYPES_PRODUCT_DETAIL from './types';

const productDetailReducer = (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case TYPES_PRODUCT_DETAIL.UPDATE_PRODUCTS:
      return { ...state, products: payload };
    case TYPES_PRODUCT_DETAIL.UPDATE_CATEGORIES:
      return { ...state, categories: payload };
    case TYPES_PRODUCT_DETAIL.UPDATE_PRODUCT_DETAIL:
      return { ...state, productDetail: payload };
    case TYPES_PRODUCT_DETAIL.UPDATE_CLIENT:
      return { ...state, productDetail: { ...state.productDetail, client: payload } };
    case TYPES_PRODUCT_DETAIL.UPDATE_CATEGORY:
      return { ...state, categorySelected: payload };
    default:
      return state;
  }
};

export default productDetailReducer;
