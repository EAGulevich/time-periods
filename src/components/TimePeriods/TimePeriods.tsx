import React, {useState} from 'react';
import {FC} from "react";
import { HorizontalDecorationLine, TimePeriodsWrapper, VericalDecorationLine} from "./styles";
import {CircleSwitcher} from "./parts/CircleSwitcher/CircleSwitcher";

export const TimePeriods: FC = () => {
    const [current, setCurrent] = useState<string>('1');

    return <TimePeriodsWrapper>
        <VericalDecorationLine/>
        <HorizontalDecorationLine/>
        <CircleSwitcher steps={[{id: '1', title: 'Литература'},

            {id: '2', title: 'Кино'},
            {id: '3', title: 'A'},
            {id: '4', title: 'Б'},
            {id: '5', title: 'В'},
            {id: '6', title: 'Г'}



        ]} currentStepId={current} onChangeStep={(newStep) => setCurrent(`${newStep.id}`)} />
    </TimePeriodsWrapper>
}
