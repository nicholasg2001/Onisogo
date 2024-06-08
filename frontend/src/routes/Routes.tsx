import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Connections from "@/pages/Connections";
import Home from "@/pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home />},
      { path: "sign-up", element: <SignUpPage /> }
      { path: "connections", element: <Connections />},
      { path: "wordle", element: <></>},
      { path: "langGuessr", element: <></>},
      { path: "leaderboard", element: <></>},
    ]

  }
])