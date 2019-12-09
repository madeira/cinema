import React from 'react';

import { Footer } from ".";
import { Header } from ".";
import { MainContainer } from '../routes';

export const App = () => {
  return (
    <React.Fragment>
      <Header/>
      <MainContainer/>
      <Footer/>
    </React.Fragment>
  );
}
