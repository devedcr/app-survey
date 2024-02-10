import { RouterProvider } from "react-router-dom"
import AppRouter from "./router/AppRouter"
import SocketContextProvider from "./context/SocketContextProvider"

function App() {
  return (
    <SocketContextProvider>
      <RouterProvider router={AppRouter} />
    </SocketContextProvider>
  )
}

export default App
