import { useEffect, useMemo } from 'react'
import EnvironmentVariableSchema from "../schemas/EnvironmentVariableSchema"
import './App.css'
import Button from './Button'

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
    <div style={{margin: "1rem", display: "flex", gap: "1rem"}}>
      <Button
        onClick={handlePlay}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
        </svg>
        Play
      </Button>
      <Button
        onClick={handlePause}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" />
        </svg>
        Pause
      </Button>
    </div>
  )
}

export default App