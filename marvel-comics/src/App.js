import { GlobalContextProvider } from "./context/GlobalContext";
import ComicsListPage from "./pages/ComicsListPage";

function App() {
  return (
    <div>
      <GlobalContextProvider>
        <ComicsListPage />
      </GlobalContextProvider>
    </div>
  );
}

export default App;
