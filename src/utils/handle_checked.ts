import { OnChange } from "../types/text_field";

export const handleChecked = (onChange?: OnChange) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
        onChange(e.target.checked);
    }
};