const API = process.env.NEXT_PUBLIC_URI_API;
const VERSION = process.env.NEXT_PUBLIC_VERSION_API;

export const endPoints = {
  departments: {
    getDepartments: `${API}/api/${VERSION}/departments`,
    getDepartment: (id) => `${API}/api/${VERSION}/departments/${id}`
  },
  provinces: {
    getProvinces: `${API}/api/${VERSION}/provinces`,
    getProvincesByDepartment: (id) => `${API}/api/${VERSION}/provinces/department/${id}`,
    getProvince: (id) => `${API}/api/${VERSION}/provinces/${id}`
  },
  districts: {
    getDistricts: `${API}/api/${VERSION}/districts`,
    getDistrictsByProvince: (id) => `${API}/api/${VERSION}/districts/province/${id}`,
    getDistrict: (id) => `${API}/api/${VERSION}/districts/${id}`
  },
  professions: {
    getProfessions: `${API}/api/${VERSION}/profession`,
    getProfession: (id) => `${API}/api/${VERSION}/profession/${id}`
  },
  positions: {
    getPositions: `${API}/api/${VERSION}/position`,
    getPosition: (id) => `${API}/api/${VERSION}/position/${id}`
  },
  bankingEntities: {
    getBankingEntities: `${API}/api/${VERSION}/banking-entities`,
    getBankingEntity: (id) => `${API}/api/${VERSION}/banking-entities/${id}`
  },
  items: {
    getItems: `${API}/api/${VERSION}/items`,
    getItem: (id) => `${API}/api/${VERSION}/items/${id}`
  },
  documentTypes: {
    getDocumentTypes: `${API}/api/${VERSION}/documentType`,
    getDocumentType: (id) => `${API}/api/${VERSION}/documentType/${id}`
  },
  clients: {
    getClients: `${API}/api/${VERSION}/clients`,
    getClient: (id) => `${API}/api/${VERSION}/clients/${id}`,
    getClientByName: (name) => `${API}/api/${VERSION}/clients?name=${name}`,
    getClientByNameLimit: (name, limit) => `${API}/api/${VERSION}/clients?name=${name}&limit=${limit}`,
    postClient: `${API}/api/${VERSION}/clients`,
    patchClient: (id) => `${API}/api/${VERSION}/clients/${id}`,
    deleteClient: (id) => `${API}/api/${VERSION}/clients/${id}`
  },
  products: {
    getProducts: `${API}/api/${VERSION}/product`,
    getProductsByCategory: (id) => `${API}/api/${VERSION}/product/category/${id}`,
    getProduct: (id) => `${API}/api/${VERSION}/product/${id}`,
    getproductByName: (name) => `${API}/api/${VERSION}/product?name=${name}`,
  },
  productCategories: {
    getProductCategories: `${API}/api/${VERSION}/productCategory`,
    getProductCategory: (id) => `${API}/api/${VERSION}/productCategory/${id}`
  },
  productDetails: {
    getProductDetails: `${API}/api/${VERSION}/product-details`,
    getProductDetail: (id) => `${API}/api/${VERSION}/product-details/${id}`,
    postProductDetail: `${API}/api/${VERSION}/product-details`,
    deliverProduct: (id) => `${API}/api/${VERSION}/product-details/deliver-product/${id}`,
    updateProductDetail: (id) => `${API}/api/${VERSION}/product-details/${id}`,
    getProductDetailsByClientID: (clientsID) => `${API}/api/${VERSION}/product-details?client=${clientsID}`,
    getProductDetailsByClientIDName: (clientsID, name) => `${API}/api/${VERSION}/product-details?client=${clientsID}&productName=${name}`
  }

  // regsistrar enpoints
};
