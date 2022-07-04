import { endPoints } from './endPoints';
import { uriWithQuery } from '@libs/utils';

export const getProducts = async ({ limit = 10, page = 1 }) => {
  const uriGetAll = uriWithQuery(endPoints.products.getProducts, { limit, page });

  try {
    const response = await fetch(uriGetAll);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const getProductsByCategory = async ({ id, limit = 10, page = 1 }) => {
  const uriGetByCategory = uriWithQuery(endPoints.products.getProductsByCategory(id), { limit, page });

  try {
    const response = await fetch(uriGetByCategory);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const getProduct = async (id) => {
  const uriGetOne = endPoints.products.getProduct(id);
  try {
    const response = await fetch(uriGetOne);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const findProductByClientID = async (clientsID) => {
  const uriGetByName = endPoints.productDetails.getProductDetailsByClientID(clientsID);
  try {
    const response = await fetch(uriGetByName);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const findProductByName = async (name) => {
  const uriGetByName = endPoints.products.getproductByName(name);
  try {
    const response = await fetch(uriGetByName);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const findProductByClientIDName = async (clientsID, name) => {
  const uriGetByName = endPoints.productDetails.getProductDetailsByClientIDName(clientsID, name);
  try {
    const response = await fetch(uriGetByName);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
