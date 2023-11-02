import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import Index from "./routes/Index.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import Employees from "./routes/Employees.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "employees",
        element: <Employees />,
      },
    ],
  },
]);

export default router;
