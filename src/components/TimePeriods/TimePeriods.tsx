import React, { useState } from 'react';
import { FC } from 'react';
import {
  Content, Dates,
  HorizontalDecorationLine,
  TimePeriodsWrapper,
  Title,
  VericalDecorationLine, Year,
} from './styles';
import { CircleSwitcher } from '../CircleSwitcher/CircleSwitcher';

export const TimePeriods: FC = () => {
  const [current, setCurrent] = useState<string>('1');

  return (
    <>
    <TimePeriodsWrapper>
      {/*<VericalDecorationLine />*/}
      {/*<HorizontalDecorationLine />*/}
      <CircleSwitcher
        steps={[
          { id: '1', title: 'Литература' },
          { id: '2', title: 'Кино' },
          { id: '3', title: 'A' },
          { id: '4', title: 'Б' },
          { id: '5', title: 'В' },
          { id: '6', title: 'Г' },
        ]}
        currentStepId={current}
        onChangeStep={newStep => setCurrent(`${newStep.id}`)}
      />
      {/*<Content>*/}
      {/*  <Title>Исторические даты</Title>*/}
      {/*  <Dates>*/}
      {/*    <Year>2015</Year>*/}
      {/*    <Year color={'secondary'}>2022</Year>*/}
      {/*  </Dates>*/}
      {/*  <div> 06/06</div>*/}
      {/*  <div>*/}
      {/*    {'<'}*/}
      {/*    {'>'}*/}
      {/*  </div>*/}
      {/*  <div>список</div>*/}
      {/*</Content>*/}
    </TimePeriodsWrapper>
    </>
  );
};


