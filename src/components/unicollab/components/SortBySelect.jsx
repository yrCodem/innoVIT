import React from 'react';

const SortBySelect = ({ sortBy, onSortChange }) => {
  const sortOptions = [
    { value: 'latest', label: 'Latest' },
    { value: 'popular', label: 'Popular' },
    { value: 'most_liked', label: 'Most Liked' },
    { value: 'most_commented', label: 'Most Discussed' }
  ];

  return (
    <select
      value={sortBy}
      onChange={(e) => onSortChange(e.target.value)}
      className="border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
    >
      {sortOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SortBySelect;
