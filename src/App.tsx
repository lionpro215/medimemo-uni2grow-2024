
import './App.css'
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { Login } from './pages/login/login';


const routers = createBrowserRouter([
  {
    element: <Login />,
    path: "/login",
  },
  {
    path: "/",
    loader: () => redirect("/login"),
  },
]);

function App() {
  return <RouterProvider router={routers} />;
}

export default App
