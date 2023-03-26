import React from 'react';
import logo from '../../assets/images/logo.png';
import cart from '../../assets/icons/basket.svg';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

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
        <S.CartSpan>0 itens</S.CartSpan>

        <S.CartIcon
          src={cart}
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
