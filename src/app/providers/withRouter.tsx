import {FC, ReactNode} from "react";
import { BrowserRouter } from "react-router-dom";

export const Router: FC<{children: ReactNode}> = ({children}) => (
  <BrowserRouter>
    {children}
  </BrowserRouter>
)
