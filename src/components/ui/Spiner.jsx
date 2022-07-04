import styled, { css, keyframes } from 'styled-components';

const LoadAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spiner = styled.span`
  position: relative;
  font-size: 1em;
  text-indent: -9999em;
  border-top: 0.25em solid rgba(255, 255, 255, 0.2);
  border-right: 0.25em solid rgba(255, 255, 255, 0.2);
  border-bottom: 0.25em solid rgba(255, 255, 255, 0.2);
  border-left: 0.25em solid currentColor;
  transform: translateZ(0);
  animation: ${LoadAnimation} 1.1s infinite linear;

  &,
  &:after {
    border-radius: 50%;
    width: 1.5em;
    height: 1.5em;
  }

  ${({ sm }) => sm && css`
    font-size: 0.5rem;
  `}
`;

export default Spiner;
