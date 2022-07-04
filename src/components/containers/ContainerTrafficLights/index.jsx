import styled from 'styled-components';

const DivContainer = styled.div`
text-align: center;
display: flex;
`;

// eslint-disable-next-line react/prop-types
const ContainerTrafficLights = ({ children, ...prots }) => {
  return (
    <DivContainer {...prots}>
      {children}
    </DivContainer>
  );
};

export default ContainerTrafficLights;
