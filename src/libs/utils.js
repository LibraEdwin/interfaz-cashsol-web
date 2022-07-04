import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import 'dayjs/locale/es-mx';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale('es-mx');

/**
 * Agregar query a una uri
 * @param {string} uri - url del endpoint
 * @param {object} query - queries
 *
 * @example
 * uriWithQuery('http://localhost:3000/api/v1/resourse', {
 * limit: 10, page: 2, name: 'example'
 * }) // result 'http://localhost:3000/api/v1/resourse?limit=10&page=2&name=example'
 *
 * @returns {string}
 */
export function uriWithQuery(uri, query) {
  let str = '';
  for (const property in query) {
    if (query[property] !== '' && query[property] !== undefined) {
      if (str === '') {
        str += '?';
      } else {
        str += '&';
      }

      let value = query[property];

      if (typeof value === 'string') {
        value = query[property].replace(/ /g, '%20');
      }

      str += `${property}=${value}`;
    }
  }

  return uri + str;
}

/**
 * Obtener el formato de moneda Local
 * @param {number} decimal
 * @returns
 */
export function formatCurrency(decimal, locale = 'es-PE') {
  const symbols = {
    'es-PE': 'PEN',
    'es-ES': 'EUR'
  };

  return new Intl.NumberFormat(locale, { style: 'currency', currency: symbols[locale] }).format(decimal);
}

export function formatWithCharacter(date, character) {
  return date.split('T')[0].replace(/-/g, character);
}

/**
  * Función para convertir la fecha estandar a una fecha de zona horaria distinta
  * @param {Date} standardDate
  * @param {string} format
  * @returns
  */
export function getDate(standardDate = undefined, format = null) {
  return dayjs(standardDate).tz('America/Lima').format(format);
}
