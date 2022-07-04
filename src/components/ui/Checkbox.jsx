import styled from 'styled-components';

const Checkbox = styled.input`
  width: 20px;
  height: 20px;

  &[type="checkbox"] {
    margin: 0;

    &:checked {
      // border: 2px solid red;
    }
  }
`;

export default Checkbox;
