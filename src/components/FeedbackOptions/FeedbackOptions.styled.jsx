import styled from '@emotion/styled';

export const Buttons = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
`;

export const ButtonsItem = styled.li`
  &:not(:last-child) {
    margin-right: 40px;
    /* width: 100px;     */
  }
`;

export const Button = styled.button`
  display: block;
  width: 100px;
  font-family: 'Times New Roman', Times, serif;
  font-weight: 500;
  font-size: 25px;
  text-align: center;
  cursor: pointer;
`;
