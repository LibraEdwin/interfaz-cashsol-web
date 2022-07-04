import { endPoints } from './endPoints';
import { uriWithQuery } from '@libs/utils';

export const getProductCategories = async ({ limit = 10, page = 1 }) => {
  const uriGetAll = uriWithQuery(endPoints.productCategories.getProductCategories, { limit, page });

  try {
    const response = await fetch(uriGetAll);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
