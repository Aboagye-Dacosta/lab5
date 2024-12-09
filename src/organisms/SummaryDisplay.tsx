import Container from "../atoms/Container";
import Typography from "../atoms/Typography";
import { useForm } from "../context/form_context";
import Header from "../molecule/Header";
import ResultsCard from "../molecule/ResultsCard";

const SummaryDisplay: React.FC = () => {
  const { plan, mode, addOns } = useForm();
  return (
    <Container>
      <Header
        title="Finishing up"
        subTitle="Double-check everything looks OK before confirming."
      />
      <ResultsCard addOns={addOns} plan={plan} mode={mode} />
      <div className="flex items-center justify-between w-full">
        <Typography
          color="grey"
          weight="weight-400"
          size="fs-md"
          variant="span"
        >
          Total (per {mode == "mo" ? "month" : "year"})
        </Typography>
        <Typography
          color="purple"
          weight="weight-700"
          size="fs-16"
          variant="span"
        >
          +${plan.value + addOns.reduce((acc, addOn) => acc + addOn.amount, 0)}{" "}
          / {mode}
        </Typography>
      </div>
    </Container>
  );
};

export default SummaryDisplay;
