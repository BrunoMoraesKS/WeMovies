import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 310px;
  padding: 12px;

  border-radius: 4px;
  background-color: ${({ theme }) => theme.palette.white};
  font-weight: 700;
`;

export const MovieImage = styled.img`
  width: 147px;
  height: 188px;
`;

export const MovieTitle = styled.h3`
  font-size: 1rem;
`;

export const MoviePrice = styled.span`
  color: ${({ theme }) => theme.palette.black};

  font-size: 1.25rem;
`;

export const ButtonIconContainer = styled.div`
  display: flex;
  gap: 4px;
`;

export const ButtonIcon = styled.img`
  position: relative;
  top: 2px;

  width: 14px;
`;

export const ButtonSpan = styled.span`
  font-size: 1rem;

  font-weight: 400;
`;
