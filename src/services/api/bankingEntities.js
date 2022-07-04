import { endPoints } from './endPoints';
import { uriWithQuery } from '@libs/utils';

export const getBankingEntities = async ({ limit = 10, page = 1 }) => {
  const uriGetAll = uriWithQuery(endPoints.bankingEntities.getBankingEntities, { limit, page });

  try {
    const response = await fetch(uriGetAll);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const getBankingEntity = async (idItem) => {
  const uriGetAll = endPoints.bankingEntities.getBankingEntity(idItem);

  try {
    const response = await fetch(uriGetAll);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
