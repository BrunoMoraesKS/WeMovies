import React from 'react';
import trashBin from '../../assets/icons/trashBin.svg';
import useCart from '../../hooks/useCart';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { ICartProduct } from '../../interfaces/products/cartProduct';
import { formatCurrencyBRL } from '../../utils/currency';
import CartCounter from '../CartCounter';
import * as S from './styles';

interface ICartMovieCardProps {
  movie: ICartProduct;
}

const CartMovieCard = ({ movie }: ICartMovieCardProps) => {
  const { width } = useWindowDimensions();

  const {
    addMovieToCart,
    changeMovieQuantity,
    removeMoviefromCart,
    deleteMoviefromCart,
  } = useCart();

  const movieWithoutQuantity = {
    id: movie.id,
    title: movie.title,
    image: movie.image,
    price: movie.price,
  };

  return (
    <S.Container>
      {width < 720 && (
        <>
          <S.MovieImage src={movie.image} />

          <S.Content>
            <S.TitleContainer>
              <S.MovieTitle>{movie.title}</S.MovieTitle>
              <S.MoviePrice>{formatCurrencyBRL(movie.price)}</S.MoviePrice>
              <S.TrashBin
                onClick={() => {
                  deleteMoviefromCart(movieWithoutQuantity.id);
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
                  removeMoviefromCart(movieWithoutQuantity.id);
                }}
                value={movie.quantity}
                onChange={(e) => {
                  changeMovieQuantity(
                    movieWithoutQuantity.id,
                    Number(e.target.value)
                  );
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
        </>
      )}

      {width >= 720 && (
        <>
          <S.Column>
            <S.LabelSpan>Produto</S.LabelSpan>

            <S.MovieAndTitleContainer>
              <S.MovieImage src={movie.image} />

              <S.TitleContainer>
                <S.MovieTitle>{movie.title}</S.MovieTitle>
                <S.MoviePrice>{formatCurrencyBRL(movie.price)}</S.MoviePrice>
              </S.TitleContainer>
            </S.MovieAndTitleContainer>
          </S.Column>

          <S.Column>
            <S.LabelSpan>QTD</S.LabelSpan>

            <CartCounter
              onAdd={() => {
                addMovieToCart(movieWithoutQuantity);
              }}
              onRemove={() => {
                removeMoviefromCart(movieWithoutQuantity.id);
              }}
              value={movie.quantity}
              onChange={(e) => {
                changeMovieQuantity(
                  movieWithoutQuantity.id,
                  Number(e.target.value)
                );
              }}
            />
          </S.Column>

          <S.Column>
            <S.LabelSpan>Subtotal</S.LabelSpan>

            <S.SubtotalPrice>
              {formatCurrencyBRL(movie.price * movie.quantity)}
            </S.SubtotalPrice>
          </S.Column>

          <S.Column>
            <S.TrashBin
              onClick={() => {
                deleteMoviefromCart(movieWithoutQuantity.id);
              }}
              src={trashBin}
              alt='lixeira'
            />
          </S.Column>
        </>
      )}
    </S.Container>
  );
};

export default CartMovieCard;
