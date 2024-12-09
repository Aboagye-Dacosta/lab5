import Container from "../atoms/Container";
import { useForm } from "../context/form_context";
import { plans } from "../data/plan";
import Header from "../molecule/Header";
import PlanCard from "../molecule/PlanCard";
import PlanMode from "../molecule/PlanMode";
import { PlanMode as PlanMoeType } from "../types/plan_card";

const PlanForm: React.FC = () => {
  const { mode, handleSetPlanMode, handleSetPlan, plan } = useForm();
  return (
    <Container>
      <Header
        title="Select your plan"
        subTitle="You have the option of monthly or yearly billing."
      />
      <div className="flex flex-col  lg:flex-row gap-[16px] w-full">
        {plans[mode].map((pl) => (
          <PlanCard
            key={pl.id}
            mode={mode}
            current={pl.plan == plan.plan}
            value={pl.value}
            plan={pl.plan}
            discount={pl.discount}
            onClick={() => handleSetPlan(pl)}
          />
        ))}
      </div>
      <PlanMode
        onChange={(value) => handleSetPlanMode(value as PlanMoeType)}
        initialValue={mode}
      />
    </Container>
  );
};

export default PlanForm;
