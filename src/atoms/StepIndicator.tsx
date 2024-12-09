import { StepIndicatorInterface } from "../types/step_indicator";
import Typography from "./Typography";

const StepIndicator: React.FC<StepIndicatorInterface> = ({ step, current }) => {
  return (
    <div
      className="w-[33px] h-[33px] flex items-center justify-center"
      style={{
        backgroundSize: "contain",
        backgroundImage: current
          ? "url('./assets/images/step-indicator-active-icon.svg')"
          : "url('./assets/images/step-indicator-inactive-icon.svg')",
      }}
    >
      <Typography
        variant="span"
        color={current ? "denim" : "white"}
        weight="weight-700"
        size="fs-x-sm"
      >
        {step}
      </Typography>
    </div>
  );
};

export default StepIndicator;
