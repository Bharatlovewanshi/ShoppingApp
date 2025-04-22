import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Toaster } from "react-hot-toast";
ReactDOM.createRoot(document.getElementById("root")).render(
    
        <BrowserRouter>
        <Provider store={store}>
           <App />
           <Toaster />
        </Provider>  
        </BrowserRouter>
       
);
