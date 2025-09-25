import React, { FC } from 'react';
import ArrowRight from '../../assets/icons/ArrowRight.svg';
import ArrowLeft from '../../assets/icons/ArrowLeft.svg';
import { StyledButton } from './styles';

type ArrowButtonProps = {
  type: 'prev' | 'next';
  disabled?: boolean;
};

export const ArrowButton: FC<ArrowButtonProps> = ({ type, disabled }) => {
  return (
    <StyledButton disabled={disabled}>
      {type === 'prev' ? <ArrowLeft /> : <ArrowRight />}
    </StyledButton>
  );
};
