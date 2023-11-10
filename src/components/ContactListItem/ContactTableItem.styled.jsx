import styled from '@emotion/styled';

export const Button = styled.button`
  background-color: rgb(215, 159, 63);
  color: lightgoldenrodyellow;
  border: none;
  padding: 6px 12px;
  border-radius: 2px;
  cursor: pointer;
  transition: all 300ms ease-in-out;

  display: flex;
  align-items: center;

  :hover {
    background-color: rgb(190, 142, 60);
    color: rgb(252, 252, 245);
  }
`;

export const TableRow = styled.tr`
  border-bottom: 2px solid rgb(245, 209, 147);
  width: 100%;
`;

export const TableCell = styled.td`
  padding: 5px;
  text-align: center;
  background-color: lightgoldenrodyellow;
  min-width: 16px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const ModalButton = styled.button`
  font-size: 18px;
  background-color: rgb(215, 159, 63);
  color: lightgoldenrodyellow;
  border: none;
  padding: 20px 40px;
  border-radius: 2px;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  margin: 0 auto;

  :hover {
    background-color: rgb(190, 142, 60);
    color: rgb(252, 252, 245);
  }
  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

export const ModalButtonDelete = styled.button`
  font-size: 18px;
  background-color: rgba(140, 3, 3, 0.4);
  color: lightgoldenrodyellow;
  border: none;
  padding: 20px 40px;
  border-radius: 2px;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  margin: 0 auto;

  :hover {
    background-color: rgba(140, 3, 3, 0.85);
    color: rgb(252, 252, 245);
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
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
`;

export const H2 = styled.h2`
  font-size: 26px;
  color: rgb(114, 76, 9);
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
