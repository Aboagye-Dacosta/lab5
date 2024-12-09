import { AddOnsInterface } from "./add_ons";
import { PlanCardInterface, PlanMode } from "./plan_card";

export interface ResultsCardInterface {
    plan: Omit<PlanCardInterface, "onClick" | "mode" | "current">,
    addOns: Omit<AddOnsInterface, "planMode">[];
    mode: PlanMode
}