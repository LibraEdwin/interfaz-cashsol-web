import { endPoints } from './endPoints';

export const getProvinces = async () => {
  const uriGetAll = endPoints.provinces.getProvinces;

  try {
    const response = await fetch(uriGetAll);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const getProvincesByDepartment = async (idDepartment) => {
  const uriGetListByDetapartment = endPoints.provinces.getProvincesByDepartment(idDepartment);

  try {
    const response = await fetch(uriGetListByDetapartment);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
