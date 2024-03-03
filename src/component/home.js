import React from 'react';
import olympicsImage from './olympicsImage.png';

const Home = () => (
  <div className="home">
    <h1>
      Welcome to Rio 2016
      <br />
      Olympics Scoreboard
    </h1>
    <span>
      We are thrilled to extend a warm welcome to all visitors to our scoreboard website.
      <br />
      Here, you&apos;ll find everything you need to stay up-to-date with the latest scores, stats,
      <br />
      and highlights from your favorite sports events.
    </span>
    <img src={olympicsImage} alt="Olympics" className="olymp_image" />
    {' '}
    {/* Use the image */}
  </div>
);

export default Home;
