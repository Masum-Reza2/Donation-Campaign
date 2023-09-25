import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SelectionDetails from "../Pages/Donation/SelectionDetails";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut />,
        loader: () => fetch('/donations.json'),
        errorElement: <ErrorPage />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/donation', element: <Donation /> },
            { path: '/statistics', element: <Statistics /> },
            { path: '/:detailsId', element: <SelectionDetails /> }
        ]
    },
]);

export default Router