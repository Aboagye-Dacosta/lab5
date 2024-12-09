import { createBrowserRouter, Navigate } from "react-router-dom";
import FormsLayout from "./Layout/FormsLayout";
import Layout from "./Layout/Layout";
import AddOnsForm from "./organisms/AddOnsForm";
import LandingPage from "./organisms/LandingPage";
import PersonalInfoForm from "./organisms/PersonalInforForm";
import PlanForm from "./organisms/PlanForm";
import SuccessDisplay from "./organisms/SuccessDisplay";
import SummaryDisplay from "./organisms/SummaryDisplay";
import Provider from "./provider";
import { routes } from "./routes";

export const router = createBrowserRouter([
  {
    path: routes.base,
    element: (
      <Provider>
        <Layout />
      </Provider>
    ),
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: routes.signup,
        element: <FormsLayout />,
        children: [
          {
            path: routes.signup,
            element: <Navigate to={routes.info} replace />,
          },
          {
            path: routes.info,
            element: <PersonalInfoForm />,
          },
          {
            path: routes.plan,
            element: <PlanForm />,
          },
          {
            path: routes.addOns,
            element: <AddOnsForm />,
          },
          {
            path: routes.summary,
            element: <SummaryDisplay />,
          },
          {
            path: routes.success,
            element: <SuccessDisplay />,
          },
        ],
      },
    ],
  },
]);
