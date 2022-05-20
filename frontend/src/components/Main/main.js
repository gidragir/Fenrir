/*eslint-disable */
import React, { Component, useEffect, useState } from 'react';
import Catalog from './Catalog/catalog';
import {
  QueryClient,
  QueryClientProvider
} from 'react-query';

const queryClient = new QueryClient();

export class main extends Component {

  render() {
    
    return (
      
        <Catalog /> 
      
    )
  }

}

export default main
