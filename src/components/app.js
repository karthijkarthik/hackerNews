import React from 'react';

import HackersNews from './HackersNews';
import Pagination from './Pagination';

export const App = () => {
  return(
    <>
      Welcome to Hackers News Community
      <HackersNews />
      <Pagination />
    </>
  )
}

export default (App);
