import z from "zod";

const EnvironmentVariableSchema = z.object({
  VITE_API_URL: z.string(),
})

export type EnvironmentVariables = z.infer<typeof EnvironmentVariableSchema>

export default EnvironmentVariableSchema