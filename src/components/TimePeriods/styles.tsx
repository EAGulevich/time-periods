import styled from 'styled-components';

export const TimePeriodsWrapper = styled.div`
  border: 2px solid red;
  //border: 1px solid #e2e5ec;
  ////padding: 80px;
  //position: relative;
  //min-height: 1080px;
  ////min-height: 800px;
  //background: #f4f5f9;;
`;

export const VericalDecorationLine = styled.div`
  position: absolute;
  height: 100%;
  width: 1px;
  background: #e2e5ec;
  top: 0;
  left: 50%;
`;

export const HorizontalDecorationLine = styled.div`
  position: absolute;
  width: 100%;
  height: 1px;
  background: #e2e5ec;

  top: 50%;
  left: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10%;
`;

export const Dates = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
  gap: 100px;
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

  &:before {
    content: '';
    display: block;
    //height: 100%;
    height: 100px;
    margin-right: 78px;
    width: 4px;

    background: linear-gradient(to bottom, #3877ee, #ef5da8);
  }
`;
