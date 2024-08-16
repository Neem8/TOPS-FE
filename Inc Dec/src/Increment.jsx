import React from 'react'
import { useState } from'react'

export default function Increment() {
  let [count, setCount] = useState(0)
  return (
    
    <div className='flex flex-col items-center '>
      <div className='text-8xl'>Count is {count}</div>
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => setCount(count + 1)}>Increment</button>
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => setCount(count - 1)}>Decrement</button>
      <br />
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => setCount(count - count)}>Reset</button>
      </div>

  )
}
