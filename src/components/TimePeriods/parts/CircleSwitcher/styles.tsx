import styled, { css } from 'styled-components';

// const CIRCLE_SIZE = 530;
const CIRCLE_SIZE = 300;

export const ItemText = styled.div``;

export const Item = styled.button<{ itemIndex: number; isActive: boolean }>`
  width: 6px;
  height: 6px;
  overflow: hidden;
  cursor: pointer;
  background: #42567a;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  color: transparent;
  font-size: 20px;
  line-height: 20px;
  border: 1px solid #303e58;
  font-family: Arial, sans-serif;
  font-weight: bold;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    width 0.4s ease,
    height 0.4s ease,
    background 0.4s ease,
    color 0.4s ease,
    transform 0.8s ease;
  &:hover {
    width: 50px;
    height: 50px;
    background-color: #f4f5f9;
    color: #42567a;
  }

  ${({ isActive }) => {
    return !isActive
      ? css``
      : css`
          width: 50px;
          height: 50px;
          background-color: #f4f5f9;
          color: #42567a;
        `;
  }}
`;

export const CircleDecorationLine = styled.div<{ ANGLE: number }>`
  position: absolute;
  width: ${CIRCLE_SIZE}px;
  height: ${CIRCLE_SIZE}px;
  border: 1px solid #42567a;
  border-radius: 50%;
  transform: translate(-50%, -50%);

  top: 50%;
  left: 50%;

  //TODO: избавиться от дублирования
  ${Item}:nth-child(1) {
    transform: translate(-50%, -50%) rotate(${({ ANGLE }) => 0 + ANGLE}deg)
      translateY(-${CIRCLE_SIZE / 2}px);

    & > * {
      transform: rotate(${({ ANGLE }) => 360 - ANGLE}deg);
    }
  }
  ${Item}:nth-child(2) {
    transform: translate(-50%, -50%) rotate(${({ ANGLE }) => 60 + ANGLE}deg)
      translateY(-${CIRCLE_SIZE / 2}px);
    & > * {
      transform: rotate(${({ ANGLE }) => 300 - ANGLE}deg);
    }
  }
  ${Item}:nth-child(3) {
    transform: translate(-50%, -50%) rotate(${({ ANGLE }) => 120 + ANGLE}deg)
      translateY(-${CIRCLE_SIZE / 2}px);

    & > * {
      transform: rotate(${({ ANGLE }) => 240 - ANGLE}deg);
    }
  }
  ${Item}:nth-child(4) {
    transform: translate(-50%, -50%) rotate(${({ ANGLE }) => 180 + ANGLE}deg)
      translateY(-${CIRCLE_SIZE / 2}px);
    & > * {
      transform: rotate(${({ ANGLE }) => 180 - ANGLE}deg);
    }
  }
  ${Item}:nth-child(5) {
    transform: translate(-50%, -50%) rotate(${({ ANGLE }) => 240 + ANGLE}deg)
      translateY(-${CIRCLE_SIZE / 2}px);
    & > * {
      transform: rotate(${({ ANGLE }) => 120 - ANGLE}deg);
    }
  }
  ${Item}:nth-child(6) {
    transform: translate(-50%, -50%) rotate(${({ ANGLE }) => 300 + ANGLE}deg)
      translateY(-${CIRCLE_SIZE / 2}px);

    & > * {
      transform: rotate(${({ ANGLE }) => 60 - ANGLE}deg);
    }
  }
`;
