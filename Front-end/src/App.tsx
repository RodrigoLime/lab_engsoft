import { AppRouter } from "./routes/AppRouter"
import { Providers } from "@/shared/providers/Providers"

function App() {
  return (
    <>
      <Providers>
        <AppRouter />
      </Providers>
    </>
  )
}

export default App;
