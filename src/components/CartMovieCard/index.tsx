import React from 'react';
import { ICartProduct } from '../../interfaces/products/cartProduct';
import Button from '../Button';
import * as S from './styles';

interface ICartMovieCardProps {
  movie: ICartProduct;
}

const CartMovieCard = ({ movie }: ICartMovieCardProps) => {
  return (
    <S.Container>
      <S.MovieImage src={movie.image} />

      <S.Content>
        <S.TitleAndPriceContainer>
          <S.MovieTitle>{movie.title}</S.MovieTitle>
          <S.MoviePrice>R$ {movie.price}</S.MoviePrice>
        </S.TitleAndPriceContainer>
      </S.Content>
    </S.Container>
  );
};

export default CartMovieCard;
