import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { GlobalContextProvider } from "./context/GlobalContext";
import { Router } from "./routes/Router";

function App() {
  return (
    <div>
      <Header />
      <GlobalContextProvider>
        <Router />
      </GlobalContextProvider>
      <Footer />
    </div>
  );
}

export default App;
