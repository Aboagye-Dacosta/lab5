import { createContext, useContext } from "react";
import { useLocation } from "react-router-dom";
import { addOns as addOnsData } from "../data/add_ons";
import { plans as plansData } from "../data/plan";
import { useLocalStorageState } from "../hooks/use_local_storage";
import { AddOnsInterface } from "../types/add_ons";
import { FormContextInterface, UserInfo } from "../types/form_types";
import { Plan, PlanMode } from "../types/plan_card";
import { handleValidateUserInfo } from "../utils/handle_validate_user";

export const FormContext = createContext<FormContextInterface>({} as FormContextInterface);


const initPlan: Omit<Plan, "id"> = {
    discount: 0,
    plan: "Default",
    value: 0
};

const initAddOn: Omit<AddOnsInterface, "planMode">[] = []

const initUserInfo: UserInfo = {
    email: "",
    name: "",
    phone: "",
}

export const useFormContext = (): FormContextInterface => {
    const { pathname } = useLocation();
    const [plan, setPlan] = useLocalStorageState<Omit<Plan, "id">>(initPlan, `${pathname}-plan`);
    const [addOns, setAddOn] = useLocalStorageState<Omit<AddOnsInterface, "planMode">[]>(initAddOn, `${pathname}-addons`);
    const [mode, setPlanMode] = useLocalStorageState<PlanMode>("mo", `${pathname}-mode`);
    const [userInfo, setUserInfo] = useLocalStorageState<UserInfo>(initUserInfo, `${pathname}-userInfo`);
    const [step, setStep] = useLocalStorageState<number>(1, `${pathname}-step`);

    const validateUserInfo = () => {
        const errors = handleValidateUserInfo(userInfo);
        setUserInfo({
            ...userInfo,
            errors
        })
        return !(Object.values(errors).map((error) => error === "").filter((val) => val == true).length == 3);
    }

    const validateAddOns = () => {
        return addOns.length == 0;
    }

    const validateUserPlan = () => {
        return plan.plan == "Default";
    }

    const handleSetPlanMode = (mode: PlanMode) => {
        setPlanMode(mode);
        const newAddOns = addOns.map((addon) => addOnsData[mode].find((val) => val.title == addon.title));
        const newPlan = plansData[mode].find((val) => val.plan == plan.plan);

        setAddOn(newAddOns as Omit<AddOnsInterface, "planMode">[]);
        setPlan(newPlan as Omit<Plan, "id">)

    }

    const handleSetPlan = (plan: Omit<Plan, "id">) => {
        setPlan(plan);
    }

    const handleSetAddOn = (addOn: Omit<AddOnsInterface, "planMode">) => {
        setAddOn((addOns) => [
            ...addOns,
            addOn
        ])
    }

    const handleSetStep = (step: number) => {
        setStep(Math.min(step, 4));
    }

    const handleRemoveAddOn = (addOn: Omit<AddOnsInterface, "planMode">) => {
        const remAddOns = addOns.filter((val) => val.title != addOn.title)
        setAddOn(remAddOns)
    }

    const handleSetUserInfo = (user: Partial<UserInfo>) => {
        setUserInfo((val) => ({
            ...val,
            ...user
        }))
    }


    return {
        step,
        mode,
        plan,
        addOns,
        userInfo,
        handleSetPlanMode,
        handleSetUserInfo,
        handleSetPlan,
        handleSetAddOn,
        handleRemoveAddOn,
        handleSetStep,
        validateUserInfo,
        validateAddOns,
        validateUserPlan
    }
}


export const useForm = () => {
    const context = useContext(FormContext);

    if (!FormContext) throw new Error("Context used outside of context provider");
    return context;
}