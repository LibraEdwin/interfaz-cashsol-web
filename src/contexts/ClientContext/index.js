import PropTypes from 'prop-types';
import {
  apiDepartment,
  apiProfession,
  apiPosition,
  apiItem,
  apiBankingEntity,
  apiDocumentType
} from '@services/api';
import { createContext, useContext, useEffect, useReducer } from 'react';
import defaultState from './state';
import clientReducer from './reducer';
import TYPE_CLIENT from './types';

export const ClientContext = createContext(undefined);

export const useClientContext = () => useContext(ClientContext);

export const ClientProvider = ({ children }) => {
  const [clientStorage, dispatchClientStorage] = useReducer(clientReducer, defaultState);

  useEffect(() => {
    (async () => {
      /** Obtener Departamentos */
      const { data: departments } = await apiDepartment.getDepartments();
      dispatchClientStorage({ type: TYPE_CLIENT.UPDATE_DEPARTMENTS, payload: departments });

      /** Obtener profesiones */
      const { data: professions } = await apiProfession.getProfessions({ limit: 0 });
      dispatchClientStorage({ type: TYPE_CLIENT.UPDATE_PROFESSIONS, payload: professions });

      /** Obtener entidades bancarias */
      const { data: { bankingEntities } } = await apiBankingEntity.getBankingEntities({ limit: 0 });
      dispatchClientStorage({ type: TYPE_CLIENT.UPDATE_BANKING_ENTITIES, payload: bankingEntities });

      /** Obtener cargos */
      const { data: { positions } } = await apiPosition.getPositions({ limit: 0 });
      dispatchClientStorage({ type: TYPE_CLIENT.UPDATE_POSITIONS, payload: positions });

      /** Obtener rubros */
      const { data: { items } } = await apiItem.getItems({ limit: 0 });
      dispatchClientStorage({ type: TYPE_CLIENT.UPDATE_ITEMS, payload: items });

      /** Obtener tipos de documentos */
      const { data: { documentTypes } } = await apiDocumentType.getDocumentTypes({ limit: 0 });
      dispatchClientStorage({ type: TYPE_CLIENT.UPDATE_DOCUMENT_TYPES, payload: documentTypes });
    })();
  }, []);

  return (
    <ClientContext.Provider value={[clientStorage, dispatchClientStorage]}>
      {children}
    </ClientContext.Provider>
  );
};

ClientProvider.propTypes = {
  children: PropTypes.node.isRequired
};
