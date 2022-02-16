import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import NavBar from "./components/navBar";
import Planets from "./components/Planets";
import People from "./components/People";

function App() {
  const [page, setPage] = useState("planets");
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Star wars info</h1>
        <NavBar setPage={setPage} />
        <div className="content"></div>
        {page === "planets" ? <Planets /> : <People />}
      </div>
    </QueryClientProvider>
  );
}

export default App;
