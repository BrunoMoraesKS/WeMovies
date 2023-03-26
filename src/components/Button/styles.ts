import styled from 'styled-components';

interface IButtonProps {
  color: 'primary' | 'success';
  fullWidth: boolean;
  size: 'sm' | 'md' | 'lg';
}

export const Container = styled.button<IButtonProps>`
  color: ${({ theme }) => theme.palette.white};
  text-transform: uppercase;

  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};

  padding: ${({ size }) => {
    switch (size) {
      case 'sm':
        return '8px 16px';
      case 'md':
        return '11px 60px';
      case 'lg':
        return '16px 80px';
      default:
        return '12px 24px';
    }
  }};

  padding: ${({ fullWidth }) => (fullWidth ? '11px 0' : 'auto')};

  font-size: ${({ size }) => {
    switch (size) {
      case 'sm':
        return '0.7rem';
      case 'md':
        return '0.8rem';
      case 'lg':
        return '1rem';
      default:
        return '0.8rem';
    }
  }};

  font-weight: 700;
  letter-spacing: 1px;

  background-color: ${({ color, theme }) => {
    switch (color) {
      case 'primary':
        return theme.palette.primary;
      case 'success':
        return theme.palette.success;
      default:
        return theme.palette.primary;
    }
  }};

  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
