import { MARITAL_STATUS_ENUM, EMPLOYEE_STATUS_ENUM } from '@services/api/clients';

const defaultState = {
  departments: [],
  provinces: [],
  districts: [],
  clients: [],
  clientState: {
    id: undefined,
    name: '',
    lastname: '',
    email: '',
    password: '123456',
    phone: {
      codCountry: '51',
      number: ''
    },
    profession: '',
    maritalStatus: MARITAL_STATUS_ENUM[0],
    employmentStatus: EMPLOYEE_STATUS_ENUM[0],
    addressData: {
      address: '',
      district: '',
      province: '',
      department: ''
    },
    document: {
      type: '',
      number: ''
    },
    company: {
      position: '',
      name: '',
      address: '',
      item: ''
    },
    bankingEntity: '',
    accountNumber: ''
  }
};

export default defaultState;
