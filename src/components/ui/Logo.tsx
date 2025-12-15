
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img
        src="/logo (2).png"
        alt="befound logo"
        className="w-12 h-12 md:w-14 md:h-14 mr-3 object-contain"
      />
      <h1 className="text-2xl font-bold">
        <span className="text-befoundOrange">be</span>
        <span className="text-befoundPurple font-newsreader font-bold">Found</span>
      </h1>
    </Link>
  );
};

export default Logo;
