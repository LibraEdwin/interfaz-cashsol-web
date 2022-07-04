import TYPE_CLIENT from './types';
import defaultState from './state';

const clientReducer = (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case TYPE_CLIENT.UPDATE_CLIENT:
      return { ...state, clientState: payload };
    case TYPE_CLIENT.UPDATE_DEPARTMENTS:
      return { ...state, departments: payload };
    case TYPE_CLIENT.UPDATE_PROVINCES:
      return { ...state, provinces: payload };
    case TYPE_CLIENT.UPDATE_DISTRICTS:
      return { ...state, districts: payload };
    case TYPE_CLIENT.UPDATE_PROFESSIONS:
      return { ...state, professions: payload };
    case TYPE_CLIENT.UPDATE_BANKING_ENTITIES:
      return { ...state, bankingEntities: payload };
    case TYPE_CLIENT.UPDATE_POSITIONS:
      return { ...state, positions: payload };
    case TYPE_CLIENT.UPDATE_ITEMS:
      return { ...state, items: payload };
    case TYPE_CLIENT.UPDATE_DOCUMENT_TYPES:
      return { ...state, documentTypes: payload };
    default:
      return state;
  }
};

export default clientReducer;
