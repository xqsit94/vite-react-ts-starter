import React, { useState } from 'react'

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0)

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-5">
      <h1 className="text-5xl text-dark dark:text-light">Vite + React</h1>
      <div className="text-center">
        <button
          onClick={() => {
            setCount((count) => count + 1)
          }}
          className="rounded-md border-transparent py-2 px-4 text-light font-bold bg-indigo-800 hover:bg-indigo-600 cursor-pointer"
        >
          count is {count}
        </button>
        <p className="text-dark dark:text-light my-10">
          Edit{' '}
          <code className="bg-rose-100 text-dark dark:text-pink font-bold px-2 py-1 rounded">
            src/App.tsx
          </code>{' '}
          and save to test HMR
        </p>
      </div>
    </div>
  )
}

export default App
