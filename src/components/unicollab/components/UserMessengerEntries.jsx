import React from 'react';
import UserMessengerEntry from './UserMessengerEntry';
import Loading from './Loading';

const UserMessengerEntries = ({ conservant, conversations, setConservant, loading }) => {
  if (loading) {
    return (
      <div className="p-4 h-full">
        <Loading />
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-gray-200 dark:border-gray-600">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Messages
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto">
        {conversations.length === 0 ? (
          <div className="p-4 text-center text-gray-500 dark:text-gray-400">
            No conversations yet
          </div>
        ) : (
          conversations.map((conversation) => (
            <UserMessengerEntry
              key={conversation._id}
              conservant={conservant}
              conversation={conversation}
              setConservant={setConservant}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default UserMessengerEntries;
