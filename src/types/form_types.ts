import { AddOnsInterface } from "./add_ons";
import { Plan, PlanMode } from "./plan_card";

export interface UserInfo {
    name: string;
    email: string;
    phone: string;
    errors?: {
        name?: string;
        email?: string;
        phone?: string;
    }
}

export type FormContextInterface = {
    step: number;
    plan: Omit<Plan, "id">;
    userInfo: UserInfo;
    addOns: Omit<AddOnsInterface, "planMode">[];
    mode: PlanMode;
    handleSetPlanMode(mode: PlanMode): void;
    handleSetStep(step: number): void;
    handleSetUserInfo(user: Partial<UserInfo>): void;
    handleSetPlan(plan: Omit<Plan, "id">): void;
    handleSetAddOn(addOn: Omit<AddOnsInterface, "planMode">): void;
    handleRemoveAddOn(addOn: Omit<AddOnsInterface, "planMode">): void;
    validateUserInfo(): boolean;
    validateAddOns(): boolean;
    validateUserPlan(): boolean;
}