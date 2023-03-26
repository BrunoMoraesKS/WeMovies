import React from 'react';
import { IProduct } from '../../interfaces/products/product';
import Button from '../Button';
import * as S from './styles';

interface IMovieCardProps {
  movie: IProduct;
}

const MovieCard = ({ movie }: IMovieCardProps) => {
  return (
    <S.Container>
      <S.MovieImage src={movie.image} />
      <S.MovieTitle>{movie.title}</S.MovieTitle>
      <S.MoviePrice>R$ {movie.price}</S.MoviePrice>
      <Button fullWidth label='Adicionar ao carrinho' />
    </S.Container>
  );
};

export default MovieCard;
