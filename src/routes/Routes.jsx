import FormFailMeg from "../components/homeComp/form/formSuccessMeg/FormFailMeg";
import FormSuccessMeg from "../components/homeComp/form/formSuccessMeg/FormSuccessMeg";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import User from "../pages/user/User";
const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/submit-success",
        element: <FormSuccessMeg />,
      },
      {
        path: "/submit-fail",
        element: <FormFailMeg />,
      },
      {
        path: "/user",
        element: <User />,
      },
    ],
  },
]);

export default router;
