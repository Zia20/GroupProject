import React from 'react';
import WordCount from './WordCount';
import Ratings from './Ratings';
import Cross from './Cross';
import Maps from './mapbox';

function Web() {
  return (
    <>
        <WordCount />
        <Maps />
        <Ratings/>
        <Cross />
    </>
  )
}

export default Web;