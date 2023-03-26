import React from 'react';
import * as S from './styles';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  color?: 'primary' | 'success';
  icon?: React.ReactNode;
  fullWidth?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Button = ({
  label,
  color = 'primary',
  icon,
  fullWidth = false,
  size = 'md',
  ...props
}: IButtonProps) => {
  return (
    <S.Container color={color} size={size} fullWidth={fullWidth} {...props}>
      {icon}

      {label}
    </S.Container>
  );
};

export default Button;
