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
import { RotarySwitch } from '../RotarySwitch/RotarySwitch';

export const TimePeriods: FC = () => {
  const [current, setCurrent] = useState<number>(1);

  return (
    <>
      <TimePeriodsWrapper>
        <VerticalDecorationLine />
        <HorizontalDecorationLine />
        <CircleContainer>
          <Dates>
            <Year value={2017} />
            <Year color={'secondary'} value={2022} />
          </Dates>
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
        <Content>
          <Title>
            Исторические
            <br />
            даты
          </Title>

          <div>
            <div> 06/06</div>
            {/*<div style={{ display: 'flex', gap: '20px' }}>*/}
            {/*  <CircleButton />*/}
            {/*  <CircleButton />*/}
            {/*</div>*/}
            {/*<div style={{ display: 'flex', gap: '40px' }}>*/}
            {/*  <Card />*/}
            {/*  <Card />*/}
            {/*  <Card />*/}
            {/*</div>*/}
          </div>
        </Content>
      </TimePeriodsWrapper>
    </>
  );
};
