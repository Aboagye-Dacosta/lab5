import { InputInterface } from "../types/Input";
import { handleInput } from "../utils/handle_input";

const Input: React.FC<Partial<InputInterface>> = ({
  type,
  fieldName,
  placeholder,
  initialValue,
  hasError,
  onChange,
}) => {
  return (
    <input
      value={initialValue}
      type={type}
      id={fieldName}
      name={fieldName}
      placeholder={placeholder}
      className={`border :focus:border-purple  radius-[8px] fs-md weight-500 denim :placeholder:grey p-x-[16px] p-y-[15px] w-full ${
        hasError && "border-red"
      }`}
      onChange={handleInput(onChange)}
    />
  );
};

export default Input;
