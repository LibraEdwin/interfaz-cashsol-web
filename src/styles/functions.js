// @ts-check
import { css } from 'styled-components';

/**
 *
 * @param {number} zIndex
 * @param {'fixed' | 'absolute'} position
 * @returns
 */
export const zerosIndex = (zIndex, position) => css`
  position: ${position};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${zIndex};
`;
