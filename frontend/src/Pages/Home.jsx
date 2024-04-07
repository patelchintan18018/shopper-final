import React from 'react';
import Hero from '../Components/Hero';
import Popular from '../Components/Popular';
import Offer from '../Components/Offer';
import NewCollections from '../Components/NewCollections';
import NewsLetter from '../Components/NewsLetter';

function Home() {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}

export default Home