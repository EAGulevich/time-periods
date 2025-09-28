import React, { FC } from 'react';
import { CardContent, CardTitle, CardWrapper } from './styles';

type CardProps = {
  title: string | number;
  description: string;
  size?: 'default' | 'small';
};

export const Card: FC<CardProps> = ({ title, description, size = 'default' }) => {
  return (
    <CardWrapper size={size}>
      <CardTitle>{title}</CardTitle>
      <CardContent>{description}</CardContent>
    </CardWrapper>
  );
};
