import ErrorBoundary from "./components/ErrorBoundary";
import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Movie from "./routes/Movie";

interface IRouter {
  id: number;
  path: string;
  element: React.ReactNode;
  errorElement: React.ReactNode;
  children?: IRouter[];
}

const routerData: IRouter[] = [
  {
    id: 1,
    path: "/",
    element: <Home />,
    errorElement: <ErrorBoundary />,
  },
  {
    id: 2,
    path: "/movies/:movieId",
    element: <Movie />,
    errorElement: <ErrorBoundary />,
  },
];

export const router = createBrowserRouter(
  routerData.map((routerInfo) => {
    return {
      path: routerInfo.path,
      element: routerInfo.element,
      errorElement: routerInfo.errorElement,
    };
  })
);
