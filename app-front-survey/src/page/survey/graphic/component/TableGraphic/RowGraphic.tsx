import { IoHandRight } from "react-icons/io5";
import { Option } from "../../../../../dto/response/option/option";

interface Props {
    option: Option
    enableVote: boolean
    sendVotes: (username: string, option: number) => void
}

function RowGraphic(props: Props) {

    const { option, enableVote, sendVotes } = props;

    return (
        <tr key={option.id} className="hover:text-white hover:bg-customSecondary transition-all delay-100 ">
            <th scope="row" className="px-6 py-4 font-medium">
                {option.name}
            </th>
            <td className="px-6 py-4">
                {option.votes}
            </td>
            <td className="px-6 py-4">
                <button
                    disabled={!enableVote}
                    onClick={() => sendVotes("test", option.id)} className="btn bg-red-500 hover:scale-110">
                    <IoHandRight
                        color={"white"}
                        size={20}
                    />
                </button>
            </td>
        </tr>
    )
}

export default RowGraphic;