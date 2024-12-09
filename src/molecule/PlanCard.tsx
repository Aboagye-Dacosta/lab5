import Typography from "../atoms/Typography";
import { PlanCardInterface } from "../types/plan_card";

const PlanCard: React.FC<PlanCardInterface> = ({
  plan,
  value,
  mode,
  discount,
  current,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col border p-x-[16px] p-y-[15px] :hover:border-purple :focus:border-purple :focus:bg-grey radius-[8px] w-full flex-1 lg:w-[138px] ${
        current && "border-purple bg-light-grey"
      }`}
    >
      <div className="flex flex-row lg:flex-col gap-[24px] flex-1 w-full ">
        <img
          className="w-[3rem]"
          src={`../../public/assets/images/plan-${String(plan).toLowerCase()}-icon.svg`}
          alt=""
        />
        <div className="flex flex-col items-start justify-start gap-[10px]">
          <Typography
            variant="span"
            color="denim"
            weight="weight-500"
            size="fs-md"
          >
            {plan}
          </Typography>
          <Typography
            variant="span"
            color="grey"
            weight="weight-400"
            size="fs-x-sm"
          >
            ${value}/{mode}
          </Typography>
          {discount > 0 && (
            <Typography
              variant="span"
              color="denim"
              weight="weight-400"
              size="fs-x-sm"
            >
              ${discount} {mode == "mo" ? "Month(s)" : "Year(s)"} free
            </Typography>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
