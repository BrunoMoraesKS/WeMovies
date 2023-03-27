import { useContext } from 'react';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CircularProgress from '../components/CircularProgress';
import { LoadingContext } from '../context/loading';

const Router = () => {
  const { isLoading } = useContext(LoadingContext);

  const Header = lazy(() => import('../components/Header'));

  const Home = lazy(() => import('../pages/Home'));
  const Cart = lazy(() => import('../pages/Cart'));

  return (
    <Suspense fallback={<CircularProgress />}>
      <BrowserRouter>
        <Header />

        {isLoading && <CircularProgress />}

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/carrinho' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default Router;
