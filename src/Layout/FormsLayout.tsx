import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../context/form_context";
import BottomNavigator from "../molecule/BottomNavigor";
import StepsDisplay from "../organisms/StepsDisplay";
import { routes } from "../routes";
import { getNextPage } from "../utils/get_next_page";

function FormsLayout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const {
    step,
    handleSetStep,
    validateUserInfo,
    validateUserPlan,
    validateAddOns,
    userInfo,
  } = useForm();
  return (
    <>
      <div className="lg:w-[274px] flex flex items-start justify-start lg:p-y-[24px]">
        <StepsDisplay current={step} />
      </div>
      <div className="w-full flex flex-col flex-1 p-x-[24px] gap-[106px]">
        <Outlet />
        <div className="sm:display-fixed bottom-0 left-0 w-full">
          {pathname == routes.success ? (
            <div className="p-y-[24px]"></div>
          ) : (
            <BottomNavigator
              onClick={() => {
                console.log(validateUserInfo());
                console.log(userInfo);
                if (validateUserInfo()) {
                  return;
                }

                if (validateUserPlan() && pathname == routes.plan) {
                  return;
                }

                if (validateAddOns() && pathname == routes.addOns) {
                  return;
                }
                handleSetStep(step + 1);
                navigate(getNextPage(pathname));
              }}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default FormsLayout;
