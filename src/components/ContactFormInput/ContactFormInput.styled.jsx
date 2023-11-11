import styled from '@emotion/styled';
import { Field } from 'formik';

export const FieldStyled = styled(Field)`
  text-align: center;
  width: 85%;
  padding: 5px 20px;
  border-radius: 2px;
  height: 40px;
  background-color: ${({ theme }) => theme.rootColors.lightPartsColor};
  border: none;
  outline: none;
  margin: 0 auto;

  font-size: 16px;
  color: ${({ theme }) => theme.rootColors.darkFont};

  @media (max-width: 768px) {
    width: 80%;
    font-size: 16px;
    height: 35px;
    padding: 2px 10px;
  }
`;

export const LabelStyled = styled.label`
  margin-top: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  @media (max-width: 768px) {
    margin-left: 8%;
    width: 80%;
    font-size: 16px;
  }
`;
