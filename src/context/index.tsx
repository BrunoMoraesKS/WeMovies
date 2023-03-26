import { LoadingContextProvider } from './loading';
import { CartContextProvider } from './cart';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GlobalContext = ({ children }: any) => {
  return (
    <LoadingContextProvider>
      <CartContextProvider>{children}</CartContextProvider>
    </LoadingContextProvider>
  );
};

export default GlobalContext;
