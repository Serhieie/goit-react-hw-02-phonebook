import styled from '@emotion/styled';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.rootColors.buttonColor};
  color: ${({ theme }) => theme.rootColors.lightPartsColor};
  border: none;
  padding: 6px 12px;
  border-radius: 2px;
  cursor: pointer;
  transition: all 300ms ease-in-out;

  display: flex;
  align-items: center;

  :hover {
    background-color: ${({ theme }) => theme.rootColors.buttonHoverColor};
  }
`;

export const TableRow = styled.tr`
  border-bottom: 2px solid ${({ theme }) => theme.rootColors.tableBorderColor};
  width: 100%;
`;

export const TableCell = styled.td`
  padding: 5px;
  text-align: center;
  background-color: ${({ theme }) => theme.rootColors.lightPartsColor};
  min-width: 16px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const ModalBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 40px;
  width: 400px;

  @media (max-width: 768px) {
    width: 250px;
    margin-top: 25px;
    gap: 5px;
  }

  > button {
    font-size: 18px;
    background-color: ${({ theme }) => theme.rootColors.buttonColor};
    color: ${({ theme }) => theme.rootColors.lightPartsColor};
    border: none;
    padding: 20px 40px;
    border-radius: 2px;
    cursor: pointer;
    transition: all 300ms ease-in-out;
    margin: 0 auto;

    :first-child {
      background-color: ${({ theme }) => theme.rootColors.deleteBtnColor};
      color: ${({ theme }) => theme.rootColors.lightPartsColor};
    }
    :first-child:hover {
      background-color: ${({ theme }) => theme.rootColors.deleteBtnHoverColor};
    }

    :hover {
      background-color: ${({ theme }) => theme.rootColors.buttonHoverColor};
    }
    @media (max-width: 768px) {
      padding: 10px 20px;
    }
  }
`;

export const H2 = styled.h2`
  font-size: 26px;
  color: ${({ theme }) => theme.rootColors.darkFont};
  text-align: center;
  width: 400px;
  margin: 0 auto;
  margin-top: 20px;

  @media (max-width: 768px) {
    width: 200px;
    font-size: 20px;
    margin-top: 10px;
  }
`;
