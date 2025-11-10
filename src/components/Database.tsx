import { useMutation, useQuery } from "@tanstack/react-query"
import { useContext } from "react"
import { EnvContext } from "./EnvProvider"

function Database() {
  const env = useContext(EnvContext)
  const query = useQuery({
    queryKey: ['database'],
    queryFn: async () => {
      const res = await fetch(`${env.VITE_API_URL}/database`)
      const json = await res.json()

      return json.data as string[]
    }
  })

  const mutation = useMutation({
    mutationKey: ['play'],
    mutationFn: (file: string) => fetch(`${env.VITE_API_URL}/play?file=${file}`, {method: "POST"})
  })

  return (
    <div>
      {query.isError && (
        <div>
          Error loading database.
        </div>
      )}

      {query.isSuccess && (
        <div>
          <ul>
            {query.data.map((item) => (
              <li key={item}>
                <button onClick={() => mutation.mutate(item)}>
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Database
