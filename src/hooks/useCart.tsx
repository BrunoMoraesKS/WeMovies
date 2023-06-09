import { useContext } from 'react';
import { CartContext } from '../context/cart';
import { ICartProduct } from '../interfaces/products/cartProduct';
import { IProduct } from '../interfaces/products/product';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

const useCart = () => {
  const { setCart } = useContext(CartContext);

  const addMovieToCart = (movie: IProduct) => {
    const cartProducts = getLocalStorage('cartProducts');
    let updatedCartProducts = [];

    const isMovieAlreadyInCart = cartProducts?.some(
      (cartProduct: ICartProduct) => cartProduct.id === movie.id
    );

    if (isMovieAlreadyInCart) {
      updatedCartProducts = cartProducts?.map((cartProduct: ICartProduct) => {
        if (cartProduct.id === movie.id) {
          if (cartProduct.quantity >= 1000) {
            return cartProduct;
          }

          return {
            ...cartProduct,
            quantity: cartProduct.quantity + 1,
          };
        }

        return cartProduct;
      });
    } else if (cartProducts !== null && cartProducts.length > 0) {
      updatedCartProducts = [...cartProducts, { ...movie, quantity: 1 }];
    } else {
      updatedCartProducts = [{ ...movie, quantity: 1 }];
    }

    setLocalStorage('cartProducts', updatedCartProducts);
    setCart(updatedCartProducts);
  };

  const changeMovieQuantity = (id: number, quantity: number) => {
    const cartProducts = getLocalStorage('cartProducts');
    let updatedCartProducts = [];

    if (quantity === 0) {
      quantity = 1;
    }
    if (quantity > 1000) {
      quantity = 1000;
    }

    updatedCartProducts = cartProducts?.map((cartProduct: ICartProduct) => {
      if (cartProduct.id === id) {
        return {
          ...cartProduct,
          quantity,
        };
      } else {
        return cartProduct;
      }
    });

    setLocalStorage('cartProducts', updatedCartProducts);
    setCart(updatedCartProducts);
  };

  const removeMoviefromCart = (id: number) => {
    const cartProducts = getLocalStorage('cartProducts');
    let updatedCartProducts = [];

    updatedCartProducts = cartProducts?.map((cartProduct: ICartProduct) => {
      if (cartProduct.id === id) {
        return {
          ...cartProduct,
          quantity: cartProduct.quantity - 1,
        };
      }

      return cartProduct;
    });

    updatedCartProducts = updatedCartProducts.filter(
      (cartProduct: ICartProduct) => cartProduct.quantity > 0
    );

    setLocalStorage('cartProducts', updatedCartProducts);
    setCart(updatedCartProducts);
  };

  const deleteMoviefromCart = (id: number) => {
    const cartProducts = getLocalStorage('cartProducts');
    let updatedCartProducts = [];

    updatedCartProducts = cartProducts?.filter(
      (cartProduct: ICartProduct) => cartProduct.id !== id
    );

    setLocalStorage('cartProducts', updatedCartProducts);
    setCart(updatedCartProducts);
  };

  const getTotalPrice = () => {
    const cartProducts = getLocalStorage('cartProducts');
    let totalPrice = 0;

    cartProducts?.forEach((cartProduct: ICartProduct) => {
      totalPrice += cartProduct.price * cartProduct.quantity;
    });

    return totalPrice;
  };

  const getMovieQuantity = (id: number) => {
    const cartProducts = getLocalStorage('cartProducts');
    let movieQuantity = 0;

    cartProducts?.forEach((cartProduct: ICartProduct) => {
      if (cartProduct.id === id) {
        movieQuantity = cartProduct.quantity;
      }
    });

    return movieQuantity;
  };

  const cleanCart = () => {
    setLocalStorage('cartProducts', []);
    setCart([]);
  };

  return {
    addMovieToCart,
    changeMovieQuantity,
    removeMoviefromCart,
    deleteMoviefromCart,
    getTotalPrice,
    getMovieQuantity,
    cleanCart,
  };
};

export default useCart;
