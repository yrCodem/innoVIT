import React from 'react';
import { RefreshCw, AlertTriangle, WifiOff, SearchX } from 'lucide-react';

const FetchFail = ({
  message,
  onRetry,
  type = "error",
  className = ""
}) => {
  const config = {
    error: {
      icon: AlertTriangle,
      iconColor: "text-yellow-500",
      title: "Something went wrong!",
      description: "We encountered an issue while loading the content.",
      buttonText: "Try Again"
    },
    offline: {
      icon: WifiOff,
      iconColor: "text-gray-500",
      title: "You're offline",
      description: "Please check your internet connection and try again.",
      buttonText: "Retry"
    },
    notFound: {
      icon: SearchX,
      iconColor: "text-blue-500",
      title: "Content not found",
      description: "The requested content could not be found.",
      buttonText: "Go Back"
    }
  };

  const { icon: Icon, iconColor, title, description, buttonText } = config[type];
  const displayMessage = message || title;

  return (
    <div className={`flex flex-col items-center justify-center py-12 text-center ${className}`}>
      <Icon className={`h-16 w-16 ${iconColor} mb-4`} />
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {displayMessage}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
        {description}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          <RefreshCw className="h-4 w-4" />
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default FetchFail;
