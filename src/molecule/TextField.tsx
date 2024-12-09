import React from "react";
import Input from "../atoms/Input";
import Typography from "../atoms/Typography";
import { TextFieldInterface } from "../types/text_field";

const TextField: React.FC<Partial<TextFieldInterface>> = ({
  fieldName,
  label,
  type = "text",
  placeholder,
  errorMessage,
  initialValue,
  onChange,
}) => {
  return (
    <div className="text-field flex flex-col gap-[2px] items-start justify-start w-full">
      <div className="flex flex-row justify-between items-center w-full">
        {label && (
          <label htmlFor={fieldName} className="weight-400 fs-x-sm">
            {label}
          </label>
        )}
        <Typography color="red-error" size="fs-x-sm" weight="weight-700">
          {errorMessage}
        </Typography>
      </div>
      <Input
        hasError={errorMessage ? true : false}
        fieldName={fieldName}
        type={type}
        initialValue={initialValue}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default TextField;
