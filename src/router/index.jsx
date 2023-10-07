import { createBrowserRouter } from "react-router-dom";
import Landing from "src/pages/landing";
import MainLayout from "src/pages/main-layout";



const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Landing/>
            }
        ]
    }
])

export default appRouter