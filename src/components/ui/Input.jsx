import { GRAY_SCALE } from '@styles';
import { lighten } from 'polished';
import styled, { css } from 'styled-components';

const Input = styled.input`
  display: block;
  width: 100%;
  border-radius: 0.25rem;
  padding: 1.1rem;
  border: 1px solid ${GRAY_SCALE[600]};
  /* transition: 0.2s ease; */
  background-repeat: no-repeat;
  font-size: 14px;

  &::placeholder {
    color: ${GRAY_SCALE[300]};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:focus ~ svg {
    color: ${({ theme }) => theme.colors.primary};
  }


  ${({ theme, background }) => {
    if (background === 'info') {
      return css`
        background-color: ${lighten(0.33, theme.colors.info)};
        &:focus {
          border-color: ${theme.colors.info};
        }
      `;
    }

    if (background === 'success') {
      return css`
        background-color: ${lighten(0.43, theme.colors.success)};
        &:focus {
          border-color: ${theme.colors.success};
        }
      `;
    }

    if (background === 'warning') {
      return css`
        background-color: ${lighten(0.23, theme.colors.warning)};
        &:focus {
          border-color: ${theme.colors.warning};
        }
      `;
    }
  }};

  &[type="search"] {
    padding-left: 2.5rem;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'/%3E%3C/svg%3E");
    background-position: 0.75rem 50%;

    ${({ invalidIco }) => invalidIco && css`  
    padding-left: 1.5rem;
    background-image: none;
  `}
  }

  &[type="search"]::-webkit-search-cancel-button {
    position:relative;
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius:10px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-x-lg' viewBox='0 0 16 16'%3E%3Cpath d='M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    cursor: pointer;
  }

  &[type="number"].text-end {
    padding-right: 0.5rem;
  }

  &[type="number"].text-end::-webkit-inner-spin-button {
    margin-left: 0.5rem;
  }

  ${({ theme, invalid }) => invalid && css`  
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='red' class='bi bi-exclamation-triangle' viewBox='0 0 16 16'%3E%3Cpath d='M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z'/%3E%3Cpath d='M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z'/%3E%3C/svg%3E");
    background-position: calc(100% - 1rem) calc(100% - 1.25rem);
    padding-right: 2.5rem;

    & ~ svg {
      display: none;
    }
    
    &, 
    &:focus {
      border: 1px solid ${theme.colors.danger};
    }
  `}

  ${({ theme, disabled }) => disabled && css`
    background: ${lighten(0.07, theme.colors.light)};
    pointer-events: none;
  `}
`;

export default Input;
