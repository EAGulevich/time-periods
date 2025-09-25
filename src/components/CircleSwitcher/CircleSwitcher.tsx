import React, { FC } from 'react';
import { CircleDecorationLine, Item, ItemText } from './styles';
import { Dates, Year } from '../TimePeriods/styles';

type Step = {
  id: string | number;
  title: string;
};

type CircleSwitcherProps = {
  steps: Step[];
  currentStepId: Step['id'];
  onChangeStep: (currentStep: Step) => void;
  sizes: {
    circle?: number;
    closedDot?: number;
    openDot?: number;
    fontSize?: number;
  };
};

export const CircleSwitcher: FC<CircleSwitcherProps> = ({
  currentStepId,
  steps,
  onChangeStep,
  sizes,
}) => {
  return (
    <CircleDecorationLine
      ANGLE={-240 - +currentStepId * 60 - 40}
      size={sizes.circle}
      length={steps.length}
    >

      {steps.map((step, index) => {
        const isActive = currentStepId === step.id;
        return (
          <Item
            key={step.id}
            itemIndex={index}
            isActive={isActive}
            onClick={() => onChangeStep(step)}
            size={sizes.openDot}
            dotSize={sizes.closedDot}
            fontSize={sizes.fontSize}
          >
            <ItemText>{step.id}</ItemText>
          </Item>
        );
      })}

    </CircleDecorationLine>
  );
};
