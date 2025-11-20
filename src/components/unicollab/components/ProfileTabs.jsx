import React from 'react';

const ProfileTabs = ({ tab, setTab, isOwnProfile }) => {
  const tabs = [
    { key: 'posts', label: 'Posts' },
    { key: 'comments', label: 'Comments' },
  ];

  // Only show "Liked" tab for own profile
  if (isOwnProfile) {
    tabs.push({ key: 'liked', label: 'Liked Posts' });
  }

  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <nav className="flex space-x-8">
        {tabs.map((tabItem) => (
          <button
            key={tabItem.key}
            onClick={() => setTab(tabItem.key)}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              tab === tabItem.key
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
          >
            {tabItem.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default ProfileTabs;
