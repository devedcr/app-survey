import { useParams } from "react-router-dom";
import SphereAnimation from "../../../component/Sphere/SphereAnimation";
import Timer from "../../../component/Timer/Timer";
import { useGraphicSurvey } from "./useGraphicSurvey";
import GraphicBar from "./component/Graphic/GraphicBar";
import GraphicPie from "./component/Graphic/GraphicPie";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js';
import If from "../../../component/If/If";
import TableGraphic from "./component/TableGraphic/TableGraphic";

ChartJS.defaults.color = "white";
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

function GraphicSurvey() {

    const { surveyId } = useParams();
    const { options, sendVotes, enableVote, survey, OnEnableVote } = useGraphicSurvey({ surveyId: Number(surveyId) });

    return (
        <>
            <SphereAnimation />
            <If show={survey != null} component={Timer} params={{ survey, OnEnableVote }} />
            <div className="z-10 mb-16">
                <h1 className="font-semibold text-white text-center -z-10">Survey Fast</h1>
            </div>
            <div className="mt-10 mx:0 md:mx-10">
                <div className="flex flex-wrap gap-2 h-full">
                    <div className="w-full sm:w-[0] flex-grow-[2] flex items-center justify-center z-10 bg-customGrahphic rounded-md">
                        <GraphicBar options={options} />
                    </div>
                    <div className="w-full sm:w-[0] flex-grow-[1] flex items-center justify-center z-10 bg-customGrahphic rounded-md">
                        <GraphicPie options={options} />
                    </div>
                </div>
                <div className="mt-5">
                    <h2 className="text-white font-semibold">Options Votes</h2>
                </div>
                <div className="mt-5">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
                        <TableGraphic options={options} enableVote={enableVote} sendVotes={sendVotes} />
                    </div>
                </div>
            </div>
        </>
    );
}
export default GraphicSurvey;