import React from 'react';
import useCart from '../../hooks/useCart';
import cartIcon from '../../assets/icons/cart.svg';
import { IProduct } from '../../interfaces/products/product';
import Button from '../Button';
import * as S from './styles';
import { formatCurrencyBRL } from '../../utils/currency';

interface IMovieCardProps {
  movie: IProduct;
}

const MovieCard = ({ movie }: IMovieCardProps) => {
  const handleAddMovieToCart = (movie: IProduct) => {
    addMovieToCart(movie);
  };

  const { addMovieToCart, getMovieQuantity } = useCart();

  return (
    <S.Container>
      <S.MovieImage src={movie.image} />
      <S.MovieTitle>{movie.title}</S.MovieTitle>
      <S.MoviePrice>{formatCurrencyBRL(movie.price)}</S.MoviePrice>
      <Button
        onClick={() => {
          handleAddMovieToCart(movie);
        }}
        color={getMovieQuantity(movie.id) > 0 ? 'success' : 'primary'}
        icon={
          <S.ButtonIconContainer>
            <S.ButtonIcon src={cartIcon} alt='Itens no carrinho' />
            <S.ButtonSpan>{getMovieQuantity(movie.id)}</S.ButtonSpan>
          </S.ButtonIconContainer>
        }
        fullWidth
        label={
          getMovieQuantity(movie.id) > 0
            ? getMovieQuantity(movie.id) > 1
              ? 'Itens Adicionados'
              : 'Item Adicionado'
            : 'Adicionar ao carrinho'
        }
      />
    </S.Container>
  );
};

export default MovieCard;
