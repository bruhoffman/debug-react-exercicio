import styled from "styled-components";

export const MessageFormContainer = styled.form`
  display: flex;
  justify-content: space-between;
  margin: 30px;
  height: 5vh;
`;

export const UserSelect = styled.select`
  width: 20%;
  padding: 5px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
`;

export const TextInput = styled.input`
  flex: 1;
  margin: 0 10px;
  padding: 8px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
`;

export const SendButton = styled.button`
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
`;
