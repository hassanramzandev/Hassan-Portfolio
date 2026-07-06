import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom"; // 1. Router ko yahan import kiya

// AOS Animations Setup
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
    duration: 1000,
    once: true,
});
AOS.refresh();

ReactDOM.createRoot(
    document.getElementById("root")
).render(
    <React.StrictMode>
        {/* 2. Poore App ko BrowserRouter se wrap kar diya */}
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
);