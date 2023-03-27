import React, { useState, useContext } from 'react';
import Button from '../../components/Button';
import emptyCartImage from '../../assets/images/emptyCart.svg';
import successPurchase from '../../assets/images/successPurchase.svg';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import CartMovieCard from '../../components/CartMovieCard';
import { CartContext } from '../../context/cart';
import useCart from '../../hooks/useCart';
import { formatCurrencyBRL } from '../../utils/currency';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const Cart = () => {
  const { width } = useWindowDimensions();
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);
  const { getTotalPrice, cleanCart } = useCart();

  const [purchaseMade, setPurchaseMade] = useState<boolean>(false);

  return (
    <S.Container>
      {cart.length === 0 && !purchaseMade && (
        <S.EmptyCartContainer>
          <S.EmptyCartText>Parece que não há nada por aqui :(</S.EmptyCartText>

          <S.EmptyCartImageContainer>
            <S.EmptyCartImage
              src={emptyCartImage}
              alt='carrinho vazio ilustração'
            />
            <S.HorizontalLine />
          </S.EmptyCartImageContainer>

          <Button
            label='Voltar'
            onClick={() => {
              navigate('/');
            }}
          />
        </S.EmptyCartContainer>
      )}

      {cart.length > 0 && !purchaseMade && (
        <>
          <S.CartProductsContainer>
            {cart?.map((movie, index) => {
              return (
                <CartMovieCard key={`${movie.id} - ${index}`} movie={movie} />
              );
            })}
          </S.CartProductsContainer>

          <S.SeparatorLine />

          <S.FinishPurchaseContainer>
            <S.TotalContainer>
              <S.LabelSpan>Total</S.LabelSpan>
              <S.TotalPrice>{formatCurrencyBRL(getTotalPrice())}</S.TotalPrice>
            </S.TotalContainer>
            <Button
              onClick={() => {
                setPurchaseMade(true);
                cleanCart();
              }}
              size='md'
              fullWidth={width >= 720 ? false : true}
              label='Finalizar Pedido'
            />
          </S.FinishPurchaseContainer>
        </>
      )}

      {purchaseMade && (
        <S.EmptyCartContainer>
          <S.EmptyCartText>Compra realizada com sucesso!</S.EmptyCartText>

          <S.EmptyCartImageContainer>
            <S.EmptyCartImage
              src={successPurchase}
              alt='Compra realizada com sucesso'
            />
          </S.EmptyCartImageContainer>

          <Button
            label='Voltar'
            onClick={() => {
              navigate('/');
            }}
          />
        </S.EmptyCartContainer>
      )}
    </S.Container>
  );
};

export default Cart;
