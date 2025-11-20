// Enhanced version
import React from 'react';
import { Check, CheckCheck, Clock } from 'lucide-react';

const Message = ({
  message,
  conservant,
  currentUser,
  showAvatar = true,
  showStatus = true,
  isGroupChat = false
}) => {
  const isFromCurrentUser = message.sender?._id === currentUser?._id;
  const username = isFromCurrentUser ? currentUser?.username : conservant?.username;
  const displayName = isFromCurrentUser
    ? currentUser?.firstName || currentUser?.username
    : conservant?.firstName || conservant?.username;

  const getStatusIcon = () => {
    if (!isFromCurrentUser || !showStatus) return null;

    if (message.status === 'sent') return <Clock className="h-3 w-3 text-gray-400" />;
    if (message.status === 'delivered') return <Check className="h-3 w-3 text-gray-400" />;
    if (message.status === 'read') return <CheckCheck className="h-3 w-3 text-blue-500" />;

    return <Clock className="h-3 w-3 text-gray-400" />; // Default
  };

  const getMessageTime = () => {
    const now = new Date();
    const messageDate = new Date(message.createdAt);
    const diffInHours = (now - messageDate) / (1000 * 60 * 60);

    if (diffInHours < 24) {
      return messageDate.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      });
    } else {
      return messageDate.toLocaleDateString([], {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    }
  };

  return (
    <div className={`flex w-full py-1 ${isFromCurrentUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`flex items-end gap-2 max-w-[75%] ${isFromCurrentUser ? 'flex-row-reverse' : ''}`}>
        {/* Avatar */}
        {!isFromCurrentUser && showAvatar && (
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
            {username?.charAt(0)?.toUpperCase() || 'U'}
          </div>
        )}

        {/* Message Bubble */}
        <div
          className={`rounded-2xl px-4 py-2 transition-colors ${
            isFromCurrentUser
              ? 'bg-blue-500 text-white rounded-br-md hover:bg-blue-600'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-bl-md hover:bg-gray-200 dark:hover:bg-gray-600'
          } ${message.status === 'error' ? 'border border-red-300' : ''}`}
        >
          {/* Sender name for group chats */}
          {isGroupChat && !isFromCurrentUser && (
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">
              {displayName}
            </p>
          )}

          {/* Message content */}
          <p className="text-sm leading-relaxed break-words whitespace-pre-wrap">
            {message.content}
          </p>

          {/* Timestamp and status */}
          <div className={`flex items-center gap-1 mt-1 ${
            isFromCurrentUser ? 'justify-end' : 'justify-start'
          }`}>
            <span className={`text-xs ${
              isFromCurrentUser
                ? 'text-blue-100'
                : 'text-gray-500 dark:text-gray-400'
            }`}>
              {getMessageTime()}
            </span>
            {getStatusIcon()}
          </div>
        </div>

        {/* Avatar for current user (optional) */}
        {isFromCurrentUser && showAvatar && (
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
            {currentUser?.username?.charAt(0)?.toUpperCase() || 'Y'}
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;

// BASIC version
// import React from 'react';

// const Message = ({ message, conservant, currentUser }) => {
//   const isFromCurrentUser = message.sender?._id === currentUser?._id;
//   const username = isFromCurrentUser ? currentUser?.username : conservant?.username;
//   const displayName = isFromCurrentUser
//     ? currentUser?.firstName || currentUser?.username
//     : conservant?.firstName || conservant?.username;

//   return (
//     <div className={`flex w-full py-2 ${isFromCurrentUser ? 'justify-end' : 'justify-start'}`}>
//       <div className={`flex items-end gap-2 max-w-[70%] ${isFromCurrentUser ? 'flex-row-reverse' : ''}`}>
//         {/* Avatar - Only show for received messages */}
//         {!isFromCurrentUser && (
//           <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
//             {username?.charAt(0)?.toUpperCase() || 'U'}
//           </div>
//         )}

//         {/* Message Bubble */}
//         <div
//           className={`rounded-2xl px-4 py-3 ${
//             isFromCurrentUser
//               ? 'bg-blue-500 text-white rounded-br-md'
//               : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-bl-md'
//           }`}
//         >
//           {/* Sender name for group chats (optional) */}
//           {!isFromCurrentUser && (
//             <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">
//               {displayName}
//             </p>
//           )}

//           {/* Message content */}
//           <p className="text-sm leading-relaxed break-words">{message.content}</p>

//           {/* Timestamp */}
//           <p className={`text-xs mt-1 ${
//             isFromCurrentUser
//               ? 'text-blue-100'
//               : 'text-gray-500 dark:text-gray-400'
//           }`}>
//             {new Date(message.createdAt).toLocaleTimeString([], {
//               hour: '2-digit',
//               minute: '2-digit'
//             })}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Message;
