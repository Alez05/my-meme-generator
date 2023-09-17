import styled from 'styled-components';

export const SInputContainer = styled.main`
  display: flex;
  position: absolute;
  margin-top: 50px;
  padding: 36px;
`;

export const SInputForm = styled.form`
  display: grid;
  grid-template: 40px 40px / 1fr 1fr;
  gap: 17px;
`;

export const SInput = styled.input`
  font-family: 'Karla', sans-serif;
  border-radius: 5px;
  border: 1px solid #d5d4d8;
  text-indent: 5px;
  width: 230px;
  height: 35px;
`;

export const SButton = styled.button`
  font-family: 'Karla', sans-serif;
  border-radius: 5px;
  background: linear-gradient(90deg, #711f8d 1.14%, #a818da 100%);
  border: 1px solid #ccc;
  grid-column: 1 / -1;
  border: none;
  cursor: pointer;
`;

export const SText = styled.h2`
  color: #fff;
  text-align: center;
  font-family: Karla;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -1.6px;
`;
