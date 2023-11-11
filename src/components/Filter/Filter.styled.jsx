import styled from '@emotion/styled';
export const TodoFilterInput = styled.input`
  display: flex;
  font-size: 18px;
  font-weight: 500;
  background-color: ${({ theme }) => theme.rootColors.lightPartsColor};
  color: ${({ theme }) => theme.rootColors.darkFont};
  border: none;
  outline: none;
  width: 95%;
  max-width: 480px;
  height: 40px;
  border-radius: 4px;
  margin: 0 auto;
  opacity: 0.7;
  text-align: center;
  padding: 2px 10px 2px 65px;

  ::placeholder {
    text-align: center;
    color: ${({ theme }) => theme.rootColors.filterPlaceholderColor};
    padding: 5px 20px;
  }
  @media (max-width: 768px) {
    width: 90%;
    font-size: 14px;
    padding-left: 60px;
  }
`;

export const Label = styled.label`
  background-color: ${({ theme }) => theme.rootColors.lightPartsColor};
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
