import React, { useState, useEffect } from 'react';
import Button from '../../components/Button';
import emptyCartImage from '../../assets/images/emptyCart.svg';
import { ICartProduct } from '../../interfaces/products/cartProduct';
import { getLocalStorage } from '../../utils/localStorage';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import CartMovieCard from '../../components/CartMovieCard';

const Cart = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState<ICartProduct[]>([]);

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
      {!products && (
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

      {products && (
        <S.CartProductsContainer>
          {products?.map((movie, index) => {
            return (
              <CartMovieCard key={`${movie.id} - ${index}`} movie={movie} />
            );
          })}
        </S.CartProductsContainer>
      )}
    </S.Container>
  );
};

export default Cart;
