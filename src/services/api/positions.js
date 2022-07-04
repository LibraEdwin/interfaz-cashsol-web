import { uriWithQuery } from '@libs/utils';
import { endPoints } from './endPoints';

export const getPositions = async ({ limit = 10, page = 1 }) => {
  const uriGetAll = uriWithQuery(endPoints.positions.getPositions, { limit, page });

  try {
    const response = await fetch(uriGetAll);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const getPosition = async (idPosition) => {
  const uriGetAll = endPoints.positions.getPosition(idPosition);

  try {
    const response = await fetch(uriGetAll);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
