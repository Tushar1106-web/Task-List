import { Fragment } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import Router from "./Router/RoutesProvider";

function App() {
  return (
    <Fragment>
      <RouterProvider router={Router} />
    </Fragment>
  );
}

export default App;
