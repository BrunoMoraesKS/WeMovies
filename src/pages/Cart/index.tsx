import React, { useState, useEffect } from 'react';
import Button from '../../components/Button';
import emptyCartImage from '../../assets/images/emptyCart.svg';
import successPurchase from '../../assets/images/successPurchase.svg';
import { ICartProduct } from '../../interfaces/products/cartProduct';
import { getLocalStorage } from '../../utils/localStorage';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import CartMovieCard from '../../components/CartMovieCard';

const Cart = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState<ICartProduct[]>([]);
  const [purchaseMade, setPurchaseMade] = useState<boolean>(false);

  const handleGetCartProducts = async () => {
    setProducts(getLocalStorage('cartProducts'));

    console.log(products);
  };

  useEffect(() => {
    handleGetCartProducts();

    // [{"id":1,"image":"https://wefit-react-web-test.s3.amazonaws.com/viuva-negra.png","price":9.99,"title":"Viúva Negra","amount":2}]
  }, []);

  return (
    <S.Container>
      {!products && !purchaseMade && (
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

      {products && !purchaseMade && (
        <>
          <S.CartProductsContainer>
            {products?.map((movie, index) => {
              return (
                <CartMovieCard key={`${movie.id} - ${index}`} movie={movie} />
              );
            })}
          </S.CartProductsContainer>

          <S.FinishPurchaseContainer>
            <S.SeparatorLine />

            <S.TotalContainer>
              <S.LabelSpan>Total</S.LabelSpan>
              <S.TotalPrice>R$ 29,90</S.TotalPrice>
            </S.TotalContainer>
            <Button
              onClick={() => {
                setPurchaseMade(true);
              }}
              fullWidth
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
