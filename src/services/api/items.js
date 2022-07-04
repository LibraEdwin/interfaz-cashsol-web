import { endPoints } from './endPoints';
import { uriWithQuery } from '@libs/utils';

export const getItems = async ({ limit = 10, page = 1 }) => {
  const uriGetAll = uriWithQuery(endPoints.items.getItems, { limit, page });

  try {
    const response = await fetch(uriGetAll);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const getItem = async (idItem) => {
  const uriGetAll = endPoints.items.getItem(idItem);

  try {
    const response = await fetch(uriGetAll);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
