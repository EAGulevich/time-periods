import styled from 'styled-components';

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

//////////////////////////////////////////

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Dates = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Year = styled.div<{ color?: 'primary' | 'secondary' }>`
  color: ${({ color }) => (color === 'secondary' ? '#EF5DA8' : '#5D5FEF')};
  font-weight: bold;
  line-height: 200px;
  font-size: 200px;
`;

export const Title = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 56px;
  line-height: 56px;
  max-width: 50%;
  color: #42567a;
  align-items: center;
  position: relative;

  top: calc(50% - 176px);
  transform: translateY(-100%);

  &:before {
    position: absolute;
    content: '';
    display: block;
    top: 0;
    bottom: 0;
    width: 5px;

    background: linear-gradient(to bottom, #3877ee, #ef5da8);
  }
`;
