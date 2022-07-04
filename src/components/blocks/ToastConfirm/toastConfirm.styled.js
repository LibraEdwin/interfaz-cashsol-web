import styled from 'styled-components';

const Wrapper = styled.div`

`;

const Btn = styled.button`
  background: #00558e;
  border-style: none;
  color: white;
  cursor: pointer;
  padding: 0.3rem 1rem;
  transition: 0.4s ease-in;
  border-radius: 0.25rem;

  &:hover {
    background: #328ecd;
  }
`;

export default {
  Wrapper,
  Btn
};
