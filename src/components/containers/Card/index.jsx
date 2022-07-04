import styled, { css } from 'styled-components';

const Card = styled.div`
  background: ${({ theme, background }) => background ? theme.colors[background] : 'white'};
  min-height: ${({ minHeight }) => minHeight};
  border-radius: 1rem;
  border: ${({ border, theme }) => border && `1px solid ${theme.colors.gray}`};

  ${({ noRounded }) => noRounded && css`
    border-radius: 0;
  `}
  @media print {
    padding: 0 !important;
    border: none;
  }
`;

export default Card;
