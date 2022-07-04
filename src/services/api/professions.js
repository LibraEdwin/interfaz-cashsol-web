import { endPoints } from './endPoints';
import { uriWithQuery } from '@libs/utils';

export const getProfessions = async ({ limit = 10, page = 1 }) => {
  const uriGetAll = uriWithQuery(endPoints.professions.getProfessions, { limit, page });

  try {
    const response = await fetch(uriGetAll);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const getProfession = async (idProfession) => {
  const uriGetOne = endPoints.professions.getProfession(idProfession);

  try {
    const response = await fetch(uriGetOne);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
