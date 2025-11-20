import React, { useState } from 'react';

const ContentSelect = ({
  onContentChange,
  className = "",
  includeAll = false,
  includeLiked = false
}) => {
  const [content, setContent] = useState('post');

  const handleChange = (e) => {
    const newContent = e.target.value;
    setContent(newContent);
    if (onContentChange) {
      onContentChange(newContent);
    }
  };

  const getOptions = () => {
    const options = [
      { value: 'post', label: 'Posts' },
      { value: 'comment', label: 'Comments' },
    ];

    if (includeAll) {
      options.unshift({ value: 'all', label: 'All Content' });
    }

    if (includeLiked) {
      options.push({ value: 'liked', label: 'Liked Posts' });
    }

    return options;
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <label htmlFor="content-select" className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
        Show:
      </label>
      <select
        id="content-select"
        value={content}
        onChange={handleChange}
        className="border border-gray-300 dark:border-gray-600 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white min-w-[120px]"
      >
        {getOptions().map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ContentSelect;
