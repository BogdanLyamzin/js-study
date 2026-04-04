import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import ThemeProvider from "../context/ThemeProvider";

import Navigation from "../pages/Navigation";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import "../shared/styles/style.css";

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Navigation />
        <Footer />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
