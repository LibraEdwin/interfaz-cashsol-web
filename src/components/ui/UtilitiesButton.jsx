import styled from 'styled-components';

const UtilitiesButton = styled.button`
  background: none;
  border: 0;
  font-size:  ${({ size }) => size};
  color:  ${({ color }) => color};
`;

export default UtilitiesButton;
