import styled from '@emotion/styled';
export const TodoFilterInput = styled.input`
  display: flex;
  font-size: 18px;
  font-weight: 500;
  background-color: lightgoldenrodyellow;
  color: rgb(114, 76, 9);
  border: none;
  outline: none;
  width: 95%;
  max-width: 480px;
  height: 40px;
  border-radius: 4px;
  margin: 0 auto;
  opacity: 0.7;
  text-align: center;

  ::placeholder {
    text-align: center;
    color: darkred;
    padding: 5px 20px;
  }
  @media (max-width: 768px) {
    width: 90%;
    font-size: 14px;
  }
`;
export const Label = styled.label`
  background-color: rgb(245, 187, 86);
  width: 58%;
  margin: 0 auto;
  margin-bottom: 10px;
  padding: 5px 20px;
  border-radius: 2px;
  display: flex;

  @media (max-width: 768px) {
    width: 85%;
    font-size: 14px;
    padding: 4px 8px;
  }
`;
