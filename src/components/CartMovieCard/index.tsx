import React from 'react';
import trashBin from '../../assets/icons/trashBin.svg';
import useCart from '../../hooks/cart';
import { ICartProduct } from '../../interfaces/products/cartProduct';
import { formatCurrencyBRL } from '../../utils/currency';
import Button from '../Button';
import CartCounter from '../CartCounter';
import * as S from './styles';

interface ICartMovieCardProps {
  movie: ICartProduct;
}

const CartMovieCard = ({ movie }: ICartMovieCardProps) => {
  const { addMovieToCart, removeMoviefromCart, deleteMoviefromCart } =
    useCart();

  const movieWithoutQuantity = {
    id: movie.id,
    title: movie.title,
    image: movie.image,
    price: movie.price,
  };

  return (
    <S.Container>
      <S.MovieImage src={movie.image} />

      <S.Content>
        <S.TitleContainer>
          <S.MovieTitle>{movie.title}</S.MovieTitle>
          <S.MoviePrice>{formatCurrencyBRL(movie.price)}</S.MoviePrice>
          <S.TrashBin
            onClick={() => {
              deleteMoviefromCart(movieWithoutQuantity);
            }}
            src={trashBin}
            alt='lixeira'
          />
        </S.TitleContainer>

        <S.CounterContainer>
          <CartCounter
            onAdd={() => {
              addMovieToCart(movieWithoutQuantity);
            }}
            onRemove={() => {
              removeMoviefromCart(movieWithoutQuantity);
            }}
            value={movie.quantity}
            onChange={() => {
              console.log('change');
            }}
          />

          <S.SubtotalContainer>
            <S.LabelSpan>Subtotal</S.LabelSpan>
            <S.SubtotalPrice>
              {formatCurrencyBRL(movie.price * movie.quantity)}
            </S.SubtotalPrice>
          </S.SubtotalContainer>
        </S.CounterContainer>
      </S.Content>
    </S.Container>
  );
};

export default CartMovieCard;
