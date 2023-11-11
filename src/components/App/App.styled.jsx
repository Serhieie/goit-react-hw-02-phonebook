import styled from '@emotion/styled';
import { TbUserSearch } from 'react-icons/tb';

export const AppWrapper = styled.div`
  display: flex;
  gap: 2%;
  justify-content: center;
  margin: 0 auto;
  margin-top: 50px;
  width: 80%;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 2px 2px 15px ${({ theme }) => theme.rootColors.shadowBox};
  min-height: 562px;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  background-image: linear-gradient(
    45deg,
    ${({ theme }) => theme.rootColors.gradientColor1},
    ${({ theme }) => theme.rootColors.gradientColor2}
  );

  font-size: 22px;
  color: ${({ theme }) => theme.rootColors.darkFont};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    font-size: 16px;
    padding: 25px 6px;
    width: 90%;
  }
`;

export const ContactListDiv = styled.div`
  width: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 20px 15px 20px;
  border-radius: 2px;
  box-shadow: 1px 1px 10px ${({ theme }) => theme.rootColors.shadowBox};
  min-height: 562px;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  background-image: linear-gradient(
    45deg,
    ${({ theme }) => theme.rootColors.smallWraperGradient1},
    ${({ theme }) => theme.rootColors.smallWraperGradient2}
  );

  position: relative;

  @media (max-width: 768px) {
    margin-top: 20px;
    padding: 30px 20px;
    width: 86%;
  }
`;

export const Icon = styled(TbUserSearch)`
  position: absolute;
  width: 25px;
  height: 25px;
  top: 5%;
  left: 27%;
  color: ${({ theme }) => theme.rootColors.filterPlaceholderColor};
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
