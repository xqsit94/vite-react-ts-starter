import React from 'react'
import CounterButton from '@/components/CounterButton.tsx'

const App: React.FC = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-5">
      <h1 className="text-5xl text-dark dark:text-light">Vite + React</h1>
      <div className="text-center">
        <CounterButton />
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
