import {
    createBrowserRouter,
} from "react-router-dom";
import MainSurvey from "../page/survey/main/MainSurvey";
import GraphicSurvey from "../page/survey/graphic/GraphicSurvey";
import NotFound from "../page/error/NotFound";
import Root from "../page/Root";


const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <MainSurvey />
            },
            {
                path: "survey/graphic/:surveyId",
                element: <GraphicSurvey />,
            },
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
]);

export default AppRouter;