import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const CardTitle = styled.div`
  font-size: 25px;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.blue};
`;

export const CardContent = styled.div`
  width: 400px;
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
