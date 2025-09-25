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
import { ANOTHER_DATA as DATA } from '../../consts';

export const TimePeriods: FC = () => {
  const [current, setCurrent] = useState<number>(1);

  const currentPoints = DATA.points.find(p => p.number === current)?.data || [];
  const maxYear = Math.max(...currentPoints.map(p => p.year));
  const minYear = Math.min(...currentPoints.map(p => p.year));

  return (
    <>
      <TimePeriodsWrapper>
        <VerticalDecorationLine />
        <HorizontalDecorationLine />
        <CircleContainer>
          <Dates>
            <Year value={minYear} />
            <Year type={'secondary'} value={maxYear} />
          </Dates>
          <RotarySwitch
            points={DATA.points.map(item => ({
              label: item.label,
              pointNumber: item.number,
            }))}
            currentPoint={current}
            onChange={newStep => setCurrent(newStep.pointNumber)}
          />
        </CircleContainer>
        <Content>
          <Title>{DATA.title.replace(' ', '\n')}</Title>
          <div>
            <Counter>
              0{current}/0{DATA.points.length}
            </Counter>
            <ActionBtns>
              <ArrowButton
                type={'next'}
                onClick={() => setCurrent(current - 1)}
                disabled={current === 1}
              />
              <ArrowButton
                type={'prev'}
                onClick={() => setCurrent(current + 1)}
                disabled={current === DATA.points.length}
              />
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
                {currentPoints
                  .sort((a, b) => a.year - b.year)
                  .map((item, index) => (
                    <SwiperSlide>
                      <Card title={item.year} description={item.description} />
                    </SwiperSlide>
                  ))}
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
