import Container from "../atoms/Container";
import { useForm } from "../context/form_context";
import { addOns as addOnsData } from "../data/add_ons";
import AddOnsCard from "../molecule/AddOnsCard";
import Header from "../molecule/Header";

const AddOnsForm: React.FC = () => {
  const { handleRemoveAddOn, handleSetAddOn, addOns, mode } = useForm();
  return (
    <Container>
      <Header
        title="Pick add-ons"
        subTitle="Add-ons help enhance your gaming experience."
      />
      <div className="flex flex-col gap-[10px] w-full">
        {addOnsData[mode].map(function (addOn) {
          const result = addOns.filter((item) => item.title == addOn.title);
          return (
            <AddOnsCard
              key={addOn.title}
              amount={addOn.amount}
              description={addOn.description}
              title={addOn.title}
              planMode={addOn.planMode}
              onChange={(value) => {
                if (value) {
                  handleSetAddOn(addOn);
                } else {
                  handleRemoveAddOn(addOn);
                }
              }}
              initialValue={result.length > 0 ? result[0].title : undefined}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default AddOnsForm;
