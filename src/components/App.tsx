import { useEffect, useMemo } from 'react'
import './App.css'
import EnvironmentVariableSchema from "../schemas/EnvironmentVariableSchema"

function App() {
  const vars = useMemo(() => EnvironmentVariableSchema.safeParse(import.meta.env), [])

  useEffect(() => {
    if (!vars.success) {
      vars.error.issues.forEach((issue) => {
        console.error(`Environment variables error: [${issue.path}] ${issue.message}`)
      })
    }
  }, [vars])

  const handlePlay = async () => {
    if (!vars.success) {
      throw new Error(`${handlePlay.name} called before validating env variables`)
    }

    await fetch(`${vars.data.VITE_API_URL}/play`)
  }

  const handlePause = async () => {
    if (!vars.success) {
      throw new Error(`${handlePause.name} called before validating env variables`)
    }

    await fetch(`${vars.data.VITE_API_URL}/pause`)
  }

  if (!vars.success) {
    return (
      <div>
        Environment variable error.
      </div>
    )
  }

  return (
    <div>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  )
}

export default App