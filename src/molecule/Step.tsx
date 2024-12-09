import StepIndicator from "../atoms/StepIndicator";
import Typography from "../atoms/Typography";
import { StepInterface } from "../types/step_indicator";

const Step: React.FC<StepInterface> = ({ current, label, step }) => {
  return (
    <div className="flex items-center justify-center gap-[16px]">
      <StepIndicator step={step} current={current} />
      <div className="display-none flex-col lg:flex gap-[10px]">
        <Typography
          variant="span"
          color="light-blue"
          weight="weight-400"
          size="fs-12"
        >
          STEP {step}
        </Typography>
        <Typography
          variant="span"
          weight="weight-700"
          color="white"
          size="fs-x-sm"
        >
          {label.toUpperCase()}
        </Typography>
      </div>
    </div>
  );
};

export default Step;
