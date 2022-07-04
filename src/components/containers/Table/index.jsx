import { FLEX_CENTER, GRAY_SCALE, TRANSITIONS } from '@styles';
import { lighten } from 'polished';
import styled, { css } from 'styled-components';

const Empty = styled.div`
  ${FLEX_CENTER}
  flex-direction: column;
  font-size: 54px;
  height: 100%;
  color: ${({ theme }) => theme.colors.primary};

  svg {
    opacity: 0.5;
  }
`;

const InputEdit = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border-style: none;
  transition: ${TRANSITIONS.base};
  border: 1px solid transparent;

  ${({ readOnly }) => !readOnly && css`
    background: ${lighten(0.07, GRAY_SCALE[100])};

    &:focus {
      border-color: ${GRAY_SCALE[200]};
    }
  `}
`;

const Col = styled.td`
  text-align: ${({ textAlign }) => textAlign && `${textAlign}`};
  border-top: 1px solid ${GRAY_SCALE[100]};
  vertical-align: middle;
  padding: 0.3rem;
  font-size: 14px;
`;

const Row = styled.tr`
  width: 100%;
`;

const Head = styled.thead`
  th {
    padding-top: 1rem;
    padding-bottom: 1rem;
    border: none;
  }

  ${({ sticky }) => sticky && css`
    position: sticky;
    top: -1px;
    background: white;
    z-index: 3;
  `}
`;

const Body = styled.tbody`
th {
  /* font-size: 1.5rem; */
}
`;

const Content = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: ${({ minWidth }) => `${minWidth}px`};
`;

const Wrapper = styled.div`
  height: ${({ maxHeight }) => `${maxHeight}px`};
  overflow-y: scroll;
  height: 393px;
  border: 1px solid ${GRAY_SCALE[200]};
  border-radius: 4px;
  padding: 0 1rem;

  ${({ border }) => border && css`
    border: 1px solid ${GRAY_SCALE[200]};
    border-radius: 0.25rem;
  `}
`;

export default {
  Wrapper,
  Content,
  Head,
  Body,
  Row,
  Col,
  InputEdit,
  Empty
};
