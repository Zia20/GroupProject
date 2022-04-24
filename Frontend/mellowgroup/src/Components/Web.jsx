import React from 'react';
import GoogleApiWrappers from './GoogleApiWrapper';
import WordCount from './WordCount';
import Ratings from './Ratings';
import Cross from './Cross';
import Maps from "./Maps";
import Downtown from "./DowntownProjects";
import Highlights from './Highlights';

function Web() {
  return (
    <>
        <WordCount />
        <Cross />
        <Ratings/>
        <Downtown />
        <Maps />
        <Highlights />
        <GoogleApiWrappers />
    </>
  )
}

export default Web;