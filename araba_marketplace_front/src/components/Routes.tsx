import {createBrowserRouter} from "react-router-dom";
import { useRouteError } from "react-router-dom";
import LandingPage from "../Pages/landing"
import AllCars from "../Pages/AllCars";

const ErrorPage=()=> {
  const error:any = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/cars",
      element: <AllCars/>,
    },
    // {
    //   path: "/cars/{id}",
    //   element: <Cardetail id={""}/>,
    // },
    // {
    //   path: "/cars/:id",
    //   element:   
    // },
  
  ]);