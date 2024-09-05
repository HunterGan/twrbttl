import { Provider } from "react-redux";
import { FC, ReactNode } from "react";
import { store } from "@/entities/store";

export const StoreProvider: FC<{ children: ReactNode }> = ({children}) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
