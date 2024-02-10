import { useCallback, useContext, useEffect, useRef, useState } from "react"
import { Provider } from "../../../provider/provider";
import { IOptionService } from "../../../service/IOptionService";
import { Option } from "../../../dto/response/option/option";
import { socketContext } from "../../../context/SocketContextProvider";
import { Frame, StompSubscription } from "@stomp/stompjs";
import { Survey } from "../../../dto/response/survey/survey";
import { ISurveyService } from "../../../service/ISurveyService";

const ioptionService = Provider.resolve<IOptionService>("IOptionService");
const isurveyService = Provider.resolve<ISurveyService>("ISurveyService");

interface Props {
    surveyId: number;
}

export function useGraphicSurvey(props: Props) {

    const { stateSocket, connect } = useContext(socketContext);
    const [options, setOptions] = useState<Option[]>([]);
    const [survey, setSurvey] = useState<Survey | null>(null);
    const [enableVote, setEnableVote] = useState<boolean>(false);

    const subscriptions = useRef<StompSubscription[]>([]);

    async function listOptionSurvey(surveyId: number) {
        setOptions(await ioptionService.listOptionOfSurvey(surveyId));
    }

    async function findSurvey(surveyId: number) {
        setSurvey(await isurveyService.findById(surveyId))
    }

    function updateVotesOfOption(frame: Frame) {
        let body = JSON.parse(frame.body);
        if(!body.status){
            alert(body.errors[0])
            return;
        }
        setOptions((options) =>
            options.map((option) => {
                if (option.id == body.data.option) return { ...option, votes: option.votes + 1 }
                return option;
            })
        );
    }

    function subscribeGroupSocket() {
        setSubscribe(`/votes/${props.surveyId}`, updateVotesOfOption);
    }

    function setSubscribe(uri: string, callback: any) {
        if (stateSocket.socket == null) return;
        let subscription = stateSocket.socket.subscribe(uri, callback);
        subscriptions.current.push(subscription);
    }

    function unsubscribeGroup() {
        subscriptions.current.forEach((sub) => sub.unsubscribe())
        subscriptions.current = []
    }

    const sendVotes = useCallback((username: string, option: number) => {
        if (!stateSocket.connected) {
            alert("la conexion no se establecio!!!");
            return
        }
        stateSocket.socket?.publish({
            destination: "/survey/vote/create",
            body: JSON.stringify({ username, option })
        });
    }, [stateSocket.socket])


    function OnEnableVote(value: boolean) {
        if (value == enableVote) return;
        setEnableVote(value);
    }

    useEffect(() => {
        findSurvey(props.surveyId);
        listOptionSurvey(props.surveyId)
        connect()
        return () => unsubscribeGroup()
    }, [])

    useEffect(() => {
        subscribeGroupSocket()
    }, [stateSocket.socket])

    return {
        options,
        stateSocket,
        sendVotes,
        enableVote,
        setEnableVote,
        survey,
        OnEnableVote
    }
}