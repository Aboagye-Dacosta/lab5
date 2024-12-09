import Checkbox from "../atoms/Checkbox";
import Typography from "../atoms/Typography";
import { AddOnsCardInterface } from "../types/add_ons";

const AddOnsCard: React.FC<AddOnsCardInterface> = ({
  title,
  description,
  amount,
  planMode,
  initialValue,
  onChange,
}) => {
  return (
    <Typography variant="label" htmlFor={title}>
      <div
        className={`border p-x-[24px] p-y-[12px] radius-[8px] pointer ${
          initialValue === title && "border-purple bg-light-grey"
        } :hover:border-purple w-full`}
      >
        <div className="flex items-center justify-between gap-[24px]">
          <div className="flex items-center justify-center gap-[24px]">
            <Checkbox
              onChange={onChange}
              id={title}
              checked={initialValue === title}
            />
            <div className="flex flex-col gap-[10px]">
              <Typography color="denim" weight="weight-500" size="fs-md">
                {title}
              </Typography>
              <Typography color="grey" size="fs-sm">
                {description}
              </Typography>
            </div>
          </div>
          <Typography color="purple" weight="weight-400" size="fs-15">
            +${amount}/{planMode}
          </Typography>
        </div>
      </div>
    </Typography>
  );
};

export default AddOnsCard;
