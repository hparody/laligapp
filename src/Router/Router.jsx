import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LogIn from "../components/LogIn";
import Home from "../components/Home";
import HomeLayout from "src/components/Home/HomeLayout";
import NotFoundPage from "src/components/NotFoundPage";
import { Fragment } from "react";
import Teams from "src/components/Teams";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Fragment>
      <Route path="/" element={<HomeLayout />} errorElement={<NotFoundPage />}>
        <Route path="" element={<Home />} />
        <Route path="my-teams" element={<Teams />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="/login" element={<LogIn />} />
    </Fragment>
  )
);

const Router = () => <RouterProvider router={router}></RouterProvider>;

export default Router;
