import React, { useContext, useEffect, useState } from 'react';
import logo from '../../assets/images/logo.png';
import cartIcon from '../../assets/icons/basket.svg';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import { ICartProduct } from '../../interfaces/products/cartProduct';
import { CartContext } from '../../context/cart';

const Header = () => {
  const { cart } = useContext(CartContext);

  const navigate = useNavigate();

  const getTotalProducts = () => {
    var productsCounter = 0;

    if (cart) {
      cart.forEach((product: ICartProduct) => {
        productsCounter += product.quantity;
      });
    }

    return productsCounter;
  };

  useEffect(() => {
    getTotalProducts();
  }, []);

  return (
    <S.Container>
      <S.Logo
        src={logo}
        alt='Logo WeMovies'
        onClick={() => {
          navigate('/');
        }}
      />

      <S.CartContainer>
        <S.CartSpan>{`${getTotalProducts()} itens`}</S.CartSpan>

        <S.CartIcon
          src={cartIcon}
          alt='carrinho de compras'
          onClick={() => {
            navigate('/carrinho');
          }}
        />
      </S.CartContainer>
    </S.Container>
  );
};

export default Header;
