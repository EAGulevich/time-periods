import styled from 'styled-components';

export const TimePeriodsWrapper = styled.div`
  border: 1px solid #42567a;
  padding: 80px;
  position: relative;
  //min-height: 1080px;
  min-height: 500px;
`;

export const VericalDecorationLine = styled.div`
  position: absolute;
  height: 100%;
  width: 1px;
  background: #42567a;
  top: 0;
  left: 50%;
`;

export const HorizontalDecorationLine = styled.div`
  position: absolute;
  width: 100%;
  height: 1px;
  background: #42567a;

  top: 50%;
  left: 0;
`;
