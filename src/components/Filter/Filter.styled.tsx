import styled from "styled-components";
import { MdOutlineCleanHands } from "react-icons/md";

export const FormWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const FormInput = styled.input`
  width: 90%;
  padding-right: 8px;
  padding-left: 8px;
`;

export const Clear = styled.div`
  position: absolute;
  right: 10px;
  top: -3px;
  width: 25px;
  height: 25px;
  border-radius: 50px;

  background-color: green;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(MdOutlineCleanHands)`
  fill: yellow;
`;
