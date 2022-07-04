const defaultState = {
  products: [],
  categories: [],
  categorySelected: null,
  productDetail: {
    id: '',
    product: null,
    client: null,
    appraisedValue: '',
    productName: '',
    year: undefined,
    brand: undefined,
    model: undefined,
    serie: undefined,
    features: '',
    observationIntExt: '',
    observationOperation: '',
    receptionDate: undefined,
    returnDate: undefined
  }
};

export default defaultState;
