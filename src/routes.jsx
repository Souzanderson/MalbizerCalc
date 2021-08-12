import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles";
import { Calculadora } from "./pages/calculadora/calculadora.component";

const Routes = () => {
  return (
    <BrowserRouter>
      <GlobalStyle>
      </GlobalStyle>
      <Route component={Calculadora} path="/"exact />
    </BrowserRouter>
  );
};

export default Routes;
