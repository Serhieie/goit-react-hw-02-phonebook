import styled from '@emotion/styled';
import { TbUserSearch } from 'react-icons/tb';

export const ContactListDiv = styled.div`
  width: 65%;

  padding: 20px 15px 20px;
  border-radius: 2px;
  box-shadow: 1px 1px 10px rgb(173, 124, 39);
  min-height: 562px;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  background-image: linear-gradient(
    45deg,
    rgb(241, 226, 199),
    rgb(245, 209, 147)
  );

  position: relative;

  @media (max-width: 768px) {
    margin-top: 20px;
    padding: 30px 20px;
    width: 86%;
  }
`;

export const Table = styled.table`
  border: 2px solid rgb(245, 209, 147);
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
  background-color: rgb(245, 209, 147);
  color: rgb(114, 76, 9);
  font-weight: bold;
  min-width: 16px;
  padding: 8px;

  @media (max-width: 375px) {
    font-size: 12px;
    padding: 2px;
  }
`;
export const TableRow = styled.tr`
  border-bottom: 2px solid rgb(245, 209, 147);
`;

export const Icon = styled(TbUserSearch)`
  position: absolute;
  width: 25px;
  height: 25px;
  top: 5%;
  left: 27%;
  color: darkred;
  opacity: 0.4;
  z-index: 1;

  @media (max-width: 768px) {
    width: 22px;
    height: 22px;
    top: 6.5%;
    left: 18%;
  }

  @media (min-width: 768px) and (max-width: 975px) {
    max-width: 400px;
    top: 5%;
    left: 24%;
  }
`;
