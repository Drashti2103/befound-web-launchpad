
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <h1 className="text-2xl font-bold">
        <span className="text-befoundOrange">be</span>
        <span className="text-befoundPurple font-newsreader font-bold">Found</span>
      </h1>
    </Link>
  );
};

export default Logo;
