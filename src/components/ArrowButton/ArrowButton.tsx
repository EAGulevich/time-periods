import React, { ButtonHTMLAttributes, FC, HTMLAttributes } from 'react';
import ArrowRight from '../../assets/icons/ArrowRight.svg';
import ArrowLeft from '../../assets/icons/ArrowLeft.svg';
import { StyledButton } from './styles';

type ArrowButtonProps = {
  type: 'prev' | 'next';
  disabled?: boolean;
} & Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>;

export const ArrowButton: FC<ArrowButtonProps> = ({
  type,
  disabled,
  ...otherProps
}) => {
  return (
    <StyledButton disabled={disabled} {...otherProps}>
      {type === 'prev' ? <ArrowLeft /> : <ArrowRight />}
    </StyledButton>
  );
};
