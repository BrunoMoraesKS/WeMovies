/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState } from 'react';

interface LoadingContextProps {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoadingContext = createContext<LoadingContextProps>({
  isLoading: false,
  setIsLoading: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const LoadingContextProvider = (props: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        setIsLoading,
      }}
    >
      {props.children}
    </LoadingContext.Provider>
  );
};
