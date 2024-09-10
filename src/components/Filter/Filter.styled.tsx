import styled from "styled-components";
import { MdOutlineClear } from "react-icons/md";

export const FormWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const FormInput = styled.input`
  width: 90%;
  padding-right: 8px;
  padding-left: 8px;
  border: none;
  border-radius: 8px;
  padding: 4px;
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
