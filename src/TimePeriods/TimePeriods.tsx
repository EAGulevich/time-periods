import React, { useEffect, useRef, useState } from 'react';
import { FC } from 'react';
import {
  Cards,
  CircleContainer,
  Content,
  SwiperNextBtn,
  SwiperPrevBtn,
  Dates,
  HorizontalDecorationLine,
  TimePeriodsWrapper,
  Title,
  VerticalDecorationLine,
  Year,
  DISABLED_SWIPER_BUTTON_CLASS,
  NEXT_SWIPER_BUTTON_CLASS,
  PREV_SWIPER_BUTTON_CLASS,
  Steps,
  StepActions,
} from './styles';
import { RotarySwitch } from '../components/RotarySwitch/RotarySwitch';
import { Card } from '../components/Card/Card';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import ArrowRight from '../assets/icons/ArrowRight.svg';
import ArrowLeft from '../assets/icons/ArrowLeft.svg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { DATA } from '../consts';
import gsap from 'gsap';
import { RoundButton } from '../components/RoundButton/RoundButton';

// TODO: вынести длительность анимации в константу, сделать одновременное появление лейбла в круге и списка снизу

export const TimePeriods: FC = () => {
  const [current, setCurrent] = useState<number>(1);
  const cardsRef = useRef<HTMLDivElement | null>(null);
  const [isCardsVisible, setIsCardsVisible] = useState(false);

  const currentPoints = DATA.points.find(p => p.number === current)?.data || [];
  const maxYear = Math.max(...currentPoints.map(p => p.year));
  const minYear = Math.min(...currentPoints.map(p => p.year));

  useEffect(() => {
    // Показать элемент при изменении isVisible
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: 'power2.in' }
    );
  }, [isCardsVisible]);

  const onTogglePoint = (current: number) => {
    gsap.to(cardsRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.out',
      onComplete: () => {
        setIsCardsVisible(!isCardsVisible);
      },
    });
    setTimeout(() => {
      setCurrent(current);
    }, 300);
  };

  return (
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
          onChange={newStep => {
            onTogglePoint(newStep.pointNumber);
          }}
        />
      </CircleContainer>
      <Content>
        <Title>{DATA.title.replace(' ', '\n')}</Title>
        <Steps>
          0{current}/0{DATA.points.length}
        </Steps>
        <StepActions>
          <RoundButton
            size={'lg'}
            onClick={() => onTogglePoint(current - 1)}
            disabled={current === 1}
          >
            <ArrowLeft />
          </RoundButton>

          <RoundButton
            size={'lg'}
            onClick={() => onTogglePoint(current + 1)}
            disabled={current === DATA.points.length}
          >
            <ArrowRight />
          </RoundButton>
        </StepActions>

        <Cards ref={cardsRef}>
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            navigation={{
              prevEl: `.${PREV_SWIPER_BUTTON_CLASS}`,
              nextEl: `.${NEXT_SWIPER_BUTTON_CLASS}`,
              disabledClass: DISABLED_SWIPER_BUTTON_CLASS,
            }}
            // pagination={{ clickable: true }}
            spaceBetween={40}
            slidesPerView={3}
          >
            {currentPoints
              .sort((a, b) => a.year - b.year)
              .map(item => (
                <SwiperSlide>
                  <Card title={item.year} description={item.description} />
                </SwiperSlide>
              ))}
          </Swiper>

          <SwiperPrevBtn className={PREV_SWIPER_BUTTON_CLASS}>
            <ArrowLeft />
          </SwiperPrevBtn>
          <SwiperNextBtn className={NEXT_SWIPER_BUTTON_CLASS}>
            <ArrowRight />
          </SwiperNextBtn>
        </Cards>
      </Content>
    </TimePeriodsWrapper>
  );
};
