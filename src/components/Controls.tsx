import { useMutation } from "@tanstack/react-query"
import { useContext } from "react"
import Button from "./Button"
import { EnvContext } from "./EnvProvider"
import Loading from "./Loading"

function Controls() {
  const env = useContext(EnvContext)

  const playMutation = useMutation({
    mutationKey: ['play'],
    mutationFn: () => fetch(`${env.VITE_API_URL}/play`),
  })

  const pauseMutation = useMutation({
    mutationKey: ['pause'],
    mutationFn: () => fetch(`${env.VITE_API_URL}/pause`),
  })

  return (
    <div style={{display: "flex", gap: "1rem"}}>
      <Button
        disabled={playMutation.isPending}
        onClick={() => playMutation.mutate()}
      >
        {playMutation.isPending ? (
          <Loading/>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
          </svg>
        )}
        Play
      </Button>
      <Button
        disabled={pauseMutation.isPending}
        onClick={() => pauseMutation.mutate()}
      >
        {pauseMutation.isPending ? (
          <Loading/>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clipRule="evenodd" />
          </svg>
        )}
        Pause
      </Button>
    </div>
  )
}

export default Controls