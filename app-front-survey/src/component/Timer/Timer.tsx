import Countdown from "react-countdown";
import { IoTimerOutline } from "react-icons/io5"
import { Survey } from "../../dto/response/survey/survey";

interface Props {
    OnEnableVote: (response: boolean) => void
    survey: Survey
}

function Timer(props: Props) {

    const { OnEnableVote, survey } = props;

    function renderer(props: any) {
        const { hours, minutes, seconds, completed } = props;
        if (completed) {
            OnEnableVote(false)
            return <span>Time Completed</span>
        }
        OnEnableVote(true)
        return (<span>{hours}h : {minutes}m : {seconds}s</span>)
    }

    return (
        <div className="fixed top-[40px] right-[10px] z-50 mx:0 md:mx-10">
            <div className="flex gap-2 items-center justify-center bg-customGrahphic rounded-md px-5 py-2 text-white">
                <Countdown date={survey.dateEnd} renderer={renderer} />
                <IoTimerOutline
                    color={'white'}
                    height="20px"
                    width="20px"
                />
            </div>
        </div>
    );
}

export default Timer;