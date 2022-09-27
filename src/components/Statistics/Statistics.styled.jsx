import styled from '@emotion/styled';

export const StatTitle = styled.h2`
  margin-bottom: 20px;
  font-family: 'Times New Roman', Times, serif;
  font-weight: 700;
  font-size: 40px;
  text-align: center;
`;

export const StatItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const StatList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StatData = styled.p`
  font-family: 'Times New Roman', Times, serif;
  font-weight: 500;
  font-size: 20px;
  text-align: center;
`;
