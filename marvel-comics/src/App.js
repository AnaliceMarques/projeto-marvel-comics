import { GlobalContextProvider } from "./context/GlobalContext";
import { Router } from "./routes/Router";

function App() {
  return (
    <div>
      <GlobalContextProvider>
        <Router />
      </GlobalContextProvider>
    </div>
  );
}

export default App;
