import React from "react";
import GlobalProvider from "./components/providers/GlobalProvider";
import { Container } from "@material-ui/core";
import "typeface-roboto";
import View from "./components/View";
import Header from "./components/Header";
import "./styles/index.scss";

const App = () => {
  return (
    <GlobalProvider>
      <Container maxWidth="md">
        <Header />
        <View />
      </Container>
    </GlobalProvider>
  );
};

export default App;
