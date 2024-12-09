import Step from "../molecule/Step";

const StepsDisplay: React.FC<{ current: number }> = ({ current }) => {
  return (
    <div className="flex flex-row lg:flex-col gap-[24px] items-start justify-start p-x-[24px]">
      <Step current={current == 1} label="Your Info" step="1" />
      <Step current={current == 2} label="select plan" step="2" />
      <Step current={current == 3} label="add-ons" step="3" />
      <Step current={current == 4} label="summary" step="4" />
    </div>
  );
};

export default StepsDisplay;
