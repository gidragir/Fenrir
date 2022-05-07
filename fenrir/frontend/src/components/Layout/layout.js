/*eslint-disable */
import React, { Component } from 'react';
import Header from "./header";
import Footer from "./footer";

class layout extends Component {

  render() {
    return (
      <React.Fragment>
        <Header />
          {this.props.children}
        <Footer />
      </React.Fragment>
    );
  }
}

export default layout;