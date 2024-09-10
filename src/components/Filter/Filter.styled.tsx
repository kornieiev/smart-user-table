import styled from "styled-components";

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

export const CloseBtn = styled.div`
  position: absolute;
  right: 10px;
  top: 5px;
  width: 16px;
  height: 16px;
  background-color: green;
`;
