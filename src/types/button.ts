type ButtonType = "btn-dark" | "btn-primary"

export interface ButtonInterface {
    variant: ButtonType;
    onClick: () => void;
    [key: string]: unknown;
}