import moment from "moment";
import { Survey } from "../../../../../dto/response/survey/survey";
import { IoStatsChartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

interface Props {
    survey: Survey;
}

function RowSurvey(props: Props) {
    const { survey } = props;
    return (
        <tr key={survey.id}>
            <th scope="row" className="px-6 py-4 font-medium">
                {survey.name}
            </th>
            <td className="px-6 py-4">
                {moment(survey.dateStart).startOf('second').fromNow()}
            </td>
            <td className="px-6 py-4 ">
                <Link to={`/survey/graphic/${survey.id}`}>
                    <button className="btn bg-select hover:scale-110">
                        <IoStatsChartOutline
                            size={20}
                            color="white"
                        />
                    </button>
                </Link>
            </td>
        </tr>
    )
}

export default RowSurvey;