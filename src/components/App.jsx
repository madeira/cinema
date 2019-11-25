import React from 'react';

import { Footer } from ".";
import { Header } from ".";
import { MainContainer } from '../routes';
import '../style/App.css';

export const App = () => {
  return (
    <div>
      <Header/>
      <MainContainer/>
      <Footer/>
    </div>
  );
}
