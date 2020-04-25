import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "routes";

import "react-bulma-components/dist/react-bulma-components.min.css";
import "app.scss";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
};

export default App;
