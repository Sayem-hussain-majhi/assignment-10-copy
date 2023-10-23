import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Others from "../Layout/Others";
import Login from "../Pages/Home/Shared/Login/Login";
import Registration from "../Pages/Home/Shared/Registration/Registration";

  const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>

    },
    {
        path: '/',
        element: <Others></Others>,
        children: ([
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            }
        ])
    }

  ])

  export default router;