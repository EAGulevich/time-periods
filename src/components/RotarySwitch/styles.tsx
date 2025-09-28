import styled, { css } from 'styled-components';

const CIRCLE_SIZE = 530;
const DOT_SIZE = 6;
const OPEN_DOT_SIZE = 56;

export const ItemText = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
export const ItemLabel = styled.div<{ isVisible: boolean }>`
  position: absolute;
  left: calc(100% + 20px);
  color: ${({ theme }) => theme.colors.blackBlue};
  font-size: 20px;
  line-height: 30px;
  font-weight: bold;

  ${({ isVisible }) =>
    isVisible
      ? css`
          opacity: 1;
          transition-duration: 0.3s;
          transition-delay: 0.5s;
          transition-property: opacity;
        `
      : css`
          opacity: 0;
          transition-property: opacity;
          transition-duration: 0s;
          transition-delay: 0s;
        `}
`;

const openDotStyles = css`
  width: ${OPEN_DOT_SIZE}px;
  height: ${OPEN_DOT_SIZE}px;
  background: ${({ theme }) => theme.colors.dotBackground};
  border-color: ${({ theme }) => theme.colors.dotBorder};
  color: ${({ theme }) => theme.colors.blackBlue};
`;

export const Item = styled.button<{
  pointIndex: number;
  isActive: boolean;
}>`
  position: absolute;
  top: 50%;
  left: 50%;

  width: ${DOT_SIZE}px;
  height: ${DOT_SIZE}px;
  font-size: 20px;
  line-height: 30px;

  background: ${({ theme }) => theme.colors.blackBlue};
  border: 1px solid transparent;
  border-radius: 50%;
  color: transparent;
  cursor: pointer;
  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    width 0.3s ease,
    height 0.3s ease,
    background 0.3s ease,
    color 0.3s ease 0.15s,
    transform 0.7s ease;

  &:hover {
    ${openDotStyles}
  }
  ${({ isActive }) => (!isActive ? '' : openDotStyles)}
`;

export const CircleDecorationLine = styled.div<{
  /** Градус смещения первого пункта */
  degreeOfDisplacement: number;
  /** Кол-во пунктов на окружности */
  pointsCount: number;
}>`
  position: relative;

  width: ${CIRCLE_SIZE}px;
  height: ${CIRCLE_SIZE}px;

  border: 1px solid ${({ theme }) => theme.colors.blackBlue20};
  border-radius: 50%;

  ${({ degreeOfDisplacement, pointsCount }) =>
    Array(pointsCount)
      .fill('')
      .map((_, index) => {
        const pointDisplacementAngle = 360 / pointsCount;
        return css`
          ${Item}:nth-child( ${index + 1}) {
            transform: translate(-50%, -50%)
              rotate(
                ${index * pointDisplacementAngle + degreeOfDisplacement}deg
              )
              translateY(-${CIRCLE_SIZE / 2}px);

            & > ${ItemText} {
              transform: rotate(
                ${360 -
                index * pointDisplacementAngle -
                degreeOfDisplacement}deg
              );
            }
          }
        `;
      })}
`;
