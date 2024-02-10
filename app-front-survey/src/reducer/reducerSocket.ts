import { stateSocket } from "../context/SocketContextProvider";

type actionsSocket =
    { type: "connect", payload: { socket: any } } |
    { type: "disconnect" };

function reducerSocket(state: stateSocket, action: actionsSocket): stateSocket {
    switch (action.type) {
        case "connect":
            return { ...state, connected: true, socket: action.payload.socket };
        case "disconnect":
            return { ...state, connected: false, socket: null };
        default:
            return state;
    }
}

export default reducerSocket;