import React from 'react';
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
  SWIPER_DISABLED_BUTTON_CLASS,
  SWIPER_NEXT_BUTTON_CLASS,
  SWIPER_PREV_BUTTON_CLASS,
  Steps,
  StepActions,
  StyledRotarySwitch,
  StepsWrapper,
  StyledPagination,
  SWIPER_PAGINATION_CLASS,
  SWIPER_PAGINATION_BULLET_CLASS,
} from './styles';
import { Card } from '../components/Card/Card';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, A11y } from 'swiper/modules';
import ArrowRight from '../assets/icons/ArrowRight.svg';
import ArrowLeft from '../assets/icons/ArrowLeft.svg';

import 'swiper/css';
import 'swiper/css/pagination';
import { DATA } from '../TEST_DATA';
import { RoundButton } from '../components/RoundButton/RoundButton';
import { useTimePeriods } from './useTimePeriods';
import {
  NavigationOptions,
  PaginationOptions,
  SwiperModule,
} from 'swiper/types';
import { useMediaQuery } from 'react-responsive';
import { breakpoints } from '../styles/theme';

const swiperModules: SwiperModule[] = [Navigation, Pagination, A11y];
const swiperNavigation: NavigationOptions = {
  prevEl: `.${SWIPER_PREV_BUTTON_CLASS}`,
  nextEl: `.${SWIPER_NEXT_BUTTON_CLASS}`,
  disabledClass: SWIPER_DISABLED_BUTTON_CLASS,
};
const swiperMobilePagination: PaginationOptions = {
  el: `.${SWIPER_PAGINATION_CLASS}`,
  clickable: true,
  bulletClass: SWIPER_PAGINATION_BULLET_CLASS,
};

export const TimePeriods: FC = () => {
  const {
    maxYear,
    minYear,
    currentPoint,
    currentCards,
    onTogglePoint,
    cardsRef,
  } = useTimePeriods();
  const isMobile = useMediaQuery({ maxWidth: breakpoints.xl - 1 });

  return (
    <TimePeriodsWrapper>
      <VerticalDecorationLine />
      <HorizontalDecorationLine />

      <Content>
        <Title>{DATA.title.replace(' ', '\n')}</Title>
        <CircleContainer>
          <Dates>
            <Year value={minYear} />
            <Year type={'secondary'} value={maxYear} />
          </Dates>
          <StyledRotarySwitch
            points={DATA.points.map(item => ({
              label: item.label,
              pointNumber: item.number,
            }))}
            currentPoint={currentPoint}
            onChange={newStep => {
              onTogglePoint(newStep.pointNumber);
            }}
          />
        </CircleContainer>
        <StepsWrapper>
          <div>
            <Steps>
              0{currentPoint}/0{DATA.points.length}
            </Steps>
            <StepActions>
              <RoundButton
                size={isMobile ? 'sm' : 'lg'}
                onClick={() => onTogglePoint(currentPoint - 1)}
                disabled={currentPoint === 1}
              >
                <ArrowLeft />
              </RoundButton>

              <RoundButton
                size={isMobile ? 'sm' : 'lg'}
                onClick={() => onTogglePoint(currentPoint + 1)}
                disabled={currentPoint === DATA.points.length}
              >
                <ArrowRight />
              </RoundButton>
            </StepActions>
          </div>

          {isMobile && <StyledPagination className={SWIPER_PAGINATION_CLASS} />}
        </StepsWrapper>
        <Cards ref={cardsRef}>
          <Swiper
            modules={swiperModules}
            navigation={swiperNavigation}
            pagination={isMobile ? swiperMobilePagination : undefined}
            spaceBetween={isMobile ? 25 : 40}
            slidesPerView={isMobile ? 1.4 : 3}
          >
            {currentCards.map(item => (
              <SwiperSlide>
                <Card
                  size={isMobile ? 'small' : 'default'}
                  title={item.year}
                  description={item.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <SwiperPrevBtn className={SWIPER_PREV_BUTTON_CLASS}>
            <ArrowLeft />
          </SwiperPrevBtn>
          <SwiperNextBtn className={SWIPER_NEXT_BUTTON_CLASS}>
            <ArrowRight />
          </SwiperNextBtn>
        </Cards>
      </Content>
    </TimePeriodsWrapper>
  );
};
