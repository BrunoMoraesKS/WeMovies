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
