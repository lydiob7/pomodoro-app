import { FC } from "react";
import { useRoutes } from "react-router";
import Layout from "./Layout";
import paths from "../../config/paths";
import NotFound from "../../pages/general/NotFound";
import HomePage from "../../pages/home/HomePage";

const Router: FC = () => {
    const router = useRoutes([
        {
            path: paths.home,
            element: <Layout />,
            children: [
                { index: true, element: <HomePage /> },
                { path: "*", element: <NotFound /> }
            ]
        }
    ]);
    return router;
};

export default Router;
