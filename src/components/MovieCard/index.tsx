import React from 'react';
import useCart from '../../hooks/cart';
import { IProduct } from '../../interfaces/products/product';
import Button from '../Button';
import * as S from './styles';

interface IMovieCardProps {
  movie: IProduct;
}

const MovieCard = ({ movie }: IMovieCardProps) => {
  const { addMovieToCart } = useCart();

  return (
    <S.Container>
      <S.MovieImage src={movie.image} />
      <S.MovieTitle>{movie.title}</S.MovieTitle>
      <S.MoviePrice>R$ {movie.price}</S.MoviePrice>
      <Button
        onClick={() => {
          addMovieToCart(movie);
        }}
        fullWidth
        label='Adicionar ao carrinho'
      />
    </S.Container>
  );
};

export default MovieCard;
