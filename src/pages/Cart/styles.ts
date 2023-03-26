import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;

  background-color: ${({ theme }) => theme.palette.white};

  border-radius: 4px;
`;

export const EmptyCartContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 32px;

  width: 100%;
  padding: 64px;

  text-align: center;
`;

export const EmptyCartText = styled.h2``;

export const EmptyCartImage = styled.img``;

export const EmptyCartImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HorizontalLine = styled.div`
  width: 100vw;
  height: 1px;

  background-color: ${({ theme }) => theme.palette.black};
`;

export const CartProductsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;

  width: 100%;
  padding: 16px;
`;
