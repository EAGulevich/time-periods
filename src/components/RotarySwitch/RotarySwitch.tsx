import React, { FC } from 'react';
import { CircleDecorationLine, Item, ItemText } from './styles';

type Point = {
  /** Порядковый номер пункта, отображаемый внутри точки (например, 1 - 6) */
  pointNumber: number;
  /** Название пункта (Например, Наука) */
  label: string;
};

type CircleSwitcherProps = {
  /** Список пунктов на окружности (Рекомендуется использовать от 2 до 6 точек) */
  points: Point[];
  /** Выбранный пункт */
  currentPoint: Point['pointNumber'];
  /** Колбэк при выборе пункта */
  onChange: (selectedPoint: Point) => void;
};

/** Компонет Круговой переключатель, отображает окружность и точки на ней. */
export const RotarySwitch: FC<CircleSwitcherProps> = ({
  currentPoint,
  points,
  onChange,
}) => {
  // Первый пункт - сверху окружности
  const degreeOfPoint = -360 - (currentPoint - 1) * 60;
  // Первый пункт - смещаем вправо вниз на 20
  const degreeOfDisplacement = degreeOfPoint + 20;

  return (
    <CircleDecorationLine
      degreeOfDisplacement={degreeOfDisplacement}
      pointsCount={points.length}
    >
      {points.map(step => (
        <Item
          key={step.pointNumber}
          pointIndex={step.pointNumber - 1}
          isActive={currentPoint === step.pointNumber}
          onClick={() => onChange(step)}
        >
          <ItemText>{step.pointNumber}</ItemText>
        </Item>
      ))}
    </CircleDecorationLine>
  );
};
