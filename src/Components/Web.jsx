import React from 'react';
import GoogleApiWrappers from './GoogleApiWrapper';
import WordCount from './WordCount';
import Ratings from './Ratings';
import Cross from './Cross';
import Maps from "./Maps";

function Web() {
  return (
    <>
        <WordCount />
        <Cross />
        <Ratings/>
        
        <Maps />
        <GoogleApiWrappers />
    </>
  )
}

export default Web;