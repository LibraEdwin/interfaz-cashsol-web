import { endPoints } from './endPoints';

export const MARITAL_STATUS_ENUM = ['soltero', 'casado', 'divorciado', 'viudo'];

export const EMPLOYEE_STATUS_ENUM = ['dependiente', 'independiente'];

export const findClientByName = async (name) => {
  const uriGetByName = endPoints.clients.getClientByName(name);
  try {
    const response = await fetch(uriGetByName);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const findClientByNameLimit = async (name, limit) => {
  const uriGetByName = endPoints.clients.getClientByNameLimit(name, limit);
  try {
    const response = await fetch(uriGetByName);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const createClient = async (client) => {
  const uriPost = endPoints.clients.postClient;
  try {
    const response = await fetch(uriPost, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(client)
    });

    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const updateClient = async (idClient, client) => {
  const uriPost = endPoints.clients.patchClient(idClient);
  try {
    const response = await fetch(uriPost, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(client)
    });

    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const getClient = async (idClient) => {
  const uriPost = endPoints.clients.getClient(idClient);
  try {
    const response = await fetch(uriPost);

    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const deleteClient = async (idClient) => {
  const uriDelete = endPoints.clients.deleteClient(idClient);
  try {
    await fetch(uriDelete, { method: 'DELETE' });
  } catch (error) {
    console.log(error);
  }
};
