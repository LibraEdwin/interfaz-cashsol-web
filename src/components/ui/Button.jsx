import styled, { css } from 'styled-components';
import { RESET_BUTTON, TRANSITIONS, BLUE_SCALE, RED_SCALE, GRAY_SCALE } from '@styles';

const Button = styled.button`
  ${RESET_BUTTON}
  position: relative;
  border-radius: 5px;
  font-size: ${props => props.size ? `${props.size}px` : '14px'};
  text-transform: uppercase;
  transition: ${TRANSITIONS.base};
  padding: .8rem 1rem;
  height: 56px;
  /* background: white; */

  ${({ theme, color }) => color && css` color: ${theme.colors[color]};  `}

  ${({ theme, primary }) => primary && css`
    background: ${theme.colors.primary};
    color: white;
    font-weight: 500;
    border: 2px solid ${BLUE_SCALE[600]};

    &:hover {
      background: white;
      border-color: ${theme.colors.primary};
      color: ${theme.colors.primary};
    }

    &:disabled {
      opacity: 0.5;
      cursor: none;
      pointer-events: none;
      border: 2px solid ${BLUE_SCALE[700]};
    }
  `}

  ${({ theme, alert }) => alert && css`
    background: ${theme.colors.danger};
    color: white;
    font-weight: 500;
    border: 2px solid ${RED_SCALE[500]};

    &:hover {
      background: white;
      border-color: ${theme.colors.danger};
      color: ${theme.colors.danger};
    }

    &:disabled {
      opacity: 0.5;
      cursor: none;
      pointer-events: none;
      border: 2px solid ${RED_SCALE[600]};
    }
  `}

  ${({ theme, color, variant }) => variant === 'outline' && color && css`
  border: 2px solid ${theme.colors[color]};
  color: ${theme.colors[color]};
  font-weight: 500;

  &:hover {
    background: ${theme.colors[color]};
    color: white;
  }
  `}

  ${({ theme, variant }) => variant === 'ghost' && css`
  background: transparent;
  color: ${GRAY_SCALE[900]};
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  padding: .5rem;  

  &:hover {
    color: ${theme.colors.primary};
    font-weight: 600;
  }
  `}

  ${({ theme, color, variant }) => variant === 'small' && color && css`
  border: 1px solid ${theme.colors.primary};
  color: ${theme.colors.primary};
  padding: .1rem .5rem;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  &:hover {
    background: ${theme.colors[color]};
    color: white;
  }
  `}

  ${({ block }) => block && css`
    width: 100%;
  `}


  ${({ theme, menu }) => menu && css`
  background: white;
  color: ${theme.colors.primary};
  padding: 1rem 1.5rem;
  font-weight: 500;
  font-size: 30px;
  line-height: 38px;
  border-radius: 10px;
  gap: 1.5rem;
  text-transform: none;
  width: 450px;
  height: 120px;
  text-align: start;
  display: flex;
  justify-content: center;
  margin: ${({ margin }) => margin ? `${margin}` : 'auto'};

  &:hover {
    box-shadow: 6px 6px 8px ${theme.colors.gray};
  }
  `}

`;

export default Button;
