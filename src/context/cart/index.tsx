import React, { createContext, useState } from 'react';
import { ICartProduct } from '../../interfaces/products/cartProduct';
import { getLocalStorage } from '../../utils/localStorage';

interface CartContextProps {
  cart: ICartProduct[];
  setCart: (cart: ICartProduct[]) => void;
}

export const CartContext = createContext<CartContextProps>({
  cart: getLocalStorage('cartProducts'),
  setCart: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const CartContextProvider = (props: Props) => {
  const [cart, setCart] = useState<ICartProduct[]>(
    getLocalStorage('cartProducts')
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
