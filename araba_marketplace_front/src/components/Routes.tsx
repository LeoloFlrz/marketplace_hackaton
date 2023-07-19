
import {createBrowserRouter} from "react-router-dom";
import { useRouteError } from "react-router-dom";

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
      element: <div></div>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/cars",
      element: <div>All Cars</div>,
    },
    {
      path: "/cars:id",
      element: <div>specific car</div>,
    },
  
  ]);

