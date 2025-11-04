import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Start from "./pages/Start.jsx";
import Signup from "./pages/Signup.jsx";
import Home from "./pages/Home.jsx";
import { ProfileDashboard } from "./component/index.js";
import {VideoPlayerPage} from './component/index.js'
import {UploadPage} from './component/index.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Start />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "profile",
        element: <ProfileDashboard initialTab="subscriptions" />,
      },
      {
        path: "profile/history",
        element: <ProfileDashboard initialTab="history" />,
      },
      {
        path: "watch/:videoId",
        element: <VideoPlayerPage  />,
      },

      { path: "upload",
        element: <UploadPage /> 
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
