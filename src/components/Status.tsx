import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"
import { EnvContext } from "./EnvProvider"
import Header from "./Header"
import Loading from "./Loading"

type PlayResponse = {
  id: string
  file: string
  lastModified: string
  title: string
}

function Status() {
  const env = useContext(EnvContext)

  const query = useQuery({
    queryKey: ['play'],
    queryFn: async () => {
      const res = await fetch(`${env.VITE_API_URL}/play`)
      const json = await res.json()

      return json.data as PlayResponse
    },
  })

  const modified = query.isSuccess ? new Date(query.data.lastModified) : undefined

  return (
    <div>
      <Header>
        Status
      </Header>
      <div>
        {query.isError && (
          <div>
            Error loading status.
          </div>
        )}

        {query.isLoading && (
          <div>
            <Loading/> Loading status...
          </div>
        )}

        {query.isSuccess && (
          <div>
            <p><strong>Noise</strong>: {query.data.title || query.data.file}</p>
            <p><strong>Modified</strong>: {modified?.toLocaleString()}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Status