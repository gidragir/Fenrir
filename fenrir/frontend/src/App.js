/*eslint-disable */
import React from 'react';
import Main from "./components/Main/main";
import About from "./components/About/about";

import { Routes, Route } from 'react-router-dom';
const constants = require("./static/constants");

class App extends React.Component {

  render() {
    return (
      <Routes>
        <Route path={constants.urls['home']} element={<Main />} />
        <Route path={constants.urls['about']} element={<About />} />
      </Routes>
    );
  }
}

export default App;