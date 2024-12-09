import { useState } from "react";
import Switch from "../atoms/Switch";
import Typography from "../atoms/Typography";
import { PlanMode as PlanModeType } from "../types/plan_card";
import { OnChange } from "../types/text_field";

const PlanMode: React.FC<{
  onChange: OnChange;
  initialValue: PlanModeType;
}> = ({ onChange, initialValue }) => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex items-center justify-center w-full gap-[24px] bg-light-grey p-y-[15px] radius-[8px]">
      <Typography
        weight="weight-500"
        size="fs-x-sm"
        color={checked || initialValue == "yr" ? "grey" : "denim"}
      >
        Monthly
      </Typography>
      <Switch
        onChange={(value) => {
          setChecked(value as boolean);
          onChange(value ? "yr" : "mo");
        }}
        checked={initialValue == "yr"}
      />
      <Typography
        weight="weight-500"
        size="fs-x-sm"
        color={!checked || initialValue == "mo" ? "grey" : "denim"}
      >
        Yearly
      </Typography>
    </div>
  );
};

export default PlanMode;
