import { Option } from "../../../../../dto/response/option/option"
import RowGraphic from "./RowGraphic";

interface Props {
    options: Option[]
    enableVote: boolean
    sendVotes: (username: string, option: number) => void
}

function TableGraphic(props: Props) {

    const { options, sendVotes, enableVote } = props;

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
                    options.map((option) => <RowGraphic key={option.id} option={option} enableVote={enableVote} sendVotes={sendVotes} />)
                }
            </tbody>
        </table>
    )
}

export default TableGraphic;