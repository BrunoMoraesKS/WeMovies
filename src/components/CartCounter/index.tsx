import React from 'react';
import add from '../../assets/icons/add.svg';
import remove from '../../assets/icons/remove.svg';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';

interface ICartCounterProps {
  value: number;
  onAdd: () => void;
  onRemove: () => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CartCounter = ({
  value,
  onAdd,
  onRemove,
  onChange,
}: ICartCounterProps) => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Icon
        onClick={() => {
          onRemove();
        }}
        src={remove}
        alt='Remover uma unidade'
      />

      <S.AmountInput value={value} onChange={onChange} />

      <S.Icon
        onClick={() => {
          onAdd();
        }}
        src={add}
        alt='Adicionar uma unidade'
      />
    </S.Container>
  );
};

export default CartCounter;
