import React from 'react';
import { Link } from 'react-router-dom';

const Copyright = ({ className = "" }) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={`text-sm text-gray-600 dark:text-gray-400 ${className}`}>
      Copyright © {currentYear}{' '}
      <Link
        to="/"
        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:underline"
      >
        innoVIT
      </Link>
      {' '}·{' '}
      <Link
        to="/unicollab"
        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:underline"
      >
        UniCollab
      </Link>
    </div>
  );
};

export default Copyright;
