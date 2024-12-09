import Divider from "../atoms/Divider";
import Typography from "../atoms/Typography";
import { ResultsCardInterface } from "../types/results_card_interface";

const ResultsCard: React.FC<ResultsCardInterface> = ({
  plan,
  addOns,
  mode,
}) => {
  return (
    <div className="flex flex-col items-start justify-start p-x-[24px] p-y-[20px] radius-[8px] gap-[16px] bg-light-grey w-full">
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col items-start justify-start gap-[2px] ">
          <Typography weight="weight-500" color="denim" size="fs-md">
            {plan.plan}({mode == "mo" ? "Monthly" : "Yearly"})
          </Typography>
          <Typography variant="a" color="purple" size="fs-x-sm">
            Change
          </Typography>
        </div>
        <Typography weight="weight-700" color="denim" size="fs-md">
          ${plan.value}/{mode}
        </Typography>
      </div>
      <Divider />
      {addOns.map((addOn, i) => (
        <div key={i} className="flex items-center justify-between w-full">
          <Typography color="grey" weight="weight-400" size="fs-x-sm">
            {addOn.title}
          </Typography>
          <Typography color="denim" weight="weight-400" size="fs-sm">
            +${addOn.amount}/{mode}
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default ResultsCard;
