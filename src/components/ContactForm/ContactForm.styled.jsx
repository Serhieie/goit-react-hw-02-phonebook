import styled from '@emotion/styled';
import { Form } from 'formik';
import { ErrorMessage } from 'formik';

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 30%;
  padding: 80px 30px 20px;
  border-radius: 2px;
  box-shadow: 1px 1px 10px rgb(173, 124, 39);
  min-height: 562px;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  background-image: linear-gradient(
    45deg,
    ${({ theme }) => theme.rootColors.smallWraperGradient1},
    ${({ theme }) => theme.rootColors.smallWraperGradient2}
  );

  @media (max-width: 768px) {
    padding: 30px 20px;
    width: 90%;
    min-height: 0px;
  }
`;

export const ButtonStyled = styled.button`
  text-align: center;
  width: 160px;
  height: 45px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.rootColors.buttonColor};
  border: none;
  outline: none;
  margin: 0 auto;
  margin-top: 20px;
  cursor: pointer;
  box-shadow: 1px 1px 5px ${({ theme }) => theme.rootColors.shadowBox};

  display: flex;
  align-items: center;
  justify-content: space-around;

  transition: all 300ms ease-in-out;

  font-size: 18px;
  color: ${({ theme }) => theme.rootColors.buttonTextColor};

  :hover {
    background-color: ${({ theme }) => theme.rootColors.buttonHoverColor};
  }

  @media (max-width: 768px) {
    width: 160px;
    height: 45px;
    margin-top: 15px;
    font-size: 18px;
  }
`;

export const H1 = styled.h1`
  text-align: center;
  font-size: 34px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (min-width: 768px) and (max-width: 964px) {
    font-size: 28px;
  }
`;

export const ErrMsg = styled(ErrorMessage)`
  font-size: 20px;
  color: ${({ theme }) => theme.rootColors.errorMsg};
  margin: 0;
  padding: 0;
  text-align: center;

  @media (max-width: 768px) {
    width: 80%;
    font-size: 16px;
  }
`;

export const ErrorContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90px;
  margin-top: 10px;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 16px;
    height: 30px;
  }
`;
