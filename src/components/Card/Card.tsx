import React from 'react';
import { CardContent, CardTitle, CardWrapper } from './styles';

export const Card = () => {
  return (
    <CardWrapper>
      <CardTitle>2015</CardTitle>
      <CardContent>
        Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных
        галактик, получившую обозначение GN-z11
      </CardContent>
    </CardWrapper>
  );
};
