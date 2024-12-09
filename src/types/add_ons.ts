import { PlanMode } from "./plan_card";
import { OnChange } from "./text_field";

type AddOnType = "Online service" | "Larger storage" | "Customizable profile";
export interface AddOnsInterface {
    title: AddOnType;
    description: string;
    amount: number;
    planMode: PlanMode;
}

export interface AddOnsCardInterface extends AddOnsInterface {
    onChange: OnChange
    initialValue?: AddOnType;
}
