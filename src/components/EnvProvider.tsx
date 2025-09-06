import { createContext, useEffect, useMemo, type ReactNode } from "react"
import EnvironmentVariableSchema, { type EnvironmentVariables } from "../schemas/EnvironmentVariableSchema"

export const EnvContext = createContext<EnvironmentVariables>({VITE_API_URL: ''})

type Props = {
  children: ReactNode
}

function EnvProvider({children}: Props) {
  const vars = useMemo(() => EnvironmentVariableSchema.safeParse(import.meta.env), [])

  useEffect(() => {
    if (!vars.success) {
      vars.error.issues.forEach((issue) => {
        console.error(`Environment variables error: [${issue.path}] ${issue.message}`)
      })
    }
  }, [vars])

  if (!vars.success) {
    return (
      <p>
        Environment variable parsing error (see console for more details).
      </p>
    )
  }

  return (
    <EnvContext.Provider value={vars.data}>
      {children}
    </EnvContext.Provider>
  )
}

export default EnvProvider