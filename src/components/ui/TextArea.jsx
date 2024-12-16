import * as React from 'react'
import { cn } from '../lib/utils'

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        'flex min-h-[80px] w-full rounded-md bg-gray-900 px-3 py-2 text-sm ring-offset-background focus:outline-none placeholder:text-muted-foreground focus:border disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = 'Textarea'

export { Textarea }
