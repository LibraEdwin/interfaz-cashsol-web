import { COLORS, GRAY_SCALE } from '@styles';
import styled, { css } from 'styled-components';

const ContainerTrafficLights = styled.div`
display: flex;
`;
const DivTrafficLights = styled.div`
  width: 63px;
  height: 63px;
  background-color:  ${COLORS.green};
  border-radius: 50%;
  margin: 0.3rem;
  
  ${({ estado }) => {
    if (estado === 'BUENO') {
      return css`
  background-color:  ${COLORS.green};
      `;
    }
    if (estado === 'DUDOSO') {
      return css`
  background-color:  ${COLORS.orange};
      `;
    }
    if (estado === 'MALO') {
      return css`
  background-color:  ${COLORS.red};
      `;
    }
  }};
`;
const DivTrafficLightsGRAY = styled.div`
  width: 63px;
  height: 63px;
  background-color:  ${GRAY_SCALE[200]};
  border-radius: 50%;
  margin: 0.3rem;
`;

// eslint-disable-next-line react/prop-types
const TrafficLights = ({ estado }) => {
  return (
    <ContainerTrafficLights>
      {((estado === 'BUENO') &&
        (<div>
          <DivTrafficLights estado={estado} />
          <div className='label'>BUENO</div>
        </div>)) ||
        (<div>
          <DivTrafficLightsGRAY />
          <div className='label'>BUENO</div>
        </div>)
      }
      {((estado === 'DUDOSO') &&
        (<div>
          <DivTrafficLights estado={estado} />
          <div className='label'>DUDOSO</div>
        </div>)) ||
        (<div>
          <DivTrafficLightsGRAY />
          <div className='label'>DUDOSO</div>
        </div>)
      }
      {((estado === 'MALO') &&
        (<div>
          <DivTrafficLights estado={estado} />
          <div className='label'>MALO</div>
        </div>)) ||
        (<div>
          <DivTrafficLightsGRAY />
          <div className='label'>MALO</div>
        </div>)
      }
    </ContainerTrafficLights>
  );
};

export default TrafficLights;
