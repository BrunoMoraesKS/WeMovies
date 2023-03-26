import React, { useState, useEffect } from 'react';
import Button from '../../components/Button';
import CircularProgress from '../../components/CircularProgress';
import MovieCard from '../../components/MovieCard';
import { IProduct } from '../../interfaces/products/product';
import { getProducts } from '../../services/products/getProducts';
import * as S from './styles';

const Home = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const handleGetProducts = async () => {
    const { data } = await getProducts();

    if (data) {
      setProducts(data);
    }
  };

  useEffect(() => {
    handleGetProducts();
  }, []);

  return (
    <S.Container>
      <S.MoviesContainer>
        {products?.map((movie, index) => {
          return <MovieCard key={`${movie.id} - ${index}`} movie={movie} />;
        })}
      </S.MoviesContainer>
    </S.Container>
  );
};

export default Home;
