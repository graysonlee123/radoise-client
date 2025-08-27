import z from "zod";

const EnvironmentVariableSchema = z.object({
  VITE_API_URL: z.string(),
})

export default EnvironmentVariableSchema