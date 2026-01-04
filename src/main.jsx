import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import BrowseIssues from "./pages/BrowseIssues.jsx";
import ReportIssues from "./pages/ReportIssues.jsx";
import HomePage from "./pages/HomePage.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Profile from "./pages/Profile.jsx";


import { AuthProvider } from "./context/Authcontext.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="browse" element={<BrowseIssues />} />

      <Route
        path="report"
        element={
          <ProtectedRoute>
            <ReportIssues />
          </ProtectedRoute>
        }
      />

      <Route
  path="profile"
  element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  }
/>


      <Route path="login" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
