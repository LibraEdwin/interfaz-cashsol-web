import { endPoints } from './endPoints';

export const getDepartments = async () => {
  const uriGetAll = endPoints.departments.getDepartments;

  try {
    const response = await fetch(uriGetAll);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
