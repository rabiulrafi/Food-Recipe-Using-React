import React from 'react';
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black text-white ">
      <div className="text-center space-y-8">
        <h1 className="text-9xl font-extrabold text-red-800 drop-shadow-lg">404</h1>
        <h2 className="text-4xl font-bold">Page Not Found</h2>
        <p className="text-lg text-gray-400">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <Link
          to="/"
          className="inline-block px-4 py-3 text-lg font-medium text-black bg-yellow-400 rounded-lg hover:bg-orange-600"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};
