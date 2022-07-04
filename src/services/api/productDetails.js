import { endPoints } from './endPoints';

export const getProductDetail = async (id) => {
  const uriGetOne = endPoints.productDetails.getProductDetail(id);
  try {
    const response = await fetch(uriGetOne);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

const getFormData = (productDetail) => {
  const {
    product,
    client,
    appraisedValue,
    productName,
    year,
    brand,
    model,
    serie,
    features,
    observationIntExt,
    observationOperation
  } = productDetail;

  const formData = new FormData();

  formData.append('product', product);
  formData.append('client', client);
  formData.append('appraisedValue', appraisedValue);
  formData.append('productName', productName);
  formData.append('features', features);
  formData.append('observationIntExt', observationIntExt);
  formData.append('observationOperation', observationOperation);

  if (year) formData.append('year', year);
  if (brand) formData.append('brand', brand);
  if (model) formData.append('model', model);
  if (serie) formData.append('serie', serie);

  return formData;
};

export const createProductDetail = async (productDetail) => {
  const uriPost = endPoints.productDetails.postProductDetail;

  const formData = getFormData(productDetail);

  try {
    const response = await fetch(uriPost, {
      method: 'POST',
      body: formData
    });

    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const updateProductDetail = async (id, productDetail) => {
  const uriUpdate = endPoints.productDetails.updateProductDetail(id);

  const formData = getFormData(productDetail);

  try {
    const response = await fetch(uriUpdate, {
      method: 'PATCH',
      body: formData
    });

    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const deliverProduct = async (id) => {
  const uriDeliver = endPoints.productDetails.deliverProduct(id);

  try {
    const response = await fetch(uriDeliver, { method: 'PATCH' });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
