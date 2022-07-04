import styled from 'styled-components';
import { MEDIA_BREAKPOINTS } from '@styles/constants';

const Section = styled.section`
  padding: 2rem 0;

  ${MEDIA_BREAKPOINTS.tablet} {
    padding: 3rem 0;
  }
  ${MEDIA_BREAKPOINTS.laptop} {
    padding: 4rem 0;
  }
`;

export default Section;
