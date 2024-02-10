import { Survey } from "../../../../../dto/response/survey/survey";
import RowSurvey from "./RowSurvey";

interface Props {
    surveys: Survey[];
}

function TableSurvey(props: Props) {
    const { surveys } = props;
    return (
        <table className="w-full text-sm text-left  dark:text-gray-400 border-none shadow-md">
            <thead className="text-xs uppercase  text-gray-300  bg-customGrahphic">
                <tr className="border-opacity-15 border-b border-b-gray-500">
                    <th scope="col" className="px-6 py-3">
                        name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        votes
                    </th>
                    <th scope="col" className="px-6 py-3">
                        action
                    </th>
                </tr>
            </thead>
            <tbody className="bg-customGrahphic text-gray-400">
                {
                    surveys.map((survey) => (<RowSurvey key={survey.id} survey={survey} />))
                }
            </tbody>
        </table>
    )
}

export default TableSurvey;