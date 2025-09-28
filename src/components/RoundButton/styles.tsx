import styled, { css } from 'styled-components';
import { buttonSizeStyles } from './sizes';
import { CustomButtonProps } from './types';

export const Button = styled.button<CustomButtonProps>`
  ${({ size }) => buttonSizeStyles[size]}

  font-size: 20px;
  line-height: 30px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.blackBlue50};
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  svg {
    path {
      stroke: ${({ theme }) => theme.colors.blackBlue};
    }
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
    cursor: auto;
  }

  ${({ variant }) =>
    variant === 'float' &&
    css`
      border: none;
      box-shadow: 0 0 5px ${({ theme }) => theme.colors.blue};
      svg {
        path {
          stroke: ${({ theme }) => theme.colors.blue};
        }
      }
    `}
`;
