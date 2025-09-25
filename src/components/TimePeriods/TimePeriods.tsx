import React, { useState } from 'react';
import { FC } from 'react';
import {
  Content,
  Dates,
  HorizontalDecorationLine,
  TimePeriodsWrapper,
  Title,
  VericalDecorationLine,
  Year,
} from './styles';
import { CircleSwitcher } from '../CircleSwitcher/CircleSwitcher';
import { CircleButton } from '../CircleButton/CircleButton';
import { Card } from '../Card/Card';

export const TimePeriods: FC = () => {
  const [current, setCurrent] = useState<string>('1');

  return (
    <>
      <TimePeriodsWrapper>
        <VericalDecorationLine />
        <HorizontalDecorationLine />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Dates>
            <Year>2015</Year>
            <Year color={'secondary'}>2022</Year>
          </Dates>
          <CircleSwitcher
            sizes={{}}
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
        </div>
        <Content
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            flex: 1,
          }}
        >
          <Title>
            <div style={{ paddingLeft: '78px' }}>Исторические даты</div>
          </Title>

          <div style={{ marginLeft: '78px' }}>
            <div> 06/06</div>
            <div style={{ display: 'flex', gap: '20px' }}>
              <CircleButton />
              <CircleButton />
            </div>
            <div style={{ display: 'flex', gap: '40px' }}>
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </Content>
      </TimePeriodsWrapper>
    </>
  );
};
