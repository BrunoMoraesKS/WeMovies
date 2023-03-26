import { LoadingContextProvider } from './loading';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GlobalContext = ({ children }: any) => {
  return <LoadingContextProvider>{children}</LoadingContextProvider>;
};

export default GlobalContext;
