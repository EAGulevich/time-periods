import styled, { css } from 'styled-components';

export const CardTitle = styled.div`
  font-size: 25px;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.blue};
`;

export const CardContent = styled.div`
  color: ${({ theme }) => theme.colors.blackBlue};
  font-size: 20px;
  line-height: 30px;
  height: 90px;
  max-height: 90px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;

export const CardWrapper = styled.div<{ size: 'default' | 'small' }>`
  display: flex;
  flex-direction: column;
  gap: 15px;

  ${({ size }) =>
    size === 'small' &&
    css`
      ${CardTitle} {
        font-size: 16px;
      }

      ${CardContent} {
        font-size: 14px;
        line-height: 140%;
        max-height: 80px;
        
        -webkit-line-clamp: 4;
      }
    `}
`;
