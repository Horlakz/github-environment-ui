import React from "react";
import ReactDOM from "react-dom";
import Router from "./router";

import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider, QueryClient } from "react-query";

ReactDOM.render(
  <React.StrictMode>
    {/* ChakraUI Provider */}
    <ChakraProvider>
      {/* React Query Provider */}
      <QueryClientProvider client={new QueryClient()}>
        {/* main app */}
        <Router />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
