import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import DynamicForm from "./components/DynamicForm";
import "./App.css"

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Dynamic Form</h1>
        <DynamicForm />
      </div>
    </QueryClientProvider>
  
  );
};

export default App;
