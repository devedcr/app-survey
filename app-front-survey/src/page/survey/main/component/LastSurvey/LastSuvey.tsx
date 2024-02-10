import { Survey } from "../../../../../dto/response/survey/survey";
import TableSurvey from "./TableSurvey";

interface Props {
    surveys: Survey[];
}

function LastSurvey(props: Props) {
    const { surveys } = props;
    return (
        <div>
            <h2 className="my-5 text-center text-white">Last Survey</h2>
            <div className="relative w-5/6 mx-auto content-table">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
                    <TableSurvey surveys={surveys} />
                </div>
            </div>
        </div>
    );
}

export default LastSurvey;