/*eslint-disable */
import React from 'react';
const Main = React.lazy(() => import("./components/Main/main"));
const About = React.lazy(() => import("./components/About/about"));

import { Routes, Route } from 'react-router-dom';
const constants = require("./static/constants");

class App extends React.Component {

  render() {
    return (
      <React.Suspense fallback={<p>Loading</p>}>
        <Routes>
          <Route path={constants.urls['home']} element={<Main />} />
          <Route path={constants.urls['about']} element={<About />} />
        </Routes>
      </React.Suspense>
    );
  }
}

export default App;