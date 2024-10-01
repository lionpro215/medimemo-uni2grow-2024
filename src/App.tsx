import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/login/Login";
import Therapies from "./pages/therapies/Therapies";
import Medications from "./pages/medications/Medications";
import Contacts from "./pages/contacts/Contacts";
import AppNavigation from "./components/appNavigation/AppNavigation";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/therapies",
    element: <Therapies />,
  },
  {
    path: "/medications",
    element: <Medications />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/navigation",
    element: <AppNavigation />,
  },

  {
    path: "/",
    loader: () => redirect("/login"),
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
