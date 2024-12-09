
export type OnChange = (value: string | boolean) => void

export type TextFieldType = "text" | "email" | "number";

export interface TextFieldInterface {
    placeholder: string;
    label: string;
    fieldName: string;
    initialValue: string;
    errorMessage: string;
    type: TextFieldType;
    onChange: OnChange;
}