import React from 'react';

const UserMessengerEntry = ({ conservant, conversation, setConservant }) => {
  const isActive = conservant && conservant._id === conversation.recipient._id;

  return (
    <div
      className={`p-4 border-b border-gray-100 dark:border-gray-700 cursor-pointer transition-colors ${
        isActive
          ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
          : 'hover:bg-gray-50 dark:hover:bg-gray-700'
      }`}
      onClick={() => setConservant(conversation.recipient)}
    >
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
          {conversation.recipient.firstName?.charAt(0) || 'U'}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
            {conversation.recipient.firstName} {conversation.recipient.lastName}
          </p>
          {conversation.lastMessage && (
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
              {conversation.lastMessage.content}
            </p>
          )}
        </div>
        {conversation.unreadCount > 0 && (
          <span className="bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {conversation.unreadCount}
          </span>
        )}
      </div>
    </div>
  );
};

export default UserMessengerEntry;
