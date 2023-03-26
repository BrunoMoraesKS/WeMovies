import React from 'react';
import trashBin from '../../assets/icons/trashBin.svg';
import { ICartProduct } from '../../interfaces/products/cartProduct';
import Button from '../Button';
import CartCounter from '../CartCounter';
import * as S from './styles';

interface ICartMovieCardProps {
  movie: ICartProduct;
}

const CartMovieCard = ({ movie }: ICartMovieCardProps) => {
  return (
    <S.Container>
      <S.MovieImage src={movie.image} />

      <S.Content>
        <S.TitleContainer>
          <S.MovieTitle>{movie.title}</S.MovieTitle>
          <S.MoviePrice>R$ {movie.price}</S.MoviePrice>
          <S.TrashBin src={trashBin} alt='lixeira' />
        </S.TitleContainer>

        <S.CounterContainer>
          <CartCounter
            onAdd={() => {
              console.log('add');
            }}
            onRemove={() => {
              console.log('remove');
            }}
            value={movie.amount}
            onChange={() => {
              console.log('change');
            }}
          />

          <S.SubtotalContainer>
            <S.LabelSpan>Subtotal</S.LabelSpan>
            <S.SubtotalPrice>R$ {movie.price * movie.amount}</S.SubtotalPrice>
          </S.SubtotalContainer>
        </S.CounterContainer>
      </S.Content>
    </S.Container>
  );
};

export default CartMovieCard;
