import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;
  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    background-color: #f7f7f7;
    border: 0;
    font-size: 18px;
    border-radius: 3px;
  }

  button {
    height: 55px;
    padding: 0 20px;
    background-color: #63f5b0;
    margin-left: 10px;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;
    border: none;
    box-shadow: 1px 1px 3px #35353590;
    &:hover {
      background-color: #52d89f;
    }
  }
`;
