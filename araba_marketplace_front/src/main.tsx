import * as ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css'
import {router} from "../src/components/Routes"
import {RouterProvider} from "react-router-dom"
import React from "react"
import { NavbarComponent } from "./components/NavbarComponent";
import Contact from "./components/Contact";
import { Footer } from "./components/Footer";
// import { CarCard } from "./components/CarCard";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NavbarComponent/>
    <RouterProvider router={router} />
    <Footer/>  
  </React.StrictMode>,
)
