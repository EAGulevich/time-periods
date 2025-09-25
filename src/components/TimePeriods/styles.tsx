import styled from 'styled-components';
import AnimatedNumber from '../AnimatedNumber/AnimatedNumber';

const CIRCLE_CENTER_Y = 480;

export const TimePeriodsWrapper = styled.div`
  border-left: 1px solid ${props => props.theme.colors.blackBlue10};
  border-right: 1px solid ${props => props.theme.colors.blackBlue10};
  position: relative;

  // TODO: min-width
  min-width: 1440px;
  max-width: 1440px;
  height: 1080px;
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

const CONTENT_LEFT_PADDING = 80;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 170px ${CONTENT_LEFT_PADDING}px 104px;
`;

export const Title = styled.div`
  position: relative;
  font-weight: bold;
  font-size: 56px;
  line-height: 120%;
  max-width: 50%;
  color: ${({ theme }) => theme.colors.blackBlue};

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

export const Dates = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  gap: 100px;
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
