"use client"

import './App.css'
import Controls from './Controls'
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
        </QueryClientProvider>
      </EnvProvider>
    </main>
  )
}

export default App