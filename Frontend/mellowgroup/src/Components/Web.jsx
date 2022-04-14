import React from 'react';
import GoogleApiWrappers from './GoogleApiWrapper';
import WordCount from './WordCount';
import Ratings from './Ratings';
import Cross from './Cross';
import Maps from "./Maps";
import Footer from './Footer';

function Web() {
  return (
    <>
        <WordCount />
        <Cross />
        <Ratings/>
        <Cross />
        <Maps />
        <Cross />
        <GoogleApiWrappers />
        <Footer />
    </>
  )
}

export default Web;