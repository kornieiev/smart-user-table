import styled from "styled-components";

export const MainTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Tr = styled.tr`
  background-color: #ffc973;

  &:nth-child(2n) {
    background-color: rgb(255 220 115 / 50%);
    color: wheat;
  }
`;

export const Th = styled.th`
  border-bottom: 2px solid #ffc973;
  border-top: 2px solid #ffc973;
  padding: 10px;
  text-align: left;
  background-color: transparent;
  color: #ffc973;
`;

export const Td = styled.td`
  border-top: 6px solid #213547;
  padding: 10px 30px;
  text-align: left;
  font-size: 14px;
`;
