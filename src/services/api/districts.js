import { endPoints } from './endPoints';

export const getDistricts = async () => {
  const uriGetAll = endPoints.districts.getDistricts;

  try {
    const response = await fetch(uriGetAll);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const getDistrictById = async (idDistrict) => {
  const uriGetAll = endPoints.districts.getDistrict(idDistrict);

  try {
    const response = await fetch(uriGetAll);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const getDistrictsByProvince = async (idProvince) => {
  const uriGetAll = endPoints.districts.getDistrictsByProvince(idProvince);

  try {
    const response = await fetch(uriGetAll);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
