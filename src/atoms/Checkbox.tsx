import { useState } from "react";
import { OnChange } from "../types/text_field";
import { handleChecked } from "../utils/handle_checked";

const Checkbox: React.FC<{ onChange: OnChange; [key: string]: unknown }> = ({
  onChange,
  ...rem
}) => {
  const [state, setState] = useState(false);
  return (
    <div className="relative w-[2rem] h-[2rem]">
      <input
        {...rem}
        type="checkbox"
        className="absolute z-100 w-full h-full opacity-0"
        onChange={handleChecked((value) => {
          onChange(value);
          setState(value as boolean);
        })}
      />
      {(state || (rem["checked"] as boolean)) && (
        <img
          src="./assets/images/icon-checkmark.svg"
          className="absolute top-50 left-50 -translate-50 w-[1rem]"
        />
      )}
      <div
        className={`h-full w-full ${
          (state || (rem["checked"] as boolean)) && "bg-purple"
        } border radius-[4px]`}
      ></div>
    </div>
  );
};

export default Checkbox;
