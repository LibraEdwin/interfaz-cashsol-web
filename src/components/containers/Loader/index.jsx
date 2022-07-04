import styled from 'styled-components';

// const Ellipsis = styled.div`
//   display: flex;
//   position: relative;
//   width: 80px;
//   height: 80px;
//   margin: auto;

//   div {
//     position: absolute;
//     top: 33px;
//     width: 13px;
//     height: 13px;
//     border-radius: 50%;
//     background: #FFD133;
//     animation-timing-function: cubic-bezier(0, 1, 1, 0);
//   }

//   div:nth-child(1) {
//     left: 8px;
//     animation: lds-ellipsis1 0.6s infinite;
//   }
//   div:nth-child(2) {
//     left: 8px;
//     animation: lds-ellipsis2 0.6s infinite;
//   }
//   div:nth-child(3) {
//     left: 32px;
//     animation: lds-ellipsis2 0.6s infinite;
//   }
//   div:nth-child(4) {
//     left: 56px;
//     animation: lds-ellipsis3 0.6s infinite;
//   }
//   @keyframes lds-ellipsis1 {
//     0% {
//       transform: scale(0);
//     }
//     100% {
//       transform: scale(1);
//     }
//   }
//   @keyframes lds-ellipsis3 {
//     0% {
//       transform: scale(1);
//     }
//     100% {
//       transform: scale(0);
//     }
//   }
//   @keyframes lds-ellipsis2 {
//     0% {
//       transform: translate(0, 0);
//     }
//     100% {
//       transform: translate(24px, 0);
//     }
//   }
// `;

const Spinner = styled.div`
  color: official;
  display: flex;
  position: relative;
  width: 80px;
  height: 80px;
  margin: auto;

  div {
    transform-origin: 40px 40px;
    animation: lds-spinner 1.2s linear infinite;
  }
  div:after {
    content: " ";
    display: block;
    position: absolute;
    top: 3px;
    left: 37px;
    width: 6px;
    height: 18px;
    border-radius: 20%;
    background: #FFD133;
  }
  div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -1.1s;
  }
  div:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -1s;
  }
  div:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.9s;
  }
  div:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.8s;
  }
  div:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.7s;
  }
  div:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.6s;
  }
  div:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.5s;
  }
  div:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.4s;
  }
  div:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.3s;
  }
  div:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.2s;
  }
  div:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.1s;
  }
  div:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
  }
  @keyframes lds-spinner {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  background: #0064A8;
`;

const Loader = () => {
  return (
    <Wrapper>
      <Spinner className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></Spinner>
    </Wrapper>
    // <Ellipsis className="lds-ellipsis"><div></div><div></div><div></div><div></div></Ellipsis>
  );
};

export default Loader;
