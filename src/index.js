import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import App from './App';
import { ContextProvider } from "./contexts/ContextProvider";

// ReactDOM.render(<App />, document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ContextProvider>
        <App />
    </ContextProvider>,
   
);