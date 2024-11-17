import { AppRouter } from "./routes/AppRouter"
import { Providers } from "./shared/Providers"

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
