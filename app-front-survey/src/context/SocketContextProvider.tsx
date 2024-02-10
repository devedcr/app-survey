import React, { createContext, useReducer } from "react";
import reducerSocket from "../reducer/reducerSocket";
import { CompatClient, Stomp } from "@stomp/stompjs";

export interface stateSocket {
    connected: boolean
    socket: CompatClient | null
}

interface schemaSocketContext {
    stateSocket: stateSocket,
    connect: () => void;
}

const initialStateSocket: stateSocket = {
    connected: false,
    socket: null
}

export const socketContext = createContext<schemaSocketContext>({} as schemaSocketContext);

interface Props {
    children: React.ReactNode
}

function SocketContextProvider({ children }: Props) {

    const [stateSocket, dispatch] = useReducer(reducerSocket, initialStateSocket);

    function connect(): void {
        if (stateSocket.connected) return;
        try {
            let socket: CompatClient = Stomp.client(import.meta.env.VITE_WS_CONNECTION)
            socket.connect({}, () => { });
            handlerEvents(socket);
        } catch (error) {
            console.warn("Error Connection Socket: " + error)
        }
    }

    function handlerEvents(socket: CompatClient) {
        socket.onConnect = () => {
            console.info("connected")
            dispatch({ type: "connect", payload: { socket } })
        }
        socket.onDisconnect = () => {
            console.info("diconnected")
            dispatch({ type: "disconnect" })
        }
        socket.onWebSocketError = (error) => {
            console.error('Error with websocket', error);
        }
        socket.onWebSocketClose = (error) => {
            console.info("close" + error);
        }
        socket.onStompError = (frame) => {
            console.error('Broker reported error: ' + frame.headers['message']);
        }
    }

    return (
        <socketContext.Provider value={{
            stateSocket,
            connect,
        }}>
            {children}
        </socketContext.Provider>
    )
}

export default SocketContextProvider;