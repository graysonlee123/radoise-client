import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"
import { EnvContext } from "./EnvProvider"
import styles from "./Status.module.css"

type PlayResponse = {
  id: string
  file: string
  lastModified: string
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

  return (
    <div className={styles.container}>
      {query.isError && (
        <div>
          Error loading status.
        </div>
      )}

      {query.isSuccess && (
        <div>
          <dl>
            <dt>
              <strong>File</strong>:
            </dt>
            <dd>
              {query.data.file}
            </dd>
            <dt>
              <strong>Id</strong>:
            </dt>
            <dd>
              {query.data.id}
            </dd>
            <dt>
              <strong>Last modified</strong>:
            </dt>
            <dd>
              {query.data.lastModified}
            </dd>
          </dl>
        </div>
      )}
    </div>
  )
}

export default Status