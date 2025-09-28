import React, { FC, PropsWithChildren } from 'react';
import { Button } from './styles';
import { CustomButtonProps } from './types';

type RoundButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  Partial<CustomButtonProps>;

/** Круглая кнопка */
export const RoundButton: FC<PropsWithChildren<RoundButtonProps>> = ({
  size = 'md',
  variant = 'default',
  children,
  ...props
}) => {
  return (
    <Button {...props} size={size} variant={variant}>
      {children}
    </Button>
  );
};
