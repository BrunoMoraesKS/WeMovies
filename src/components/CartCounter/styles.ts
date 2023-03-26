import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  gap: 12px;

  width: 117px;
`;

export const Icon = styled.img`
  width: 18px;
  height: 18px;

  cursor: pointer;
`;

export const AmountInput = styled.input`
  width: 100%;
  padding: 2px 12px;

  font-size: 1rem;

  border: 1px solid ${({ theme }) => theme.palette.lightGray};
  border-radius: 4px;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.palette.primary};
  }
`;
