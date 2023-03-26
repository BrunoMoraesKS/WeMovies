import React from 'react';
import * as S from './styles';
import loader from '../../assets/icons/loader.png';

const CircularProgress = () => {
  return (
    <S.Container>
      <S.Loader src={loader} alt='loading' />
    </S.Container>
  );
};

export default CircularProgress;
