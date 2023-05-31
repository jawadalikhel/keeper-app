import React from "react";
import App from "./components/App";
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);