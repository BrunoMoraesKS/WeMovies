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

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    width: 280%;
  }
`;

export const CartProductsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;

  width: 100%;
  height: 100%;
  min-height: calc(100vh - 211px);
  padding: 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    min-height: auto;
  }
`;

export const SeparatorLine = styled.div`
  width: 100%;
  height: 1px;

  margin-bottom: 4px;

  background-color: ${({ theme }) => theme.palette.black};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    width: 97%;

    margin: 16px auto;
  }
`;

export const FinishPurchaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 100%;
  padding: 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    flex-direction: row-reverse;
  }
`;

export const TotalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 24px;

  width: 100%;
  padding: 0 16px;

  font-weight: 700;
`;

export const LabelSpan = styled.span`
  color: ${({ theme }) => theme.palette.gray};
  text-transform: uppercase;

  font-size: 1.05rem;
`;

export const TotalPrice = styled.span`
  color: ${({ theme }) => theme.palette.black};

  font-size: 1.65rem;
`;
