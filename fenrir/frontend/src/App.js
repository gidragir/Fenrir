/*eslint-disable */
import React from 'react';
import Layout from "./components/layout";
import Main from "./components/main";
import About from "./components/about";

import { Routes, Route} from 'react-router-dom';
const constants = require("./static/constants");

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Routes>
          <Route path={ constants.urls['home'] } element={<Main />} /> 
          <Route path={ constants.urls['about'] } element={<About />} /> 
        </Routes>
      </div>
    );
  }
}

export default App;