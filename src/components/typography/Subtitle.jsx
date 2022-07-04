import styled from 'styled-components';

const Subtitle = styled.h3`
  font-size: 20px;
  line-height: 23px;
  color: ${({ theme, color }) => color && theme.colors[color]};
  font-weight: ${({ bold }) => bold && 700};
`;

export default Subtitle;
