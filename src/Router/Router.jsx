import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Fragment } from "react";

import HomeLayout from "src/components/Home/HomeLayout";
import NotFoundPage from "src/components/NotFoundPage";
import MyTeams from "src/components/MyTeams";
import Standings from "src/components/Standings";
import Matches from "src/components/Matches";

import LogIn from "../components/LogIn";
import Home from "../components/Home";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Fragment>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <HomeLayout />
          </ProtectedRoute>
        }
        errorElement={<NotFoundPage />}
      >
        <Route path="" element={<Home />} />
        <Route path="my-teams" element={<MyTeams />} />
        <Route path="matches" element={<Matches />} />
        <Route path="standings" element={<Standings />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="/login" element={<LogIn />} />
    </Fragment>
  )
);

const Router = () => <RouterProvider router={router}></RouterProvider>;

export default Router;
