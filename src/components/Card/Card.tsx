import React, { FC } from 'react';
import { CardContent, CardTitle, CardWrapper } from './styles';

type CardProps = {
  title: string;
  description: string;
};

export const Card: FC<CardProps> = ({ title, description }) => {
  return (
    <CardWrapper>
      <CardTitle>{title}</CardTitle>
      <CardContent>{description}</CardContent>
    </CardWrapper>
  );
};
