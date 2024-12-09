export interface StepIndicatorInterface {
    step: string;
    current: boolean;
}

export interface StepInterface extends StepIndicatorInterface {
    label: string;
}