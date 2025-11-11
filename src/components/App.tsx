"use client"

import './App.css'
import Controls from './Controls'
import Database from './Database'
import EnvProvider from './EnvProvider'
import QueryClientProvider from './QueryClientProvider'
import Status from './Status'

function App() {
  return (
    <main style={{margin: "1.5rem"}}>
      <EnvProvider>
        <QueryClientProvider>
          <Status/>
          <Controls/>
          <Database/>
        </QueryClientProvider>
      </EnvProvider>
    </main>
  )
}

export default App