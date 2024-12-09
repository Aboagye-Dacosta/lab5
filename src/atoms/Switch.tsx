import { OnChange } from "../types/text_field";
import { handleChecked } from "../utils/handle_checked";

const Switch: React.FC<{ onChange: OnChange; checked: boolean }> = ({
  onChange,
  checked,
}) => {
  return (
    <div className="w-[40px] relative h-[20px] switch">
      <input
        checked={checked}
        type="checkbox"
        onChange={handleChecked(onChange)}
        className="absolute w-full h-full opacity-0"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="38"
        height="20"
        viewBox="0 0 38 20"
        fill="none"
      >
        <rect width="38" height="20" rx="10" fill="#022959" />
        <circle cx="10" cy="10" r="6" fill="white" />
      </svg>
    </div>
  );
};

export default Switch;
