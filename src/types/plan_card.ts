
type PlanType = "Arcade" | "Advance" | "Pro" | "Default";
export type PlanMode = "mo" | "yr";

export interface PlanCardInterface {
    plan: PlanType;
    value: number;
    mode: PlanMode;
    discount: number;
    current: boolean;
    onClick: () => void;
}

export interface Plan extends Omit<PlanCardInterface, "mode" | "onClick" | "current"> {
    id: number;
    discount: number;
}