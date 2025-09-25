import React, {FC} from 'react';
import {CircleDecorationLine, Item, ItemText} from "./styles";


type Step = {
    id: string | number;
    title: string;
}

type CircleSwitcherProps = {
    steps: Step[];
    currentStepId: Step['id'];
    onChangeStep: (currentStep: Step) => void;
}

export const CircleSwitcher: FC<CircleSwitcherProps> = ({currentStepId, steps, onChangeStep}) => {


    return <CircleDecorationLine ANGLE={-240 -(+currentStepId ) * 60 - 40}>
        {steps.map((step, index) =>{
const isActive = currentStepId === step.id;
console.log(isActive, currentStepId, step.id);
            return (
                <Item
                    key={step.id}
                    itemIndex={index}
                    isActive={isActive}
                    onClick={() => onChangeStep(step)}
                >
                    <ItemText>
                    {step.id}
                    </ItemText>
                </Item>
            );


        })}


    </CircleDecorationLine>
}
