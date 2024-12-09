import { TextFieldInterface } from "./text_field";

export interface InputInterface extends Omit<TextFieldInterface, "errorMessage"> {
    hasError: boolean;
   
}
