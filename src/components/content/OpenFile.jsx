import React from 'react'

const OpenFile = () => {
  return (
    <div className='flex w-full h-full justify-center items-center flex-col'>
      <svg xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 -960 960 960" width="100px" fill="white"><path d="M186-200q-27.75 0-47.37-19.63Q119-239.25 119-267v-426q0-27.75 19.63-47.38Q158.25-760 186-760h588q27.75 0 47.38 19.62Q841-720.75 841-693v426q0 27.75-19.62 47.37Q801.75-200 774-200H186Zm175-35h413q14 0 23-9t9-23v-426q0-14-9-23t-23-9H361v490Zm-35 0v-490H186q-14 0-23 9t-9 23v426q0 14 9 23t23 9h140Zm-172 0v-490 490Zm172 0h35-35Zm0-490h35-35Z"/></svg>
      <h3 className="w-[50%] text-[2rem] font-bold tracking-wide mb-4 text-center">Please select a subject from the sidebar to view its content.</h3>
    </div>
  )
}

export default OpenFile
