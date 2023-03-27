import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 68px;

  margin: auto;

  margin-top: -64px;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    margin-bottom: 16px;
  }
`;

export const Logo = styled.img`
  cursor: pointer;
`;

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  cursor: pointer;
`;

export const CartSpan = styled.span`
  font-weight: 600;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    font-size: 0.8rem;
  }
`;

export const CartIcon = styled.img`
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    width: 32px;
  }
`;

export const CartLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const CartLabel = styled.h3`
  display: none;
  cursor: pointer;

  font-size: 0.9rem;

  color: ${({ theme }) => theme.palette.white};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: flex;
  }
`;
