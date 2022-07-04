import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 21px;
  color: ${({ theme, color }) => color && theme.colors[color]};
  font-weight: ${({ bold }) => bold && 500};
`;

export default Paragraph;
