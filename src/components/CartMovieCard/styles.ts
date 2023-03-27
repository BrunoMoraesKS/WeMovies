import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  border-radius: 4px;
  background-color: ${({ theme }) => theme.palette.white};
  font-weight: 700;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    justify-content: flex-start;

    :nth-child(n) {
      margin: 8px 0;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  min-height: 82px;

  margin-left: 16px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;

export const TrashBin = styled.img`
  display: flex;
  align-self: center;
  justify-self: flex-end;
  cursor: pointer;

  min-height: 18px;
`;

export const MovieImage = styled.img`
  width: 64px;
  height: 82px;
`;

export const MovieTitle = styled.h3`
  font-size: 0.9rem;

  white-space: nowrap;
`;

export const MoviePrice = styled.span`
  margin-left: 20px;
  margin-right: 16px;

  color: ${({ theme }) => theme.palette.black};

  font-size: 1.05rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin: 0;
  }
`;

export const SubtotalPrice = styled.span`
  color: ${({ theme }) => theme.palette.black};

  font-size: 1rem;
`;

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const SubtotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const LabelSpan = styled.span`
  color: ${({ theme }) => theme.palette.gray};
  text-transform: uppercase;

  font-size: 0.85rem;
`;

export const MovieAndTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;
`;

export const Column = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;

    :nth-child(n) {
      margin-right: 16px;
    }
    :nth-child(1) {
      width: 50%;
    }
    :nth-child(2) {
      width: 20%;
      height: 90px;
    }
    :nth-child(3) {
      width: 25%;
      height: 90px;
    }
    :nth-child(4) {
      justify-content: flex-end;

      height: 90px;

      position: relative;
      left: 16px;
      margin-left: auto;
    }
  }
`;
