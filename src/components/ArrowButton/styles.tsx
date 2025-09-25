import styled, { css } from 'styled-components';

export const StyledButton = styled.button<{ disabled?: boolean }>`
  padding: 0;
  width: 50px;
  height: 50px;
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
  ${({ disabled }) =>
    disabled
      ? css`
          opacity: 0.5;
          pointer-events: none;
          cursor: auto;
        `
      : ''}
`;
