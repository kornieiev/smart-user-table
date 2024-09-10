import styled from "styled-components";
import { MdOutlineClear } from "react-icons/md";

export const FormWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const FormInput = styled.input`
  width: 85%;
  padding: 6px 12px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  margin: 12px 6px 6px 0;
  gap: 10px;
`;

export const Clear = styled.div`
  display: block;
  position: absolute;
  right: 0px;
  top: 0px;
  width: 18px;
  height: 18px;
  border-radius: 50px;
  border: 1px solid white;

  background-color: red;

  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: white;
    border-color: red;
    transition: background-color 250ms linear 250ms,
      border-color 250ms linear 250ms;
    svg {
      fill: red;
      transition: fill 250ms linear 250ms;
    }
  }
`;

export const Icon = styled(MdOutlineClear)`
  fill: white;
`;
