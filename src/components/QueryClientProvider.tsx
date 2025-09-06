import { QueryClientProvider as Provider, QueryClient } from "@tanstack/react-query"
import type { ReactNode } from "react"

const queryClient = new QueryClient()

type Props = {
  children: ReactNode
}

function QueryClientProvider({children}: Props) {
  return (
    <Provider client={queryClient}>
      {children}
    </Provider>
  )
}

export default QueryClientProvider