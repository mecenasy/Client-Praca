import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid gray;
  border-radius: 6px;
  text-align: center;
`;

export const ValidationAlert = styled.div`
  height: 24px;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2px;
`;

export const Error = styled.span`
  color: red;
  text-align: center;
  font-size: 14px;
`;