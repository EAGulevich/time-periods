import styled from 'styled-components';
import AnimatedNumber from '../components/AnimatedNumber/AnimatedNumber';
import { RoundButton } from '../components/RoundButton/RoundButton';
import { RotarySwitch } from '../components/RotarySwitch/RotarySwitch';

const CIRCLE_CENTER_Y = 480;

export const SWIPER_DISABLED_BUTTON_CLASS = 'swiper-btn-disabled';
export const SWIPER_NEXT_BUTTON_CLASS = 'swiper-btn-next';
export const SWIPER_PREV_BUTTON_CLASS = 'swiper-btn-prev';

export const SWIPER_PAGINATION_CLASS = 'swiper-pagination';
export const SWIPER_PAGINATION_BULLET_CLASS = 'swiper-pagination-bullet';

export const TimePeriodsWrapper = styled.div`
  border-left: 1px solid ${props => props.theme.colors.blackBlue10};
  border-right: 1px solid ${props => props.theme.colors.blackBlue10};
  background: ${props => props.theme.colors.white};
  position: relative;

  max-width: ${props => props.theme.breakpoints.xl}px;
  min-width: ${props => props.theme.breakpoints.xl}px;
  min-height: 1080px;

  @media (max-width: ${props => props.theme.breakpoints.xl - 1}px) {
    min-width: 320px;
    width: 100vw;
    max-width: 575px;
    min-height: unset;
    height: 100vh;
  }
`;

export const VerticalDecorationLine = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 50%;

  height: 100%;
  width: 1px;
  background: ${props => props.theme.colors.blackBlue10};

  @media (max-width: ${props => props.theme.breakpoints.xl - 1}px) {
    display: none;
  }
`;

export const HorizontalDecorationLine = styled.div`
  position: absolute;
  z-index: 1;
  top: ${CIRCLE_CENTER_Y}px;
  left: 0;

  width: 100%;
  height: 1px;
  background: ${props => props.theme.colors.blackBlue10};

  @media (max-width: ${props => props.theme.breakpoints.xl - 1}px) {
    display: none;
  }
`;

export const CircleContainer = styled.div`
  position: absolute;
  z-index: 2;
  top: ${CIRCLE_CENTER_Y}px;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: ${props => props.theme.breakpoints.xl - 1}px) {
    position: relative;
    transform: none;
    top: 0;
    left: 0;
  }
`;

export const StyledRotarySwitch = styled(RotarySwitch)`
  @media (max-width: ${props => props.theme.breakpoints.xl - 1}px) {
    display: none;
  }
`;

export const Dates = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  gap: 100px;
  margin: 0 auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: ${props => props.theme.breakpoints.xl - 1}px) {
    position: relative;
    top: 0;
    left: 0;
    transform: none;
    display: flex;
    justify-content: center;
    gap: 20px;
    padding-bottom: 70px;
    border-bottom: 2px solid ${props => props.theme.colors.blackBlue50};
  }
`;

export const Year = styled(AnimatedNumber)<{ type?: 'primary' | 'secondary' }>`
  color: ${({ type, theme }) =>
    type === 'secondary' ? theme.colors.secondary : theme.colors.primary};
  font-weight: bold;
  line-height: 200px;
  font-size: 200px;

  @media (max-width: ${props => props.theme.breakpoints.xl - 1}px) {
    font-size: 56px;
    line-height: 56px;
  }
`;

const CONTENT_LEFT_PADDING = 80;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 100px ${CONTENT_LEFT_PADDING}px;

  @media (max-width: ${props => props.theme.breakpoints.xl - 1}px) {
    padding: 60px 20px 20px;
  }
`;

export const Title = styled.div`
  white-space: pre;
  position: relative;
  font-weight: bold;
  font-size: 56px;
  line-height: 120%;
  max-width: 50%;
  color: ${({ theme }) => theme.colors.blackBlue};
  margin-bottom: auto;

  &:before {
    position: absolute;
    content: '';
    display: block;
    top: 0;
    bottom: 0;
    width: 5px;
    left: -${CONTENT_LEFT_PADDING + 1}px;

    background: linear-gradient(
      to bottom,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.secondary}
    );
  }

  @media (max-width: ${props => props.theme.breakpoints.xl - 1}px) {
    max-width: 100%;
    font-size: 20px;
    margin-bottom: 56px;

    &:before {
      display: none;
    }
  }
`;

export const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 70px;
  position: relative;

  .${SWIPER_PAGINATION_BULLET_CLASS}-active {
    background: ${({ theme }) => theme.colors.blackBlue};
  }
`;

export const StepsWrapper = styled.div`
  @media (max-width: ${props => props.theme.breakpoints.xl - 1}px) {
    gap: 10px;
    order: 3;
    bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100%);
    margin-top: auto;
    padding-bottom: 20px;
    svg {
      zoom: 0.6;
    }
  }
`;

export const Steps = styled.div`
  color: ${({ theme }) => theme.colors.blackBlue};
  font-size: 14px;
  @media (max-width: ${props => props.theme.breakpoints.xl - 1}px) {
    order: 2;
  }
`;

export const StepActions = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  @media (max-width: ${props => props.theme.breakpoints.xl - 1}px) {
    gap: 10px;
    order: 3;

    svg {
      zoom: 0.6;
    }
  }
`;

export const Cards = styled.div`
  margin-top: 56px;
  position: relative;
  overflow: visible;

  @media (max-width: ${props => props.theme.breakpoints.xl - 1}px) {
    order: 1;
    padding-bottom: 80px;

    .swiper-slide-next,
    .swiper-slide-prev {
      opacity: 0.4;
    }
  }
`;

const SwiperNavigationButton = styled(RoundButton).attrs({
  size: 'md',
  variant: 'float',
})`
  z-index: 10;

  &.${SWIPER_DISABLED_BUTTON_CLASS} {
    display: none;
  }

  @media (max-width: ${props => props.theme.breakpoints.xl - 1}px) {
    display: none;
  }
`;

export const SwiperPrevBtn = styled(SwiperNavigationButton)`
  position: absolute;
  top: 50%;
  left: -40px;
  transform: translateX(-50%);
`;

export const SwiperNextBtn = styled(SwiperNavigationButton)`
  position: absolute;
  top: 50%;
  right: -40px;
  transform: translateX(50%);
`;
