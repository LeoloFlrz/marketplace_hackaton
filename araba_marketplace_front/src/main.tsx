import * as ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import {router} from "../src/components/Routes"
import {RouterProvider} from "react-router-dom"
import React from "react"
import { NavbarComponent } from "./components/NavbarComponent";
import { Footer } from "./components/Footer";
// import Cardetail from "./components/Cardetail";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NavbarComponent/>
    {/* <Cardetail />  */}
    <RouterProvider router={router} />
   
  </React.StrictMode>,
)
