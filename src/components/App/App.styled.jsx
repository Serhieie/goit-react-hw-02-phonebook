import styled from '@emotion/styled';

export const AppWrapper = styled.div`
  display: flex;
  gap: 2%;
  justify-content: center;
  margin: 0 auto;
  margin-top: 50px;
  width: 80%;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 2px 2px 15px rgb(173, 124, 39);
  min-height: 562px;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  background-image: linear-gradient(45deg, wheat, rgb(245, 187, 86));

  font-size: 22px;
  color: rgb(114, 76, 9);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    font-size: 16px;
    padding: 25px 6px;
    width: 90%;
  }
`;
