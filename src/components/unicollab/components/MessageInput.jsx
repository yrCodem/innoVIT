import React, { useState } from 'react'
import { Send, Smile } from 'lucide-react'

const MessageInput = ({
  onSendMessage,
  disabled = false,
  placeholder = 'Type a message...',
  className = '',
}) => {
  const [content, setContent] = useState('')

  const handleSend = () => {
    if (content.trim() && !disabled) {
      onSendMessage(content.trim())
      setContent('')
    }
  }

  const handleKeyPress = e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleChange = e => {
    setContent(e.target.value)
  }

  return (
    <div
      className={`border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 ${className}`}
    >
      <div className='flex items-end gap-2'>
        {/* Emoji Button (optional future feature) */}
        <button
          type='button'
          className='p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors'
          title='Add emoji'
        >
          <Smile className='h-5 w-5' />
        </button>

        {/* Message Input */}
        <div className='flex-1'>
          <textarea
            value={content}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            placeholder={placeholder}
            disabled={disabled}
            rows={1}
            className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white resize-none min-h-[40px] max-h-32 disabled:opacity-50 disabled:cursor-not-allowed'
            style={{
              height: 'auto',
              minHeight: '40px',
            }}
            onInput={e => {
              e.target.style.height = 'auto'
              e.target.style.height = e.target.scrollHeight + 'px'
            }}
          />
        </div>

        {/* Send Button */}
        <button
          onClick={handleSend}
          disabled={!content.trim() || disabled}
          className='p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex-shrink-0'
          title='Send message'
        >
          <Send className='h-5 w-5' />
        </button>
      </div>

      {/* Character count (optional) */}
      <div className='text-xs text-gray-500 dark:text-gray-400 mt-1 text-right'>
        {content.length}/1000
      </div>
    </div>
  )
}

export default MessageInput
