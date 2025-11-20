// Enhanced Version
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight'; // For syntax highlighting
import 'highlight.js/styles/github-dark.css'; // Syntax highlighting theme

const Markdown = ({
  content,
  className = "",
  disallowedElements = ["image"],
  skipHtml = true,
  size = "sm", // sm, base, lg
  allowHeadings = true,
  allowLists = true,
  allowCode = true
}) => {
  const sizeClasses = {
    sm: 'prose-sm',
    base: 'prose-base',
    lg: 'prose-lg'
  };

  const components = {
    // Disable headings if not allowed
    ...(!allowHeadings && {
      h1: () => null,
      h2: () => null,
      h3: () => null,
      h4: () => null,
      h5: () => null,
      h6: () => null,
    }),
    // Disable lists if not allowed
    ...(!allowLists && {
      ul: () => null,
      ol: () => null,
      li: () => null,
    }),
    // Disable code if not allowed
    ...(!allowCode && {
      code: () => null,
      pre: () => null,
    }),
    // Custom styles for allowed elements
    p: ({ node, ...props }) => <p className="mb-4 leading-relaxed" {...props} />,
    a: ({ node, ...props }) => (
      <a
        className="text-blue-600 dark:text-blue-400 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    ),
    blockquote: ({ node, ...props }) => (
      <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic my-4 text-gray-600 dark:text-gray-400" {...props} />
    ),
    code: ({ node, inline, ...props }) =>
      inline ? (
        <code className="bg-gray-100 dark:bg-gray-800 rounded px-1.5 py-0.5 text-sm font-mono" {...props} />
      ) : (
        <code className="block bg-gray-100 dark:bg-gray-800 rounded-lg p-4 my-3 text-sm font-mono overflow-x-auto" {...props} />
      ),
  };

  return (
    <div className={`prose ${sizeClasses[size]} dark:prose-invert max-w-none ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={allowCode ? [rehypeHighlight] : []}
        disallowedElements={disallowedElements}
        skipHtml={skipHtml}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default Markdown;

// Basic Version
// import React from 'react';
// import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm'; // Optional: for GitHub Flavored Markdown

// const Markdown = ({ content, className = "", disallowedElements = ["image"], skipHtml = true }) => {
//   return (
//     <div className={`prose prose-sm dark:prose-invert max-w-none ${className}`}>
//       <ReactMarkdown
//         remarkPlugins={[remarkGfm]} // Optional: remove if you don't need GFM
//         disallowedElements={disallowedElements}
//         skipHtml={skipHtml}
//         components={{
//           // Customize specific elements if needed
//           h1: ({ node, ...props }) => <h1 className="text-2xl font-bold mt-6 mb-4" {...props} />,
//           h2: ({ node, ...props }) => <h2 className="text-xl font-bold mt-5 mb-3" {...props} />,
//           h3: ({ node, ...props }) => <h3 className="text-lg font-bold mt-4 mb-2" {...props} />,
//           p: ({ node, ...props }) => <p className="mb-4 leading-relaxed" {...props} />,
//           ul: ({ node, ...props }) => <ul className="list-disc list-inside mb-4 space-y-1" {...props} />,
//           ol: ({ node, ...props }) => <ol className="list-decimal list-inside mb-4 space-y-1" {...props} />,
//           li: ({ node, ...props }) => <li className="ml-4" {...props} />,
//           blockquote: ({ node, ...props }) => (
//             <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic my-4" {...props} />
//           ),
//           code: ({ node, inline, ...props }) =>
//             inline ? (
//               <code className="bg-gray-100 dark:bg-gray-800 rounded px-1 py-0.5 text-sm" {...props} />
//             ) : (
//               <code className="block bg-gray-100 dark:bg-gray-800 rounded p-3 my-3 text-sm overflow-x-auto" {...props} />
//             ),
//           a: ({ node, ...props }) => (
//             <a
//               className="text-blue-600 dark:text-blue-400 hover:underline"
//               target="_blank"
//               rel="noopener noreferrer"
//               {...props}
//             />
//           ),
//           strong: ({ node, ...props }) => <strong className="font-semibold" {...props} />,
//           em: ({ node, ...props }) => <em className="italic" {...props} />,
//         }}
//       >
//         {content}
//       </ReactMarkdown>
//     </div>
//   );
// };

// export default Markdown;
