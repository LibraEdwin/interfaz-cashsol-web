import { GRAY_SCALE } from '@styles';
import styled, { css } from 'styled-components';

const TextArea = styled.textarea`
display: block;
width: 100%;
max-width: 100%;
height: ${({ height }) => height};
border-radius: 0.25rem;
padding: 1.2rem 1.2rem;
border: 1px solid ${GRAY_SCALE[600]};
transition: 0.2s ease;
background-repeat: no-repeat;
font-size: 14px;
font-family: ${({ theme }) => theme.fonts.fontPrimary};

&::placeholder {
  color: ${GRAY_SCALE[300]};
}

&:focus {
  border-color: ${({ theme }) => theme.colors.primary};
}

&:focus ~ svg {
  color: ${({ theme }) => theme.colors.primary};
}
resize: none;

 ${({ theme, invalid }) => invalid && css`
  border-color: ${theme.colors.danger};
 `}
`;

export default TextArea;
