import { UserInfo } from "../types/form_types";

export const handleValidateUserInfo = (user: UserInfo): Omit<UserInfo, "errors"> => {
    const errors: Omit<UserInfo, "errors"> = {
        name: "",
        email: "",
        phone: "",
    };

    if (!user.name.trim()) {
        errors.name = "Name cannot be empty";
    } else if (!/^[a-zA-Z\s]+$/.test(user.name)) {
        errors.name = "Name can only contain alphabetic characters";
    }
    if (!user.email.trim()) {
        errors.email = "Email cannot be empty";
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(user.email)) {
            errors.email = "Invalid email address";
        }
    }
    if (!user.phone.trim()) {
        errors.phone = "Phone number cannot be empty";
    } else {
        const phoneRegex = /^\d{10}$/; // Adjust the regex based on your phone number format
        if (!phoneRegex.test(user.phone)) {
            errors.phone = "Invalid phone number";
        }
    }
    return errors;
};
