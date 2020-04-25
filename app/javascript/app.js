import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "routes";

import "react-bulma-components/dist/react-bulma-components.min.css";
import "app.scss";

import Menu from "components/common/menu";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes />
      </BrowserRouter>
    </>
  );
};

export default App;
