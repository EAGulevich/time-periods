import { css } from 'styled-components';

export const ButtonSize = {
  sm: 25,
  md: 40,
  lg: 50,
  xl: 56,
};

export const buttonSizeStyles = {
  sm: css`
    width: ${ButtonSize.sm}px;
    height: ${ButtonSize.sm}px;
  `,
  md: css`
    width: ${ButtonSize.md}px;
    height: ${ButtonSize.md}px;
  `,
  lg: css`
    width: ${ButtonSize.lg}px;
    height: ${ButtonSize.lg}px;
  `,
  xl: css`
    width: ${ButtonSize.xl}px;
    height: ${ButtonSize.xl}px;
  `,
};
