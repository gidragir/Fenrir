/*eslint-disable */
import React from 'react';
import Header from "./components/header";
import Footer from "./components/footer";
import Catalog from "./components/catalog";
import About from "./components/about";

import { Routes, Route} from 'react-router-dom';
const constants = require("./static/constants");

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path={constants.urls['home']} element={<Catalog />} /> 
          <Route path={ constants.urls['about'] } element={<About />} /> 
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;