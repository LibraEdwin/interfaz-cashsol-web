import { COLORS } from '@styles';
import styled, { css } from 'styled-components';

const Label = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 13px;

  ${({ theme, invalid }) => invalid && css`
    color: ${theme.colors.danger};
  `}

  & > abbr {
    color: ${({ theme }) => theme.colors.danger};
    text-decoration: none;
    margin-left: 0.24rem;
  }

  ${({ title }) => title && css`
        font-style: normal;
        font-weight: 500;
        font-size: 30px;
        line-height: 35px;
        margin-bottom: 3rem;
        color: ${COLORS.blue};
  `}
  ${({ subtitle }) => subtitle && css`
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 23px;
        margin-bottom: 3rem;
        color: ${COLORS.blue};
  `}
}
`;

export default Label;
