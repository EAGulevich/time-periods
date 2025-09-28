import styled from 'styled-components';
import AnimatedNumber from '../components/AnimatedNumber/AnimatedNumber';
import { RoundButton } from '../components/RoundButton/RoundButton';

const CIRCLE_CENTER_Y = 480;

export const TimePeriodsWrapper = styled.div`
  border-left: 1px solid ${props => props.theme.colors.blackBlue10};
  border-right: 1px solid ${props => props.theme.colors.blackBlue10};
  position: relative;

  max-width: 1440px;
  max-height: 1080px;
`;

export const VerticalDecorationLine = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 50%;

  height: 100%;
  width: 1px;
  background: ${props => props.theme.colors.blackBlue10};
`;

export const HorizontalDecorationLine = styled.div`
  position: absolute;
  z-index: 1;
  top: ${CIRCLE_CENTER_Y}px;
  left: 0;

  width: 100%;
  height: 1px;
  background: ${props => props.theme.colors.blackBlue10};
`;

export const CircleContainer = styled.div`
  position: absolute;
  z-index: 2;
  top: ${CIRCLE_CENTER_Y}px;
  left: 50%;
  transform: translate(-50%, -50%);
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
`;

export const Year = styled(AnimatedNumber)<{ type?: 'primary' | 'secondary' }>`
  color: ${({ type, theme }) =>
    type === 'secondary' ? theme.colors.secondary : theme.colors.primary};
  font-weight: bold;
  line-height: 200px;
  font-size: 200px;
`;

const CONTENT_LEFT_PADDING = 80;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 170px ${CONTENT_LEFT_PADDING}px 104px;
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
`;

export const Steps = styled.div`
  color: ${({ theme }) => theme.colors.blackBlue};
  font-size: 14px;
`;

export const StepActions = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

export const Cards = styled.div`
  margin-top: 56px;
  position: relative;
  overflow: visible;
`;

export const DISABLED_SWIPER_BUTTON_CLASS = 'swiper-btn-disabled';
export const NEXT_SWIPER_BUTTON_CLASS = 'swiper-btn-next';
export const PREV_SWIPER_BUTTON_CLASS = 'swiper-btn-prev';

const SwiperNavigationButton = styled(RoundButton).attrs({
  size: 'md',
  variant: 'float',
})`
  z-index: 10;

  &.${DISABLED_SWIPER_BUTTON_CLASS} {
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
