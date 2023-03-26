import React, { useState, useEffect, useContext } from 'react';
import Button from '../../components/Button';
import CircularProgress from '../../components/CircularProgress';
import MovieCard from '../../components/MovieCard';
import { LoadingContext } from '../../context/loading';
import { IProduct } from '../../interfaces/products/product';
import { getProducts } from '../../services/products/getProducts';
import * as S from './styles';

const Home = () => {
  const { setIsLoading } = useContext(LoadingContext);

  const [products, setProducts] = useState<IProduct[]>([]);

  const handleGetProducts = async () => {
    setIsLoading(true);

    const { data } = await getProducts();

    if (data) {
      setProducts(data);
    }

    setIsLoading(false);
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
