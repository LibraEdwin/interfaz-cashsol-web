import styled from 'styled-components';

const Headline = styled.h4`
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme, color }) => color && theme.colors[color]};
  font-weight: ${({ bold }) => bold && 700};
`;

export default Headline;
