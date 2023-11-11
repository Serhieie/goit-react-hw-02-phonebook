import styled from '@emotion/styled';

export const Table = styled.table`
  border: 2px solid ${({ theme }) => theme.rootColors.tableBorderColor};
  border-collapse: collapse;
  margin: 0 auto;
  margin-top: 20px;
  display: block;
  overflow-y: auto;
  height: 550px;

  tbody {
    max-height: 475px;
    max-width: 100%;
  }

  @media (max-width: 375px) {
    font-size: 12px;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 500px;
  }

  @media (min-width: 768px) and (max-width: 975px) {
    max-width: 400px;
  }

  @media (min-width: 900px) and (max-width: 1265px) {
    width: 500px;
  }

  @media (min-width: 1265px) {
    width: 650px;
  }
`;

export const TableHeader = styled.th`
  text-align: center;
  background-color: ${({ theme }) => theme.rootColors.tableHeaderBackground};
  color: ${({ theme }) => theme.rootColors.darkFont};
  font-weight: bold;
  min-width: 16px;
  padding: 8px;

  @media (max-width: 375px) {
    font-size: 12px;
    padding: 2px;
  }
`;
export const TableRow = styled.tr`
  border-bottom: 2px solid ${({ theme }) => theme.rootColors.tableBorderColor};
`;
