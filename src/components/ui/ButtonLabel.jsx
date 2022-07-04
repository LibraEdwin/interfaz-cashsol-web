import styled from 'styled-components';

const Container = styled.div`
  margin-top:  ${({ marginTop }) => marginTop};
  margin-bottom:  ${({ marginBottom }) => marginBottom};
`;

// eslint-disable-next-line react/prop-types
const ButtonLabel = ({ children, ...prots }) => {
  return (
    <Container className="text-end" {...prots}>
      {children}
    </Container>
  );
};

export default ButtonLabel;
