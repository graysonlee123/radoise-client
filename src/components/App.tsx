import './App.css'
import Controls from './Controls'
import EnvProvider from './EnvProvider'

function App() {
  return (
    <main style={{margin: "1.5rem"}}>
      <EnvProvider>
        <Controls/>
      </EnvProvider>
    </main>
  )
}

export default App