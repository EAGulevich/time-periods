import React, { useState } from 'react';
import { FC } from 'react';
import {
  CircleContainer,
  Content,
  Dates,
  HorizontalDecorationLine,
  TimePeriodsWrapper,
  Title,
  VerticalDecorationLine,
  Year,
} from './styles';
import { CircleButton } from '../CircleButton/CircleButton';
import { Card } from '../Card/Card';
import { RotarySwitch } from '../RotarySwitch/RotarySwitch';

export const TimePeriods: FC = () => {
  const [current, setCurrent] = useState<number>(1);

  return (
    <>
      <TimePeriodsWrapper>
        <VerticalDecorationLine />
        <HorizontalDecorationLine />
        <CircleContainer>
          {/*<Dates>*/}
          {/*  <Year>2015</Year>*/}
          {/*  <Year color={'secondary'}>2022</Year>*/}
          {/*</Dates>*/}
          <RotarySwitch
            points={[
              { pointNumber: 1, label: 'Литература' },
              { pointNumber: 2, label: 'Кино' },
              { pointNumber: 3, label: 'A' },
              { pointNumber: 4, label: 'Б' },
              { pointNumber: 5, label: 'В' },
              { pointNumber: 6, label: 'Г' },
            ]}
            currentPoint={current}
            onChange={newStep => setCurrent(newStep.pointNumber)}
          />
        </CircleContainer>
        {/*<Content*/}
        {/*  style={{*/}
        {/*    display: 'flex',*/}
        {/*    flexDirection: 'column',*/}
        {/*    justifyContent: 'space-between',*/}
        {/*    height: '100%',*/}
        {/*    flex: 1,*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <Title>*/}
        {/*    <div style={{ paddingLeft: '78px' }}>Исторические<br/>даты</div>*/}
        {/*  </Title>*/}

        {/*  <div style={{ marginLeft: '78px' }}>*/}
        {/*    <div> 06/06</div>*/}
        {/*    <div style={{ display: 'flex', gap: '20px' }}>*/}
        {/*      <CircleButton />*/}
        {/*      <CircleButton />*/}
        {/*    </div>*/}
        {/*    <div style={{ display: 'flex', gap: '40px' }}>*/}
        {/*      <Card />*/}
        {/*      <Card />*/}
        {/*      <Card />*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</Content>*/}
      </TimePeriodsWrapper>
    </>
  );
};
