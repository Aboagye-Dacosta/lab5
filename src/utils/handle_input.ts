import { OnChange } from "../types/text_field";

export const handleInput = (onChange?: OnChange) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
        onChange(e.target.value);
    }
};