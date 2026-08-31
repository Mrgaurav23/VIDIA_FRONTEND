import React,{ StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css'
import { App } from "./index.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages//auth/Login.jsx";
import Start from "./component/layout/Start.jsx";
import Register from "./pages/auth/Register.jsx";
import { Home } from "./index.js";
import { ProfileDashboard } from "./index.js";
import {VideoPlayerPage} from "./index.js"
import {UploadPage} from './index.js'
import { Provider } from "react-redux";
import store from './store/store.js'
import Twitter from "./component/tweet/Twitter.jsx";
import PlaylistDetail from "./component/playlist/PlaylistDetail.jsx";

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
        path: "register",
        element: <Register />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "profile",
        element: <ProfileDashboard initialTab="playlists"  />,
      },
      {
        path: "profile/history",
        element: <ProfileDashboard initialTab="history" />,
      },
      {
        path: "twitter",
        element : <Twitter /> 
      },
      {
        path: "watch/:videoId",
        element: <VideoPlayerPage  />,
      },

      { path: "upload",
        element: <UploadPage /> 
      },
      {
        path: `playlist/:playlistId`,
        element: <PlaylistDetail />
      }

    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
