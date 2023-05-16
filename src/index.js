import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from 'react-router-dom';

import reportWebVitals from "./reportWebVitals";
import { ThirdwebProvider, useContract } from "@thirdweb-dev/react";
import'./index.css';
import Diff from "./Diff";
const activeChain = "mumbai";


const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ThirdwebProvider activeChain={activeChain}>
    <Router>
     <Diff></Diff>
      </Router>
      
    </ThirdwebProvider>
  </React.StrictMode>
);

reportWebVitals();
