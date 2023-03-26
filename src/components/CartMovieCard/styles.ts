import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  border-radius: 4px;
  background-color: ${({ theme }) => theme.palette.white};
  font-weight: 700;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  border: 1px solid red;
`;

export const TitleAndPriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
`;

export const MovieImage = styled.img`
  width: 64px;
  height: 82px;
`;

export const MovieTitle = styled.h3`
  font-size: 1rem;
`;

export const MoviePrice = styled.span`
  color: ${({ theme }) => theme.palette.black};

  font-size: 1.25rem;
`;
