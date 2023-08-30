import React, { useState } from 'react'

const CounterButton: React.FC = () => {
  const [count, setCount] = useState<number>(0)

  return (
    <button
      onClick={() => {
        setCount((count) => count + 1)
      }}
      className="rounded-md border-transparent py-2 px-4 text-light font-bold bg-indigo-800 hover:bg-indigo-600 cursor-pointer"
    >
      count is {count}
    </button>
  )
}

export default CounterButton
