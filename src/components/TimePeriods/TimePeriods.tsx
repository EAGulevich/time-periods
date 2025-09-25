import React, { useState } from 'react';
import { FC } from 'react';
import {
  Cards,
  CircleContainer,
  Content,
  NextBtn,
  PrevBtn,
  Dates,
  HorizontalDecorationLine,
  TimePeriodsWrapper,
  Title,
  VerticalDecorationLine,
  Year,
  DISABLED_SWIPER_BUTTON_CLASS,
  NEXT_SWIPER_BUTTON_CLASS,
  PREV_SWIPER_BUTTON_CLASS,
  Counter,
  ActionBtns,
} from './styles';
import { RotarySwitch } from '../RotarySwitch/RotarySwitch';
import { CircleButton } from '../CircleButton/CircleButton';
import { Card } from '../Card/Card';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import ArrowLeft from '../../assets/icons/ArrowLeft.svg';
import ArrowRight from '../../assets/icons/ArrowRight.svg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ArrowButton } from '../ArrowButton/ArrowButton';

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
            <Year type={'secondary'} value={2022} />
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
            <Counter>
              {'06'}/{'0/6'}
            </Counter>
            <ActionBtns>
              <ArrowButton type={'next'} />
              <ArrowButton type={'prev'} disabled />
            </ActionBtns>

            <Cards>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation={{
                  prevEl: `.${PREV_SWIPER_BUTTON_CLASS}`,
                  nextEl: `.${NEXT_SWIPER_BUTTON_CLASS}`,
                  disabledClass: DISABLED_SWIPER_BUTTON_CLASS,
                }}
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                spaceBetween={40}
                slidesPerView={3}
              >
                <SwiperSlide key={1}>
                  <Card
                    title={'2015'}
                    description={
                      'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, '
                    }
                  />
                </SwiperSlide>
                <SwiperSlide key={2}>
                  <Card
                    title={'2015'}
                    description={
                      'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11'
                    }
                  />
                </SwiperSlide>{' '}
                <SwiperSlide key={3}>
                  <Card title={'2015'} description={'Телескоп '} />
                </SwiperSlide>{' '}
                <SwiperSlide key={4}>
                  <Card
                    title={'2015'}
                    description={
                      'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11'
                    }
                  />
                </SwiperSlide>
                <SwiperSlide key={5}>
                  <Card
                    title={'2015'}
                    description={'Телескоп «Хаббл» вшую обозначение GN-z11'}
                  />
                </SwiperSlide>
              </Swiper>
              <PrevBtn className={PREV_SWIPER_BUTTON_CLASS}>
                <ArrowRight />
              </PrevBtn>
              <NextBtn className={NEXT_SWIPER_BUTTON_CLASS}>
                <ArrowLeft />
              </NextBtn>
            </Cards>
          </div>
        </Content>
      </TimePeriodsWrapper>
    </>
  );
};
