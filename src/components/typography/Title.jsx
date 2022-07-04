import styled from 'styled-components';

const Title = styled.h2`
  font-size: 32px;
  line-height: 38px;
  color: ${({ theme, color }) => color && theme.colors[color]};
  font-weight: ${({ bold }) => bold && 700};
`;

export default Title;
