import styled, { css } from 'styled-components';

const CIRCLE_SIZE = 530;
const DOT_SIZE = 5;
const OPEN_DOT_SIZE = 56;

export const ItemText = styled.div``;

export const Item = styled.button<{
  itemIndex: number;
  isActive: boolean;
  size?: number;
  dotSize?: number;
  fontSize?: number;
}>`
  width: ${({ dotSize }) => dotSize || DOT_SIZE}px;
  height: ${({ dotSize }) => dotSize || DOT_SIZE}px;
  overflow: hidden;
  cursor: pointer;
  background: #42567a;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  color: transparent;
  font-size: ${({ fontSize }) => fontSize}px;
  line-height: 20px;
  border: 1px solid #303e58;
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
    width: ${({ size }) => size || OPEN_DOT_SIZE}px;
    height: ${({ size }) => size || OPEN_DOT_SIZE}px;
    background-color: #f4f5f9;
    color: #42567a;
  }

  ${({ isActive, size }) => {
    return !isActive
      ? css``
      : css`
          width: ${size || OPEN_DOT_SIZE}px;
          height: ${size || OPEN_DOT_SIZE}px;
          background-color: #f4f5f9;
          color: #42567a;
        `;
  }}
`;

export const CircleDecorationLine = styled.div<{
  ANGLE: number;
  size?: number;
  length: number;
}>`
  position: relative;
  
  width: ${({ size }) => size || CIRCLE_SIZE}px;
  height: ${({ size }) => size || CIRCLE_SIZE}px;
  
  border: 1px solid #d0d5df;
  border-radius: 50%;

  ${({ ANGLE, size, length }) =>
    Array(length).fill('').map((_, index) => {
      const part = 360 / length;
      return css`
        ${Item}:nth-child( ${index + 1}) {
          transform: translate(-50%, -50%) rotate(${index * part + ANGLE}deg)
            translateY(-${(size || CIRCLE_SIZE) / 2}px);

          & > * {
            transform: rotate(${360 - index * part - ANGLE}deg);
          }
        }
      `;
    })}
`;
