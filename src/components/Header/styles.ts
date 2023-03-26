import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 68px;

  padding: 0 12px;
`;

export const Logo = styled.img`
  cursor: pointer;
`;

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const CartSpan = styled.span`
  font-weight: 600;
`;

export const CartIcon = styled.img`
  cursor: pointer;
`;
