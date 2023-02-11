import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Home from "./routes/Home";
import Account from "./routes/Account";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import { ThemeProvider } from "./context/ThemeContext";
import Nav from "./components/Nav";
import CoinPage from "./routes/CoinPage";
import { CoinsContextProvider } from "./context/CoinsContext";

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <CoinsContextProvider>
          <Router>
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/coins/:coinId" element={<CoinPage />} />
              <Route path="/account" element={<Account />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
          </Router>
        </CoinsContextProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
