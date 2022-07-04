import { zerosIndex, Z_INDEXS, GRAY_SCALE, RESET_BUTTON, FLEX_CENTER } from '@styles';
import styled from 'styled-components';
import { rgba } from 'polished';

const Wrapper = styled.div`
  ${FLEX_CENTER}
  ${zerosIndex(Z_INDEXS.modal.overlay, 'fixed')}
  background: ${rgba(GRAY_SCALE[1000], 0.6)};
  backdrop-filter: blur(2px);
`;

const Content = styled.div`
  background: white;
  width: 90%;
  max-width: 800px;
  min-height: 600px;
  border-radius: 0.5rem;
  position: relative;
  padding: 2rem;
`;

const Close = styled.button`
  ${RESET_BUTTON}
  display: flex;
  padding: 0;
  margin-bottom: 1rem;
  margin-left: auto;

  font-style: normal;
  font-weight: 550;
  font-size: 1rem;
  line-height: 1rem;

  div{
    margin: auto;
    margin-right: -7px;
    font-size: 1.1rem;
  }
`;

export default {
  Wrapper,
  Content,
  Close
};
