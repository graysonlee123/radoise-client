"use client"

import './App.css'
import Controls from './Controls'
import EnvProvider from './EnvProvider'
import QueryClientProvider from './QueryClientProvider'

function App() {
  return (
    <main style={{margin: "1.5rem"}}>
      <EnvProvider>
        <QueryClientProvider>
          <Controls/>
        </QueryClientProvider>
      </EnvProvider>
    </main>
  )
}

export default App