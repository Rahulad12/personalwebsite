import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
import Store from "./Store";
import HomeScreen from "../src/Screen/HomeScreen";
import AboutScreen from "../src/Screen/AboutScreen";
import ProjectScreen from "../src/Screen/ProjectScreen";
import ContactScreen from "../src/Screen/ContactScreen";
import AboutProjectsScreen from "./Screen/AboutProjectsScreen";
import Achievement from "./Component/Achievement";
import BlogScreen from "./Screen/BlogScreen.jsx";

import AdminRoute from "./Component/Admin/AdminRoute.jsx";
import LoginScreen from "./Screen/LoginScreen.jsx";
import CreateProjects from "./Component/Admin/CreateProjects";
import CreateAchievement from "./Component/Admin/CreateAchievement";
import CreateCertification from "./Component/Admin/CreateCertification";
import Employer from "./Component/Admin/Employer";
import CreateExperience from "./Component/Admin/CreateExperience";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/about" element={<AboutScreen />} />
      <Route path="/projects" element={<ProjectScreen />} />
      <Route path="/project/:id" element={<AboutProjectsScreen />} />
      <Route path="/contact" element={<ContactScreen />} />
      <Route path="/achievments" element={<Achievement />} />
      <Route path="/blog" element={<BlogScreen />} />

      <Route path="/login" element={<LoginScreen />} />
      {/* //admin route  */}
      <Route path="/admin" element={<AdminRoute />}>
        <Route path="/admin/createproject" element={<CreateProjects />} />
        <Route
          path="/admin/createachievement"
          element={<CreateAchievement />}
        />
        <Route
          path="/admin/createcertification"
          element={<CreateCertification />}
        />
        <Route path="/admin/employer" element={<Employer />} />
        <Route path="/admin/experience" element={<CreateExperience />} />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
