import { endPoints } from './endPoints';
import { uriWithQuery } from '@libs/utils';

export const getDocumentTypes = async ({ limit = 10, page = 1 }) => {
  const uriGetAll = uriWithQuery(endPoints.documentTypes.getDocumentTypes, { limit, page });

  try {
    const response = await fetch(uriGetAll);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const getDocumentType = async (idDocumentType) => {
  const uriGetAll = endPoints.documentTypes.getDocumentType(idDocumentType);

  try {
    const response = await fetch(uriGetAll);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
