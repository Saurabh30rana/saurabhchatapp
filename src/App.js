import React from "react";

import Chat from "./components/Chat/Chat";
import Join from "./components/Join/Join";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Route path="/" exact component={Join} />
        <Route path="/chat" component={Chat} />
      </Router>
      <Footer />
    </>
  );
};

export default App;
